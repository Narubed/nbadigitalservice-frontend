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

import Ninjavan from '../../../../assets/images/NBAService/parcel/Ninjavan.png';

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Grid container justifyContent="flex-start">
                <Image src={Ninjavan} rounded={false} raised={false} alt="Image" />
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
                        บริษัท นินจา โลจิสติกส์ (ประเทศไทย) จำกัด
                        มีระบบการส่งพัสดุที่พร้อมให้บริการทุกความต้องการ รองรับทุกโอกาสทางธุรกิจ
                        และความพึงพอใจสูงสุดถึงมือผู้รับ.
                      </H6>
                    </Typography>
                    <Typography variant="alignLeft" color="text.secondary">
                      <Paragraph color="black">
                        <p className="text-Kanit">
                          หมายเหตุ
                          <br />
                          1. เลือกประเภทของบริการที่พร้อมรองรับทุกรูปแบบการขนส่งได้ตามต้องการ
                          ไม่ว่าจะเป็นแบบส่งถึงวันถัดไป, ส่งด่วน, และแบบปกติ
                          <br />
                          2. มอบทางเลือกในการเข้ารับสินค้าที่หลากหลาย
                          เพื่อคุณสามารถกำหนดจุดให้เราเข้าไปรับพัสดุได้ถึงที่
                          หรือเลือกที่จะส่งพัสดุด้วยตัวเองที่หน้าร้านของเราที่ Ninja Point
                          ทุกสาขาใกล้บ้านคุณ พร้อมให้บริการทุกวัน
                          เพื่อให้ธุรกิจของคุณไม่สะดุดแม้วันหยุดราชการ
                          <br />
                          3. เป้าหมายของเรา คือการมอบประสบการณ์การขนส่งที่น่าประทับใจให้กับคุณ
                          เราจึงมีการบริการที่แตกต่าง เช่น บริการส่งซ้ำฟรี เมื่อไม่มีผู้รับ
                          การปรับเวลาในการจัดส่งใหม่ และบริการเลือกรับสินค้าด้วยตนเอง
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
                onClick={() => window.open('https://www.ninjavan.co/', '_blank')}
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
