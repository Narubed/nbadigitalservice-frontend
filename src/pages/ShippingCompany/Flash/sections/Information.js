import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from 'framer-motion/dist/framer-motion';
// import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';
import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
// Material Kit 2 React components
import MKBox from '../../../../components/MKBox';

// Material Kit 2 React examples
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

import Flash from '../../../../assets/images/NBAService/parcel/Flash.jpg';

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Grid container justifyContent="flex-start">
                <Image src={Flash} rounded={false} raised={false} alt="Image" />
              </Grid>
            </motion.button>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: 'auto', mt: { xs: 3, lg: 0 } }}>
            <Grid item xs={12} md={12}>
              <Card
                sx={{
                  background: '#ffffff'
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <H6 color="black">
                        บริษัท แฟลช เอ็กซ์เพรส จำกัด ให้บริการจัดส่งสินค้าภายในประเทศได้อย่างรวดเร็ว
                        พร้อมงานบริการเรียกเก็บเงินปลายทาง ใช้บริการได้ที่สาขาเอ็นบีเอ
                        ได้ทุกสาขาทั่วประเทศ.
                      </H6>
                    </Typography>
                    <Typography variant="alignLeft" color="text.secondary">
                      <Paragraph color="black">
                        <p className="text-Kanit">
                          หมายเหตุ
                          <br />
                          1. สำหรับลูกค้าทั่วไปที่ต้องการขนส่งไปยัง พื้นที่ห่างไกลหรือพื้นที่พิเศษ
                          จะมีค่าใช้จ่ายเพิ่มขั้นต่ำ 50 บาท สำหรับลูกค้าKA สามารถ
                          ติดต่อฝ่ายบริการลูกค้าเพื่อสอบถามรายละเอียดของค่าใช้จ่าย แม้ว่า Flash
                          Express จะสามารถให้บริการครอบคลุมทั่วไทย
                          <br />
                          2. มีค่าขนส่ง Speed
                          เป็นค่าขนส่งพิเศษที่ถูกกำหนดความเร็วในการจัดส่งพัสดุมากกว่าระดับมาตรฐาน
                          เพื่อเพิ่มมาตรฐานการให้บริการลูกค้าสู่ระดับพรีเมี่ยมและสร้างความพึงพอใจให้กับลูกค้าเพิ่มมากขึ้น
                          คุณสามารถซื้อค่าขนส่ง Speed
                          <br />
                          3. ค่าบริการจัดส่งจะคำนวณจากน้ำหนักรวมของพัสดุ (กก.) และ ขนาดพัสดุรวม
                          กว้าง+ยาว+สูง (ซม.)
                          โดยคิดจากค่าที่มีค่ามากกว่าโดยสามารถตรวจสอบราคาค่าจัดส่งในแต่ละพื้นที่ปลายทางได้{' '}
                          <br />
                        </p>
                      </Paragraph>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={2} sx={{ ml: 'auto', mt: { xs: 3, lg: 0 }, alignItems: 'center' }}>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Button
                onClick={() => window.open('https://www.flashexpress.co.th/', '_blank')}
                color="purple"
                buttonType="outline"
                size="regular"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="dark"
              >
                เว็ปไซต์หลัก
              </Button>
            </motion.button>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
