/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import MKBox from '../../components/MKBox';
import MKTypography from '../../components/MKTypography';

import './pinto.scss';

// image
import images from '../../assets/images/NBAService/logo/pinto2.png';

const newData = [
  {
    name: 'messenger',
    picture: require('../../assets/images/NBAService/pinto/icon/messenger.jpg'),
    link: '/pages/pinto/Messenger'
  },
  {
    name: 'nba-car',
    picture: require('../../assets/images/NBAService/pinto/icon/nba-car.jpg'),
    link: '/pages/pinto/NbaCar'
  },
  {
    name: 'ตลาดสด',
    picture: require('../../assets/images/NBAService/pinto/icon/ตลาดสด.jpg'),
    link: '/pages/pinto/Market'
  },
  {
    name: 'ตัดผม',
    picture: require('../../assets/images/NBAService/pinto/icon/ตัดผม.jpg'),
    link: '/pages/pinto/CutHair'
  },
  {
    name: 'ติวเตอร์',
    picture: require('../../assets/images/NBAService/pinto/icon/ติวเตอร์.jpg'),
    link: '/pages/pinto/Tutor'
  },
  {
    name: 'ประปา-ไฟฟ้า',
    picture: require('../../assets/images/NBAService/pinto/icon/ประปา-ไฟฟ้า.jpg'),
    link: '/pages/pinto/WaterElectricity'
  },
  {
    name: 'ปะยาง',
    picture: require('../../assets/images/NBAService/pinto/icon/ปะยาง.jpg'),
    link: '/pages/pinto/Recap'
  },
  {
    name: 'ฝากซื้อ',
    picture: require('../../assets/images/NBAService/pinto/icon/ฝากซื้อ.jpg'),
    link: '/pages/pinto/Deposit'
  },
  {
    name: 'แม่บ้าน',
    picture: require('../../assets/images/NBAService/pinto/icon/แม่บ้าน.jpg'),
    link: '/pages/pinto/Maid'
  },
  {
    name: 'ร้านขายยา',
    picture: require('../../assets/images/NBAService/pinto/icon/ร้านขายยา.jpg'),
    link: '/pages/pinto/Pharmacy'
  },
  {
    name: 'ร้านอาหาร',
    picture: require('../../assets/images/NBAService/pinto/icon/ร้านอาหาร.jpg'),
    link: '/pages/pinto/Restaurant'
  },
  {
    name: 'ล้างแอร์',
    picture: require('../../assets/images/NBAService/pinto/icon/ล้างแอร์.jpg'),
    link: '/pages/pinto/Conditioner'
  },
  {
    name: 'ศูนย์สุขภาพ',
    picture: require('../../assets/images/NBAService/pinto/icon/ศูนย์สุขภาพ.jpg'),
    link: '/pages/pinto/HealthCenter'
  },
  {
    name: 'หมอนวด',
    picture: require('../../assets/images/NBAService/pinto/icon/หมอนวด.jpg'),
    link: '/pages/pinto/Masseuse'
  }
];
export default function CardPinto() {
  const navigate = useNavigate();
  const onClickRoute = (req) => {
    navigate(req);
  };

  return (
    <div>
      <MKBox component="section" py={2}>
        <Container>
          <MKTypography variant="h5" color="black" textAlign="center" px={{ xs: 6, lg: 12 }} mt={2}>
            Crystal Pinto เป็นแอปที่ช่วยให้ร้านค้าในการขายลูกค้าประจำ เหมือนการผูกปิ่นโตประจำ
            สามารถสั่งของได้ทันทีเช่นเดียวกับแอปเดลิเวอรี่อื่นๆด้วย สามารถค้นหามอไซค์และจัดส่งเองได้
          </MKTypography>
          <Grid container item xs={12} lg={12} sx={{ mx: 'auto' }}>
            {newData.map((value) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                mt={1}
                lg={3}
                sx={{ p: 5 }}
                key={value.name}
                onClick={() => onClickRoute(value.link)}
              >
                <div className="card-pinto">
                  <a href="#">
                    <img src={value.picture.default} className="card-image-pinto" />
                  </a>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}
