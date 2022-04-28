import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import H4 from '@material-tailwind/react/Heading4';
import Paragraph from '@material-tailwind/react/Paragraph';
// Material Kit 2 React components
import MKBox from '../../../../components/MKBox';

// Material Kit 2 React examples
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import CardContact from './CardContact';

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={12}>
                <Card
                  sx={{
                    background: '#9932CC'
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <H4 color="white">บริการที่จะท่านจะได้รับ จากบริษัทบริษัทของเรา</H4>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <Paragraph color="white">
                          <p className="text-Kanit">
                            1. บริการด้านเคาน์เตอร์เซอร์วิสครบจงจร และบิลเกินกำหนดชำระ
                            <br />
                            - รายได้จากค่าธรรมเนียมเคาร์เตอร์เชอร์วิส ระบบสามารถกำหนดแองได้
                            <br />
                            - รายได้ค่าธรรมเนียมค่าบริการ ด้าน พรบ. <br />
                            - การรับฝากโอนเงิน ค่าธรรมเนียมศูนย์สามารถคิดเอง <br />
                            - จองตั๋วเครื่องบิน, รถทัวร์, รถไฟ, โรงแรม, อื่นๆ <br />
                          </p>
                          <p className="text-Kanit"> </p>
                          <p className="text-Kanit">
                            2. บริการรับส่งพัสดุ- ครุภัณฑ์ ทั่วประเทศ จากแบรนด์ชั้นนำ
                          </p>
                          <p className="text-Kanit">3. บริการทางธุรกิจครบวงจร </p>
                        </Paragraph>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item xs={12} md={12} pt={3}>
                <Card
                  sx={{
                    background: '#9932CC'
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <H4 color="white"> บริการทางธุรกิจครบวงจร คืออะไร ?</H4>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <Paragraph color="white">
                          <p>
                            {' '}
                            คือบริการต่าง ๆ ที่บริษัทมอบให้ลูกค้าของเเต่ละศูนย์ เช่น
                            <br />
                            - รับจดทะเบียน <br />
                            - รับทำบัญชี รายเดือน-รายปี <br />
                            - ปิดบัญชี เงินเดือน <br />
                            - ประกันสังคม <br />
                            - ยื่นขออนุญาตทำงานต่างด้าว <br />
                            - ยื่นขออนุญาตต่างๆ (บริษัท,ห้างหุ้นส่วน,บุคคล,อื่น)
                            รับเป็นที่ปรึกษาทางด้านธุรกิจครบวงจร <br />
                            - รับทำป้ายไวนิล, ป้ายไฟ, โลโก้, ตรายาง, นามบัตร, การ์ด,
                            สติ๊กเกอร์-ซีทรู, ออกแบบผลิตภัณฑ์, สื่อสิ่งพิมพ์ทุกชนิด <br />
                            - การตลาดดิจิตอล ออนไลน์ทุกช่องทาง, ทำ-ดูแลเพจ, เขียนโปรแกรม,
                            เขียนเว็บไชต์, ฯลฯ
                            <br />
                          </p>
                        </Paragraph>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} md={12} pt={3}>
                <Card
                  sx={{
                    background: '#9932CC'
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <H4 color="white"> สิ่งที่ลูกค้าต้องเตรียมคือ ?</H4>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <Paragraph color="white">
                          <p>
                            1. สถานที่ไว้ให้ลูกค้าที่เข้ามาใช้บริการได้เข้ามาแพคของส่งเล็กน้อย (3*3
                            เมตร)
                            <br />
                            - หากมีหน้าร้าน สามารถทำร่วมกันได้เลยคะ (ไม่มีข้อจำกัด) <br />
                            - หากไม่มีหน้าร้าน สามารถใช้บ้านตนเองทำศูนย์บริการลูกค้าได้เลยคะ <br />
                            2. คอมพิวเตอร์หรือโน๊ตบุ๊ค 1 เครื่อง <br />
                            (สำหรับเครื่องมือสองสำนักงานใหญ่มีจำหน่าย เครื่องละ 4,999 บาท
                            รับประกันและดูแล 6 เดือน) เพื่อให้เจ้าหน้าที่ลงติดตั้งระบบให้และสอนงาน{' '}
                            <br />
                            3. อินเตอร์เน็ต สามารถเชื่อมต่อฮอตปอร์ตมือถือ <br />
                            4. โต๊ะขาวยาวประชุม หรือเคาร์เตอร์ (ตามสะดวก)
                            เอาไว้สำหรับตั้งอุปกรณ์ต่างๆที่เราให้
                          </p>
                        </Paragraph>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} md={12} pt={3}>
                <Card
                  sx={{
                    background: '#9932CC'
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <H4 color="white">หากลูกค้าสนใจเปิดศูนย์บริการลูกค้าธุรกิจครบวงจรของเรา</H4>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <Paragraph color="white">
                          <p>
                            แอดมินขอจะข้อมูลการปักหมุดและการแต่งตั้งผู้บริหารศูนย์ดังนี้คะ <br />
                            โดยการแอดไลน์ทางการของบริษัท @nba999 และส่งข้อมูลในการจัดตั้งศูนย์ฯ
                            เพื่อให้เจ้าหน้าที่บริการลูกค้าศูนย์ฯ ดูแลต่อนะคะ
                          </p>
                        </Paragraph>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} md={12} pt={3}>
                <Card
                  sx={{
                    background: '#9932CC'
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <H4 color="white"> ข้อแตกต่างของแต่ละ ระดับศูนย์</H4>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <Paragraph color="white">
                          <p>
                            ผู้บริหารศูนย์จังหวัดและอำเภอ
                            อนาคตอันใกล้ตอนโปรเจคใหม่ลงมากมายตามแผนบริหารของส่วนกลาง
                            หน้าที่และความรับผิดชอบจะมากขึ้น
                            ในการทำงานแบบบูรณาการร่วมกับส่วนกลางในการบริหารจัดการ โปรเจคใหม่ๆ
                            เพื่อสร้างงานสร้างอาชีพในจังหวัด และค่าตอบแทนต่างๆ
                            ก็จะกระจายไปตามความรับผิดชอบ
                            เป็นค่าตอบแทนการบริหารคิดตามส่วนกลางกำหนดโดย
                            ทางส่วนกลางไม่ได้จบแค่โปรเจคแรกที่มีบริการมากมายคุ้มค่ากับการลงทุนแล้ว
                            แต่เรามองถึงการพัฒนาศักยภาพ และรายได้ให้ยั่งยืนต่อไป
                            ผลตอบแทนในอนาคตก็จะกระจายตามความรับผิดชอบ
                            และระดับศูนย์ตามหลักการบริหารที่ส่วนกลางกำหนด
                          </p>
                        </Paragraph>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: 'auto', mt: { xs: 3, lg: 0 } }}>
            <CardContact />
            {/* <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="แอดมิน"
              description="083-444-5666"
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            /> */}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
