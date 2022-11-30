/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import './Main.css';
import { Grid, Container, Box } from '@mui/material';

import bgImage from '../../assets/images/NBAService/main/ปียมหาราชปก.png';
import imageKing from '../../assets/images/NBAService/main/ปียมหาราช.png';
import buttonImage1 from '../../assets/images/NBAService/main/ปียมหาราชปุ่ม2.png';
import buttonImage2 from '../../assets/images/NBAService/main/ปียมหาราชปุ่ม1.png';
// import bgImage from '../../assets/images/NBAService/main/สถิตในดวงใจตราบนิจนิรันดร์-04.png';
// import imageKing from '../../assets/images/NBAService/main/สถิตในดวงใจตราบนิจนิรันดร์-01.png';
// import buttonImage1 from '../../assets/images/NBAService/main/สถิตในดวงใจตราบนิจนิรันดร์-02.png';
// import buttonImage2 from '../../assets/images/NBAService/main/สถิตในดวงใจตราบนิจนิรันดร์-03.png';

export default function index() {
  const [isValue, setValue] = useState({});
  const onSetLocal = () => {
    sessionStorage.setItem('main', '3af42x5e3veg152xz48xdwaxzdws5');
  };
  const onSetTwoLocal = () => {
    sessionStorage.setItem('submain', '9asd48wd13sadcEAsDas3d1sd');
    sessionStorage.setItem('main', '3af42x5e3veg152xz48xdwaxzdws5');
  };

  useEffect(() => {
    funcFindData();
  }, []);

  const funcFindData = async () => {
    await axios
      .get(`${process.env.REACT_APP_WEB_SERVICE}/first-page`)
      .then((json) => setValue(json.data.data))
      .catch(() => setValue({}));
  };
  return (
    // <div className="cComponent" style={divStyle}>
    <Grid
      sx={{
        backgroundImage: `url(${process.env.REACT_APP_WEB_SERVICE}/static/first-page/${isValue.bgImage})`,
        backgroundSize: 'cover',
        height: '100vh',
        padding: 5,
        backgroundPosition: 'top'
      }}
    >
      <img
        align="center"
        src={`${process.env.REACT_APP_WEB_SERVICE}/static/first-page/${isValue.mainImage}`}
        style={{
          backgroundSize: 'cover',
          margin: 'auto',
          padding: 'auto',
          width: `${isValue.mainImage_width}vh`
        }}
      />

      <Container>
        <Grid container item xs={12} lg={12} sx={{ mx: 'auto' }}>
          <Grid item xs={12} lg={6}>
            <a href={isValue.button1_link}>
              <input
                style={{ width: `${isValue.button1_width}vh` }}
                className="button-main-rigth"
                type="image"
                id="image"
                src={`${process.env.REACT_APP_WEB_SERVICE}/static/first-page/${isValue.button1}`}
                onClick={() => onSetLocal()}
              />
            </a>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Link to="/">
              <input
                style={{ width: `${isValue.button2_width}vh` }}
                className="button-main-left"
                type="image"
                id="image"
                src={`${process.env.REACT_APP_WEB_SERVICE}/static/first-page/${isValue.button2}`}
                onClick={() => onSetTwoLocal()}
              />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Grid>
    // </div>
  );
}
