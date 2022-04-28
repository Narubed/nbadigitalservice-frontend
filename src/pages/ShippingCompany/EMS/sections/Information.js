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

import EMS from '../../../../assets/images/NBAService/parcel/EMS.jpg';

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Grid container justifyContent="flex-start">
                <Image src={EMS} rounded={false} raised={false} alt="Image" />
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
                        บริษัท ไปรษณีย์ไทย จำกัด (ปณท) (Thailand Post) ให้บริการส่งของทางไปรษณีย์
                        บริการส่งด่วน (EMS) ตรวจสอบสถานะหรือเช็คเลขพัสดุ ได้ตลอด 24 ชม. ผ่านระบบ
                        Track & Trace ใช้บริการได้ที่สาขาเอ็นบีเอ ได้ทุกสาขาทั่วประเทศ.
                      </H6>
                    </Typography>
                    <Typography variant="alignLeft" color="text.secondary">
                      <Paragraph color="black">
                        <p className="text-Kanit">
                          หมายเหตุ
                          <br />
                          1. สำหรับการรับ-ส่งสิ่งของ สินค้า และเอกสารต่างๆ ที่บรรจุใส่ซอง /
                          กล่องที่ปิดสนิท สามารถส่งโดยใช้บริการ จดหมาย เริ่มต้นที่น้ำหนักไม่เกิน 20
                          กรัม ค่าบริการ 3 บาท
                          <br />
                          2. บริการจัดส่งหีบห่อ สิ่งของ ปลายทางในประเทศแบบปกติในราคาประหยัด
                          ด้วยมาตรฐานการนำจ่ายแน่นอน
                          <br />
                          3. เหมาะสำหรับการส่งเอกสารที่เป็นหลักฐานสำคัญเพื่อให้ได้การรับรองตามกฏหมาย
                          เป็นทางเลือกสำหรับการส่งสินค้าในธุรกิจ e-Commerce <br />
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
                onClick={() => window.open('https://www.thailandpost.co.th/', '_blank')}
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
