/* eslint-disable react/jsx-key */
/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
import './Information.scss';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Card from '@material-tailwind/react/Card';

// Material Kit 2 React components
import MKBox from '../../../../components/MKBox';
// import MKBadge from "components/MKBadge";
import MKTypography from '../../../../components/MKTypography';

// Presentation page components
// import ExampleCard from '../ExampleCard';

// Data
// import data from '../data/designBlocksData';

function DesignBlocks() {
  const renderData = (
    <Grid container spacing={3} sx={{ mb: 10 }}>
      <>
        <Grid item xs={12} lg={3}>
          <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
            <a className="active" href="#1">
              <Card>
                <MKTypography variant="h4" fontWeight="bold" mb={1}>
                  คำถามที่มักจะพบบ่อย
                </MKTypography>
                <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                  คำถามที่มักจะพบบ่อย
                </MKTypography>
              </Card>
            </a>
            <br />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={9}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} sx={{ mb: 4 }}>
              <section id="1">
                <Accordion>
                  <AccordionSummary
                    sx={{ backgroundColor: '#E6E6FA' }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>บริการที่จะท่านจะได้รับ จากบริษัทบริษัทของเรา</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#9932CC' }}>
                    <Typography className="textwhite">
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
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography> บริการทางธุรกิจครบวงจร คืออะไร ?</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#9932CC' }}>
                    <Typography className="textwhite">
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
                        - รับทำป้ายไวนิล, ป้ายไฟ, โลโก้, ตรายาง, นามบัตร, การ์ด, สติ๊กเกอร์-ซีทรู,
                        ออกแบบผลิตภัณฑ์, สื่อสิ่งพิมพ์ทุกชนิด <br />
                        - การตลาดดิจิตอล ออนไลน์ทุกช่องทาง, ทำ-ดูแลเพจ, เขียนโปรแกรม, เขียนเว็บไชต์,
                        ฯลฯ
                        <br />
                      </p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    sx={{ backgroundColor: '#E6E6FA' }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>สิ่งที่ลูกค้าต้องเตรียมคือ ?</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#9932CC' }}>
                    <Typography className="textwhite">
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
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>หากลูกค้าสนใจเปิดศูนย์บริการลูกค้าธุรกิจครบวงจรของเรา </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#9932CC' }}>
                    <Typography className="textwhite">
                      <p>
                        แอดมินขอจะข้อมูลการปักหมุดและการแต่งตั้งผู้บริหารศูนย์ดังนี้คะ <br />
                        โดยการแอดไลน์ทางการของบริษัท @nba999 และส่งข้อมูลในการจัดตั้งศูนย์ฯ
                        เพื่อให้เจ้าหน้าที่บริการลูกค้าศูนย์ฯ ดูแลต่อนะคะ
                      </p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    sx={{ backgroundColor: '#E6E6FA' }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>ข้อแตกต่างของแต่ละ ระดับศูนย์</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#9932CC' }}>
                    <Typography className="textwhite">
                      <p>
                        ผู้บริหารศูนย์จังหวัดและอำเภอ
                        อนาคตอันใกล้ตอนโปรเจคใหม่ลงมากมายตามแผนบริหารของส่วนกลาง
                        หน้าที่และความรับผิดชอบจะมากขึ้น
                        ในการทำงานแบบบูรณาการร่วมกับส่วนกลางในการบริหารจัดการ โปรเจคใหม่ๆ
                        เพื่อสร้างงานสร้างอาชีพในจังหวัด และค่าตอบแทนต่างๆ
                        ก็จะกระจายไปตามความรับผิดชอบ เป็นค่าตอบแทนการบริหารคิดตามส่วนกลางกำหนดโดย
                        ทางส่วนกลางไม่ได้จบแค่โปรเจคแรกที่มีบริการมากมายคุ้มค่ากับการลงทุนแล้ว
                        แต่เรามองถึงการพัฒนาศักยภาพ และรายได้ให้ยั่งยืนต่อไป
                        ผลตอบแทนในอนาคตก็จะกระจายตามความรับผิดชอบ
                        และระดับศูนย์ตามหลักการบริหารที่ส่วนกลางกำหนด
                      </p>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </section>
            </Grid>
          </Grid>
        </Grid>
      </>
    </Grid>
  );

  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: 'center', my: 6, mx: 'auto', px: 0.75 }}
        />
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
