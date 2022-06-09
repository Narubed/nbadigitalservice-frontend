/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import MKBox from '../../components/MKBox';
import MKTypography from '../../components/MKTypography';

import './pinto.scss';

// image
import images from '../../assets/images/NBAService/logo/pinto2.png';

const data = [
  'ร้านค้าที่คุ้นเคย',
  'ร้านดัง',
  'อาหาร/ขนม/เครื่องดื่ม',
  'ของชำ(โชว์ห่วย)',
  'ยา/อาหารเสริม/เครื่องสำอาง',
  'ตลาด/พลาซ่า',
  'สินค้าเกษตรและแปรรูป',
  'สารพัดสารพัน',
  'จับคู่ธุรกิจ(ค้าส่ง)',
  'พี่วิน',
  'รับ-ส่งของ/เอกสาร',
  'ฉุกเฉิน'
];

export default function CardPinto() {
  return (
    <div>
      <MKBox component="section" py={2}>
        <Container>
          <MKTypography variant="h5" color="black" textAlign="center" px={{ xs: 6, lg: 12 }} mt={2}>
            Crystal Pinto เป็นแอปที่ช่วยให้ร้านค้าในการขายลูกค้าประจำ เหมือนการผูกปิ่นโตประจำ
            สามารถสั่งของได้ทันทีเช่นเดียวกับแอปเดลิเวอรี่อื่นๆด้วย สามารถค้นหามอไซค์และจัดส่งเองได้
          </MKTypography>
          <Grid container item xs={12} lg={12} sx={{ mx: 'auto' }}>
            {data.map((value) => (
              <Grid item xs={12} sm={6} md={6} mt={1} lg={3} sx={{ p: 5 }} key={value}>
                <div className="card-pinto">
                  <img src={images} className="card-image-pinto" />
                  {/* <MKBox
                    borderRadius="5%"
                    component="img"
                    src={images}
                    width="100%"
                    my="auto"
                    sx={{ boxShadow: 20 }}
                  /> */}
                </div>
                {value}
              </Grid>
            ))}
            {/* 
            <Grid item xs={12} sm={6} md={6} mt={1} lg={3} sx={{ p: 5 }}>
              <MKBox borderRadius="5%" component="img" src={images} width="100%" my="auto" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={1} lg={3} sx={{ p: 5 }}>
              <MKBox borderRadius="5%" component="img" src={images} width="100%" my="auto" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} mt={1} lg={3} sx={{ p: 5 }}>
              <MKBox borderRadius="5%" component="img" src={images} width="100%" my="auto" />
            </Grid> */}
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}
