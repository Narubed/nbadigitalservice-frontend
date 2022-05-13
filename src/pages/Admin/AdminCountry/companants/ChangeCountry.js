/* eslint-disable no-loop-func */
import React from 'react';
import axios from 'axios';
import {
  Stack,
  TextField,
  Dialog,
  DialogContent,
  DialogContentText,
  Container,
  Typography,
  Button,
  Slide
} from '@mui/material';
import { element } from 'prop-types';
import { ConnectedTvOutlined, ConstructionOutlined } from '@mui/icons-material';
import { add, parseInt } from 'lodash';
import AddEGONBA from './AddEGONBA';
// import getData from 'src/pages/Region/Central/sections/data/getData';

const Bangkok = ['กรุงเทพมหานคร'];
const North = [
  'เชียงราย',
  'เชียงใหม่',
  'น่าน',
  'พะเยา',
  'แพร่',
  'แม่ฮ่องสอน',
  'ลำปาง',
  'ลำพูน',
  'อุตรดิตถ์'
];
const NorthEast = [
  'กาฬสินธุ์',
  'ขอนแก่น',
  'ชัยภูมิ',
  'นครพนม',
  'นครราชสีมา',
  'บึงกาฬ',
  'บุรีรัมย์',
  'มหาสารคาม',
  'มุกดาหาร',
  'ยโสธร',
  'ร้อยเอ็ด',
  'เลย',
  'สกลนคร',
  'สุรินทร์',
  'ศรีสะเกษ',
  'หนองคาย',
  'หนองบัวลำภู',
  'อุดรธานี',
  'อุบลราชธานี',
  'อำนาจเจริญ'
];
const Central = [
  'กำแพงเพชร',
  'ชัยนาท',
  'นครนายก',
  'นครปฐม',
  'นครสวรรค์',
  'นนทบุรี',
  'ปทุมธานี',
  'พระนครศรีอยุธยา',
  'พิจิตร',
  'พิษณุโลก',
  'เพชรบูรณ์',
  'ลพบุรี',
  'สมุทรปราการ',
  'สมุทรสงคราม',
  'สมุทรสาคร',
  'สิงห์บุรี',
  'สุโขทัย',
  'สุพรรณบุรี',
  'สระบุรี',
  'อ่างทอง',
  'อุทัยธานี'
];
const Eastern = ['จันทบุรี', 'ฉะเชิงเทรา', 'ชลบุรี', 'ตราด', 'ปราจีนบุรี', 'ระยอง', 'สระแก้ว'];
const Western = ['กาญจนบุรี', 'ตาก', 'ประจวบคีรีขันธ์', 'เพชรบุรี', 'ราชบุรี'];
const South = [
  'กระบี่',
  'ชุมพร',
  'ตรัง',
  'นครศรีธรรมราช',
  'นราธิวาส',
  'ปัตตานี',
  'พังงา',
  'พัทลุง',
  'ภูเก็ต',
  'ระนอง',
  'สตูล',
  'สงขลา',
  'สุราษฎร์ธานี',
  'ยะลา'
];
const zone0 = ['กรุงเทพมหานคร'];
const zone1 = [
  'ชัยนาท',
  'นนทบุรี',
  'ปทุมธานี',
  'พระนครศรีอยุธยา',
  'ลพบุรี',
  'สมุทรปราการ',
  'สระบุรี',
  'สิงห์บุรี',
  'อ่างทอง'
];
const zone2 = [
  'จันทบุรี',
  'ฉะเชิงเทรา',
  'ชลบุรี',
  'ตราด',
  'นครนายก',
  'ปราจีนบุรี',
  'ระยอง',
  'สระแก้ว'
];
const zone3 = [
  'ชัยภูมิ',
  'นครราชสีมา',
  'บุรีรัมย์',
  'ยโสธร',
  'ศรีสะเกษ',
  'สุรินทร์',
  'อำนาจเจริญ',
  'อุบลราชธานี'
];
const zone4 = [
  'กาฬสินธุ์',
  'ขอนแก่น',
  'นครพนม',
  'มหาสารคาม',
  'มุกดาหาร',
  'ร้อยเอ็ด',
  'สกลนคร',
  'หนองคาย',
  'หนองบัวลำภู',
  'อุดรธานี',
  'เลย',
  'บึงกาฬ'
];
const zone5 = ['น่าน', 'พะเยา', 'ลำปาง', 'ลำพูน', 'เชียงราย', 'เชียงใหม่', 'แพร่', 'แม่ฮ่องสอน'];
const zone6 = [
  'กำแพงเพชร',
  'ตาก',
  'นครสวรรค์',
  'พิจิตร',
  'พิษณุโลก',
  'สุโขทัย',
  'อุตรดิตถ์',
  'อุทัยธานี',
  'เพชรบูรณ์'
];
const zone7 = [
  'กาญจนบุรี',
  'นครปฐม',
  'ประจวบคีรีขันธ์',
  'ราชบุรี',
  'สมุทรสงคราม',
  'สมุทรสาคร',
  'สุพรรณบุรี',
  'เพชรบุรี'
];
const zone8 = ['กระบี่', 'ชุมพร', 'นครศรีธรรมราช', 'พังงา', 'ภูเก็ต', 'ระนอง', 'สุราษฎร์ธานี'];
const zone9 = ['ตรัง', 'นราธิวาส', 'ปัตตานี', 'พัทลุง', 'ยะลา', 'สงขลา', 'สตูล'];

const nbaBangkok = ['กรุงเทพมหานคร'];
const nbaCentral = [
  'ชัยนาท',
  'นนทบุรี',
  'ปทุมธานี',
  'พระนครศรีอยุธยา',
  'ลพบุรี',
  'สมุทรปราการ',
  'สระบุรี',
  'สิงห์บุรี',
  'อ่างทอง',
  'จันทบุรี',
  'ฉะเชิงเทรา',
  'ชลบุรี',
  'ตราด',
  'นครนายก',
  'ปราจีนบุรี',
  'ระยอง',
  'สระแก้ว',
  'กาญจนบุรี', // zone7
  'ราชบุรี', // zone7
  'สมุทรสาคร', // zone7
  'สุพรรณบุรี' // zone7
];
const nbaNorthEast = [
  'ชัยภูมิ',
  'นครราชสีมา',
  'บุรีรัมย์',
  'ยโสธร',
  'ศรีสะเกษ',
  'สุรินทร์',
  'อำนาจเจริญ',
  'อุบลราชธานี',
  'กาฬสินธุ์',
  'ขอนแก่น',
  'นครพนม',
  'มหาสารคาม',
  'มุกดาหาร',
  'ร้อยเอ็ด',
  'สกลนคร',
  'หนองคาย',
  'หนองบัวลำภู',
  'อุดรธานี',
  'เลย',
  'บึงกาฬ'
];
const nbaNorth = [
  'น่าน',
  'พะเยา',
  'ลำปาง',
  'ลำพูน',
  'เชียงราย',
  'เชียงใหม่',
  'แพร่',
  'แม่ฮ่องสอน',
  'กำแพงเพชร',
  'ตาก',
  'นครสวรรค์',
  'พิจิตร',
  'พิษณุโลก',
  'สุโขทัย',
  'อุตรดิตถ์',
  'อุทัยธานี',
  'เพชรบูรณ์'
];
const nbaSouth = [
  'กระบี่',
  'ชุมพร',
  'นครศรีธรรมราช',
  'พังงา',
  'ภูเก็ต',
  'ระนอง',
  'สุราษฎร์ธานี',
  'ตรัง',
  'นราธิวาส',
  'ปัตตานี',
  'พัทลุง',
  'ยะลา',
  'สงขลา',
  'สตูล',
  'นครปฐม', // zone 7
  'ประจวบคีรีขันธ์', // zone 7
  'สมุทรสงคราม', // zone 7
  'เพชรบุรี' // zone 7
];

export default function ChangeCountry() {
  const [provinces, setProvinces] = React.useState([]);
  const [amphures, setAmphures] = React.useState([]);
  const [districts, setDistricts] = React.useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    const GETData = await axios.get(`http://localhost:8002/api/nba-geo/provinces`);
    const getApiAmphure = await axios.get('http://localhost:8002/api/nba-geo/amphures');
    const getApitombon = await axios.get('http://localhost:8002/api/nba-geo/districts');
    const Replacescp = GETData.data.data;
    const NewData = [];
    await Replacescp.forEach((element) => {
      const idxNorth = North.findIndex(
        (value) => value === element.PROVINCE_NAME.replace(/ |_/g, '')
      );
      const idxNortheast = NorthEast.findIndex(
        (value) => value === element.PROVINCE_NAME.replace(/ |_/g, '')
      );
      const idxCentral = Central.findIndex(
        (value) => value === element.PROVINCE_NAME.replace(/ |_/g, '')
      );
      const idxEastern = Eastern.findIndex(
        (value) => value === element.PROVINCE_NAME.replace(/ |_/g, '')
      );
      const idxWestern = Western.findIndex(
        (value) => value === element.PROVINCE_NAME.replace(/ |_/g, '')
      );
      const idxSouth = South.findIndex(
        (value) => value === element.PROVINCE_NAME.replace(/ |_/g, '')
      );
      const idxBangkok = Bangkok.findIndex(
        (value) => value === element.PROVINCE_NAME.replace(/ |_/g, '')
      );
      if (idxNorth !== -1) {
        const data = {
          geo_id: parseInt(element.GEO_ID, 10),
          geo_name: 'North',
          province_code: parseInt(element.PROVINCE_CODE, 10),
          province_id: parseInt(element.PROVINCE_ID, 10),
          province_name: element.PROVINCE_NAME.replace(/ |_/g, '')
          // province_name_eng: element.province_name_eng
        };
        NewData.push(data);
      }
      if (idxNortheast !== -1) {
        const data = {
          geo_id: parseInt(element.GEO_ID, 10),
          geo_name: 'NorthEast',
          province_code: parseInt(element.PROVINCE_CODE, 10),
          province_id: parseInt(element.PROVINCE_ID, 10),
          province_name: element.PROVINCE_NAME.replace(/ |_/g, '')
          // province_name_eng: element.province_name_eng
        };
        NewData.push(data);
      }
      if (idxCentral !== -1) {
        const data = {
          geo_id: parseInt(element.GEO_ID, 10),
          geo_name: 'Central',
          province_code: parseInt(element.PROVINCE_CODE, 10),
          province_id: parseInt(element.PROVINCE_ID, 10),
          province_name: element.PROVINCE_NAME.replace(/ |_/g, '')
          // province_name_eng: element.province_name_eng
        };
        NewData.push(data);
      }
      if (idxEastern !== -1) {
        const data = {
          geo_id: parseInt(element.GEO_ID, 10),
          geo_name: 'Eastern',
          province_code: parseInt(element.PROVINCE_CODE, 10),
          province_id: parseInt(element.PROVINCE_ID, 10),
          province_name: element.PROVINCE_NAME.replace(/ |_/g, '')
          // province_name_eng: element.province_name_eng
        };
        NewData.push(data);
      }
      if (idxWestern !== -1) {
        const data = {
          geo_id: parseInt(element.GEO_ID, 10),
          geo_name: 'Western',
          province_code: parseInt(element.PROVINCE_CODE, 10),
          province_id: parseInt(element.PROVINCE_ID, 10),
          province_name: element.PROVINCE_NAME.replace(/ |_/g, '')
          // province_name_eng: element.province_name_eng
        };
        NewData.push(data);
      }
      if (idxSouth !== -1) {
        const data = {
          geo_id: parseInt(element.GEO_ID, 10),
          geo_name: 'South',
          province_code: parseInt(element.PROVINCE_CODE, 10),
          province_id: parseInt(element.PROVINCE_ID, 10),
          province_name: element.PROVINCE_NAME.replace(/ |_/g, '')
          // province_name_eng: element.province_name_eng
        };
        NewData.push(data);
      }
      if (idxBangkok !== -1) {
        const data = {
          geo_id: 0,
          geo_name: 'Bangkok',
          province_code: element.PROVINCE_CODE,
          province_id: element.PROVINCE_ID,
          province_name: element.PROVINCE_NAME.replace(/ |_/g, '')
          // province_name_eng: element.province_name_eng
        };
        NewData.push(data);
      }
    });
    const addZoneData = [];
    await NewData.forEach((element) => {
      const idx0 = zone0.findIndex((value) => value === element.province_name);
      const idx1 = zone1.findIndex((value) => value === element.province_name);
      const idx2 = zone2.findIndex((value) => value === element.province_name);
      const idx3 = zone3.findIndex((value) => value === element.province_name);
      const idx4 = zone4.findIndex((value) => value === element.province_name);
      const idx5 = zone5.findIndex((value) => value === element.province_name);
      const idx6 = zone6.findIndex((value) => value === element.province_name);
      const idx7 = zone7.findIndex((value) => value === element.province_name);
      const idx8 = zone8.findIndex((value) => value === element.province_name);
      const idx9 = zone9.findIndex((value) => value === element.province_name);
      if (idx0 !== -1) {
        addZoneData.push({ ...element, nba_zone: 0 });
      } else if (idx1 !== -1) {
        addZoneData.push({ ...element, nba_zone: 1 });
      } else if (idx2 !== -1) {
        addZoneData.push({ ...element, nba_zone: 2 });
      } else if (idx3 !== -1) {
        addZoneData.push({ ...element, nba_zone: 3 });
      } else if (idx4 !== -1) {
        addZoneData.push({ ...element, nba_zone: 4 });
      } else if (idx5 !== -1) {
        addZoneData.push({ ...element, nba_zone: 5 });
      } else if (idx6 !== -1) {
        addZoneData.push({ ...element, nba_zone: 6 });
      } else if (idx7 !== -1) {
        addZoneData.push({ ...element, nba_zone: 7 });
      } else if (idx8 !== -1) {
        addZoneData.push({ ...element, nba_zone: 8 });
      } else if (idx9 !== -1) {
        addZoneData.push({ ...element, nba_zone: 9 });
      }
    });
    const provinceNBA = [];
    addZoneData.forEach((element) => {
      const idxNorth = nbaNorth.findIndex((value) => value === element.province_name);
      const idxNortheast = nbaNorthEast.findIndex((value) => value === element.province_name);
      const idxCentral = nbaCentral.findIndex((value) => value === element.province_name);
      const idxSouth = nbaSouth.findIndex((value) => value === element.province_name);
      const idxBangkok = nbaBangkok.findIndex((value) => value === element.province_name);
      if (idxNorth !== -1) {
        provinceNBA.push({ ...element, nba_geo_name: 'North', nba_geo_id: 1 });
      } else if (idxNortheast !== -1) {
        provinceNBA.push({ ...element, nba_geo_name: 'NorthEast', nba_geo_id: 3 });
      } else if (idxCentral !== -1) {
        provinceNBA.push({ ...element, nba_geo_name: 'Central', nba_geo_id: 2 });
      } else if (idxSouth !== -1) {
        provinceNBA.push({ ...element, nba_geo_name: 'South', nba_geo_id: 4 });
      } else if (idxBangkok !== -1) {
        provinceNBA.push({ ...element, nba_geo_name: 'Bangkok', nba_geo_id: 0 });
      }
    });
    const amphureNBA = [];
    getApiAmphure.data.data.forEach((element) => {
      const newData = {
        amphur_id: element.AMPHUR_ID,
        amphur_code: parseInt(element.AMPHUR_CODE, 10),
        amphur_name: element.AMPHUR_NAME.replace(/ |_/g, ''),
        // amphur_name_eng: element.amphur_name_eng,
        province_id: element.PROVINCE_ID
      };
      amphureNBA.push(newData);
    });
    // console.log(amphureNBA);

    const tombonNBA = [];
    getApitombon.data.data.forEach((element) => {
      const postcode = getApiAmphure.data.data.find((f) => f.AMPHUR_ID === element.AMPHUR_ID);
      const newData = {
        district_id: element.DISTRICT_ID,
        district_code: parseInt(element.DISTRICT_CODE, 10),
        district_name: element.DISTRICT_NAME.replace(/ |_/g, ''),
        post_code: parseInt(postcode.POSTCODE, 10),
        // district_name_eng: element.district_name_eng,
        amphur_id: element.AMPHUR_ID,
        province_id: element.PROVINCE_ID
      };
      tombonNBA.push(newData);
    });
    setProvinces(provinceNBA);
    setAmphures(amphureNBA);
    setDistricts(tombonNBA);
    // console.log(provinceNBA);
    // console.log(amphureNBA);
    console.log(tombonNBA);
  }, []);
  const onClickPost = async () => {
    // districts.map(async (value, index) => {
    // console.log(value);
    // setTimeout(() => console.log('Initial timeout!'), 5000);
    // await console.log(`start${index}`);
    // await axios.post('http://localhost:8002/api/nba-geo/districts', value, { delay: 1000 });
    // });
    // eslint-disable-next-line no-plusplus
    for (let i = 8500; i < districts.length; i++) {
      console.log(districts[i]);
      // eslint-disable-next-line no-await-in-loop
      await axios.post('http://localhost:8002/api/nba-geo/districts', districts[i]);
    }
  };
  return (
    <Container>
      <div>
        <Button onClick={() => onClickPost()}> Click me </Button>
      </div>
    </Container>
  );
}
