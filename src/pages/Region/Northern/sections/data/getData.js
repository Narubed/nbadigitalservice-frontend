/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';
import axios from 'axios';

const imagesPrefix = process.env.REACT_APP_DRIVE_SELECT_IMAGE;

export default function getData(props) {
  React.useEffect(async () => {
    const Representative = await axios.get(`${process.env.REACT_APP_WEB_SERVICE}/representatives`);
    const filterRegion = Representative.data.data.filter(
      (value) => value.region_name === 'ภาคเหนือ'
    );
    const dataRepresentatives = [];

    filterRegion.forEach((element, index) => {
      const idx = dataRepresentatives.findIndex((value) => value.title === element.province_name);
      if (idx === -1) {
        const data = {
          title: `${element.province_name}`,
          description: `ตัวอย่างรูปภาพของศูนย์ภายในจังหวัด ${element.province_name}`,
          items: [
            {
              image: `${imagesPrefix}${element.representative_image}`,
              name: `${element.level_name} ${element.representative_name}`,
              pro: true
            }
          ]
        };
        dataRepresentatives.push(data);
      } else {
        const dataitem = {
          image: `${imagesPrefix}${element.representative_image}`,
          name: `${element.level_name} ${element.representative_name}`,
          pro: true
        };
        dataRepresentatives[idx].items.push(dataitem);
      }
      console.log(idx);
    });
    console.log(dataRepresentatives);
    props(dataRepresentatives);
  }, []);
}
