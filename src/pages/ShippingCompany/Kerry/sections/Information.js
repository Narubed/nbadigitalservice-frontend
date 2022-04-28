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

import Kerry from '../../../../assets/images/NBAService/parcel/Kerry.jpg';

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Grid container justifyContent="flex-start">
                <Image src={Kerry} rounded={false} raised={false} alt="Image" />
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
                        Kerry Express ผู้ให้บริการจัดส่งพัสดุในประเทศอย่างรวดเร็วและปลอดภัย
                        การันตีด้วยคุณภาพบริการ No.1 Brand Thailand 4 ปีซ้อน ราคาเริ่มต้น 25 บาท
                        สามารถใช้บริการได้ที่สาขาเอ็นบีเอ ได้ทุกสาขาทั่วประเทศ.
                      </H6>
                    </Typography>
                    <Typography variant="alignLeft" color="text.secondary">
                      <Paragraph color="black">
                        <p className="text-Kanit">
                          หมายเหตุ
                          <br />
                          1. รายได้จากค่าธรรมเนียมเคาร์เตอร์เชอร์วิส
                          ระบบสามารถกำหนดเองได้การประมาณราคาพัสดุขึ้นอยู่กับข้อมูลที่ถูกป้อนเข้าระบบ
                          ซึ่งอัตราค่าส่งจริงอาจเปลี่ยนแปลงได้ขึ้นอยู่กับขนาดบรรจุภัณฑ์จริง
                          <br />
                          2. บริการเสริมส่งพัสดุด่วนก่อนเที่ยง (AM)
                          โดยคุณจะได้รับพัสดุภายในเที่ยงของวันถัดไป
                          <br />
                          3. บริการรับพัสดุด้วยตัวเอง (SCL) ของเราให้คุณรับพัสดุเมื่อไรก็ได้ <br />
                          4. เพิ่มความมั่นใจในการจัดส่งพัสดุที่มีมูลค่าสูง
                          ด้วยบริการเพิ่มวงเงินความรับผิดชอบในความสูญหายและความเสียหายของพัสดุ
                          โดยสามารถเพิ่มวงเงินความรับผิดชอบสูงสุดถึง 50,000 บาท
                          ที่จะช่วยรับความเสี่ยงในกรณีพัสดุสูญหายหรือเสียหาย
                          <br />
                          5.บริการจัดส่งพัสดุแบบเรียกเก็บเงินปลายทาง(COD)คิดค่าบริการเพิ่มเติม 3%
                          ของมูลค่าสินค้าที่คุณส่ง <br />
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
                onClick={() => window.open('https://th.kerryexpress.com/th/home', '_blank')}
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
