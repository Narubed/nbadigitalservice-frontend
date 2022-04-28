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

import BestExpress from '../../../../assets/images/NBAService/parcel/BestExpress.png';

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Grid container justifyContent="flex-start">
                <Image src={BestExpress} rounded={false} raised={false} alt="Image" />
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
                          1. เราคิดค่าบริการจากขนาดและน้ำหนักของสิ่งของ ซึ่งค่าบริการเริ่มต้นที่ 25
                          บาท (ราคาพิเศษ ขึ้นอยู่กับโปรโมชันของแต่ละสาขา ตรวจสอบได้ที่สาขาเบสท์
                          เอ็กซ์เพรส ทั่วประเทศไทย)
                          <br />
                          2.ค่าบริการเพิ่มเติมจะคิดจากสถานที่ส่งและรหัสไปรษณีย์ปลายทาง
                          (พื้นที่เขตพิเศษสามารถดูได้จากรายการที่จัดไว้ที่ศูนย์บริการ สาขาเบสท์
                          เอ็กซ์เพรส ทั่วประเทศไทย)
                          <br />
                          3. การส่งของจากกรุงเทพฯ ไปต่างจังหวัด หรือจากต่างจังหวัดมากรุงเทพฯ
                          จะส่งถึงปลายทางในวันถัดไป
                          ยกเว้นวันหยุดนักขัตฤกษ์และตามเวลาทำการของสถานที่ราชการ
                          การส่งของจากต่างจังหวัดไปยังต่างจังหวัด ใช้เวลา 1-3 วัน
                          ยกเว้นวันหยุดนักขัตฤกษ์และตามเวลาทำการของสถานที่ราชการ
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
                onClick={() => window.open('https://www.best-inc.co.th/', '_blank')}
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
