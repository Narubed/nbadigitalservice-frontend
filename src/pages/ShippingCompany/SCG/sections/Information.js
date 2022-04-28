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

import SCG from '../../../../assets/images/NBAService/parcel/SCG.jpg';

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Grid container justifyContent="flex-start">
                <Image src={SCG} rounded={false} raised={false} alt="Image" />
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
                        บริษัท เอสซีจี เอ็กซ์เพรส จำกัด มุ่งเน้นการให้บริการขนส่งพัสดุด่วน
                        ทั้งแบบทั่วไปและพัสดุประเภทอาหารที่ต้องการการควบคุมอุณหภูมิเป็นพิเศษ
                        ใช้บริการได้ที่สาขาเอ็นบีเอ ได้ทุกสาขาทั่วประเทศ.
                      </H6>
                    </Typography>
                    <Typography variant="alignLeft" color="text.secondary">
                      <Paragraph color="black">
                        <p className="text-Kanit">
                          หมายเหตุ
                          <br />
                          1. บริการส่งพัสดุด่วน (Normal Parcel) ขนาดของพัสดุต้องมีผลรวมของความกว้าง
                          ความยาว และความสูงไม่เกิน 250 เซนติเมตร และน้ำหนักไม่เกิน 25 กิโลกรัม
                          <br />
                          2. บริการส่งพัสดุแช่เย็น/แช่แข็ง (Chilled & Frozen Parcel)
                          ขนาดของพัสดุต้องมีผลรวมของความกว้าง ความยาว และความสูง ไม่เกิน 120
                          เซนติเมตร และน้ำหนักไม่เกิน 25 กิโลกรัม
                          <br />
                          3. บริการส่งพัสดุขนาดใหญ่ (Over-Weight Over-Size)
                          สามารถรับน้ำหนักได้สูงสุดถึง 50 กิโลกรัม และ ความยาวของพัสดุไม่เกิน 2 เมตร
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
                onClick={() => window.open('https://www.scgexpress.co.th/', '_blank')}
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
