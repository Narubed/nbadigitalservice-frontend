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

import Lazada from '../../../../assets/images/NBAService/parcel/Lazada.jpg';

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Grid container justifyContent="flex-start">
                <Image src={Lazada} rounded={false} raised={false} alt="Image" />
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
                        บริษัท ลาซาด้า จำกัด เป็นผู้ให้บริการเว็บไซต์ช้อปปิ้งออนไลน์สินค้าราคาถูก
                        โดยมีสินค้าให้เลือกซื้อหลายสิบกลุ่มใหญ่ และแยกย่อยอีกหลายร้อยหมวดหมู่ย่อย
                        อาทิ แฟชั่น, เครื่องประดับ, เครื่องกีฬา, ความงาม, อุปกรณ์อิเล็กทรอนิกส์,
                        อุปโภคบริโภค, ของแต่งบ้าน, และยานยนต์ เป็นต้น ฯลฯ
                        เพื่อให้ผู้บริโภคสั่งซื้อผ่านทางออนไลน์โดยไม่ต้องเดินทางออกจากบ้าน
                      </H6>
                    </Typography>
                    <Typography variant="alignLeft" color="text.secondary">
                      <Paragraph color="black">
                        <p className="text-Kanit">
                          หมายเหตุ
                          <br />
                          จุดบริการ Drop Off คือ บริษัทตัวแทนผู้ให้บริการ “การจัดส่งสินค้า”
                          ซึ่งจะมีสาขาต่างๆ จำนวนมากกระจายครอบคลุมอยู่ทั่วทั้งประเทศ
                          เพื่อให้เหล่าบรรดาพ่อค้าแม่ค้าออนไลน์ที่ขายของอยู่บน Lazada สามารถนำ
                          “สินค้าที่แพ็คแล้ว” มาฝากส่งได้ ไม่ว่าจะอยู่ในพื้นที่ใดก็ตาม
                          เพื่อให้เกิดความสะดวก รวดเร็ว ในการส่งสินค้าสู่มือลูกค้า
                          <br />
                          1. ทำให้มีลูกค้ามาใช้บริการจุด Drop Off เป็นจำนวนมาก ซึ่งทุกๆ
                          กล่องพัสดุที่ฝากส่งผู้ลงทุนจะได้รับค่าคอมมิสชั่นตอบแทน
                          <br />
                          2. เมื่อลูกค้าเข้ามาใช้บริการจุด Drop Off มากขึ้น ก็จะทำให้มีโอกาส
                          นำเสนอบริการอื่นๆ ในร้าน สาขา Quick Service ได้มากขึ้น ไม่ว่าจะเป็น
                          บริการจำหน่ายบรรจุภัณฑ์สำหรับห่อพัสดุ บริการเติมเงิน จ่ายบิล ต่อ พ.ร.บ.
                          ประกันภัย ภาษีรถยนต์ หรือบริการนำเสนอสินเชื่อบ้านและรถยนต์ ฯลฯ
                          ซึ่งทุกบริการล้วนนำมาซึ่งรายได้เข้าสู่ร้านสาขา
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
                onClick={() =>
                  window.open(
                    'https://university.lazada.co.th/course/detail?id=462&type=series',
                    '_blank'
                  )
                }
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
