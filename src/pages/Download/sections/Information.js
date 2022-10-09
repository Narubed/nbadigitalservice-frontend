/* eslint-disable react/jsx-key */
/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Card from '@material-tailwind/react/Card';
import Button from '@material-tailwind/react/Button';

// Material Kit 2 React components
import MKBox from '../../../components/MKBox';
// import MKBadge from "components/MKBadge";
import MKTypography from '../../../components/MKTypography';

// Presentation page components
// import ExampleCard from '../ExampleCard';

// Data
// import data from '../data/designBlocksData';

function DesignBlocks() {
  const renderData = (
    <Grid container spacing={3} sx={{ mb: 10, mt: -10 }}>
      <>
        <Grid item xs={12} lg={3}>
          <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
            <a className="active" href="#1">
              <Card>
                <MKTypography variant="h4" fontWeight="bold" mb={1}>
                  โปรแกรมสนับสนุน
                </MKTypography>
                <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                  โปรแกรมสนับสนุนระยะใกล้ เพื่อเพิ่มความสะดวกในการเเก้ไขปัญหา
                </MKTypography>
              </Card>
            </a>
            <br />
            <a className="active" href="#2">
              <Card>
                <MKTypography variant="h4" fontWeight="bold" mb={1}>
                  ไดร์เวอร์เครื่องปริ้น HP
                </MKTypography>
                <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                  ส่วนเหลือในการดาวน์โหลดไดร์เวอร์เครื่องปริ้นเตอร์
                </MKTypography>
              </Card>
            </a>
            <br />
            <a className="active" href="#3">
              <Card>
                <MKTypography variant="h4" fontWeight="bold" mb={1}>
                  ไดร์เวอร์ Xprinter(Label)
                </MKTypography>
                <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                  ส่วนช่วยเหลือในการดาวน์โหลดไดรเวอร์เครื่องพิมพ์ฉลาก
                </MKTypography>
              </Card>
            </a>
            <br />
            <a className="active" href="#4">
              <Card>
                <MKTypography variant="h4" fontWeight="bold" mb={1}>
                  ไดร์เวอร์ Xprinter(Receipt)
                </MKTypography>
                <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                  ส่วนช่วยเหลือในการดาวน์โหลดไดรเวอร์เครื่องพิมพ์ใบเสร็จขนาดเล็ก
                </MKTypography>
              </Card>
            </a>
            <br />
            <a className="active" href="#5">
              <Card>
                <MKTypography variant="h4" fontWeight="bold" mb={1}>
                  Google Drive
                </MKTypography>
                <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                  เป็นส่วนที่เก็บไดฟ์เวอร์ทั้งหมดในกรณีที่ลูกค้าโหลดจากเว็บไซต์เองไม่ได้
                </MKTypography>
              </Card>
            </a>
            <br />
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={9}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} sx={{ mb: 4 }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>คู่มือการติดตั้งระบบด้วยตนเอง</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <br />
                    <a href="https://drive.google.com/drive/folders/12W2bJj438YsL9X27WgXaKTHwgbY-cFoK?usp=sharing">
                      <Button
                        color="purple"
                        buttonType="outline"
                        size="regular"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="dark"
                      >
                        ไปยังไดรเวอร์ที่ทำการเก็บไฟล์
                      </Button>
                    </a>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <br />
              <section id="1">
                โปรแกรมสนับสนุน
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>โปรเเกรม TeamViewer (สำหรับ windows)</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p className="text-Kanit">
                        ใช้สำหรับการเข้าถึงคอมพิวเตอร์ระยะไกลทุกวันตลอด 24 ชั่วโมง
                        ที่ทำให้ช่วยแก้ปัญหาได้อย่างดีเยี่ยม ไม่ว่าจะเป็นการตรวจสอบจากระยะไกล
                        การบำรุงรักษาเซิร์ฟเวอร์ หรือการเชื่อมต่อกับ PC หรือ Mac
                        ทั้งที่สำนักงานหรือที่บ้าน
                      </p>
                      <br />
                      <a href="https://drive.google.com/file/d/1j8r5SA-5tdHoe2LHPINRWoYDYwjwByzy/view?usp=sharing">
                        <Button
                          color="purple"
                          buttonType="outline"
                          size="regular"
                          rounded={false}
                          block={false}
                          iconOnly={false}
                          ripple="dark"
                        >
                          Download
                        </Button>
                      </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>โปรเเกรม TeamViewer (สำหรับ Mac)</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p className="text-Kanit">
                        ใช้สำหรับการเข้าถึงคอมพิวเตอร์ระยะไกลทุกวันตลอด 24 ชั่วโมง
                        ที่ทำให้ช่วยแก้ปัญหาได้อย่างดีเยี่ยม ไม่ว่าจะเป็นการตรวจสอบจากระยะไกล
                        การบำรุงรักษาเซิร์ฟเวอร์ หรือการเชื่อมต่อกับ PC หรือ Mac
                        ทั้งที่สำนักงานหรือที่บ้าน
                      </p>
                      <br />
                      <a href="https://download.teamviewer.com/download/TeamViewer.dmg">
                        <Button
                          color="purple"
                          buttonType="outline"
                          size="regular"
                          rounded={false}
                          block={false}
                          iconOnly={false}
                          ripple="dark"
                        >
                          Download
                        </Button>
                      </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>โปรเเกรม Anydesk (สำหรับ windows)</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p className="text-Kanit">
                        ใช้สำหรับการเข้าถึงคอมพิวเตอร์ระยะไกลทุกวันตลอด 24 ชั่วโมง
                        ที่ทำให้ช่วยแก้ปัญหาได้อย่างดีเยี่ยม ไม่ว่าจะเป็นการตรวจสอบจากระยะไกล
                        การบำรุงรักษาเซิร์ฟเวอร์ หรือการเชื่อมต่อกับ PC หรือ Mac
                        ทั้งที่สำนักงานหรือที่บ้าน
                      </p>
                      <br />
                      <a href="https://anydesk.com/en/downloads/thank-you?dv=win_exe">
                        <Button
                          color="purple"
                          buttonType="outline"
                          size="regular"
                          rounded={false}
                          block={false}
                          iconOnly={false}
                          ripple="dark"
                        >
                          Download
                        </Button>
                      </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>โปรเเกรม Anydesk (สำหรับ Mac)</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p className="text-Kanit">
                        ใช้สำหรับการเข้าถึงคอมพิวเตอร์ระยะไกลทุกวันตลอด 24 ชั่วโมง
                        ที่ทำให้ช่วยแก้ปัญหาได้อย่างดีเยี่ยม ไม่ว่าจะเป็นการตรวจสอบจากระยะไกล
                        การบำรุงรักษาเซิร์ฟเวอร์ หรือการเชื่อมต่อกับ PC หรือ Mac
                        ทั้งที่สำนักงานหรือที่บ้าน
                      </p>
                      <br />
                      <a href="https://anydesk.com/en/downloads/thank-you?dv=mac_dmg">
                        <Button
                          color="purple"
                          buttonType="outline"
                          size="regular"
                          rounded={false}
                          block={false}
                          iconOnly={false}
                          ripple="dark"
                        >
                          Download
                        </Button>
                      </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </section>
              <br />
              <section id="2">
                ไดร์เวอร์เครื่องปริ้น
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>
                      ไดร์เวอร์เครื่องปริ้น HP2300 (Driver Printer hp 2300) Windows All (Basic
                      Driver)
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p className="text-Kanit">
                        สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ Windows (Basic
                        Driver)
                      </p>
                      <br />
                      <a href="https://www.infdriver.com/download/hp/hp-deskjet-d2300/hp-deskjet-d2300-basic-driver.zip">
                        <Button
                          color="purple"
                          buttonType="outline"
                          size="regular"
                          rounded={false}
                          block={false}
                          iconOnly={false}
                          ripple="dark"
                        >
                          Download
                        </Button>
                      </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>
                      ไดร์เวอร์เครื่องปริ้น HP2300 (Driver Printer hp 2300) Windows 7
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p className="text-Kanit">
                        สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ Windows 7
                      </p>
                      <br />
                      <a href="https://www.mediafire.com/file/og6kvfgunih1n4x/DJ2300_Full_WebPack_51.1.4707.exe">
                        <Button
                          color="purple"
                          buttonType="outline"
                          size="regular"
                          rounded={false}
                          block={false}
                          iconOnly={false}
                          ripple="dark"
                        >
                          Download
                        </Button>
                      </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>
                      ไดร์เวอร์เครื่องปริ้น HP2300 (Driver Printer hp 2300) Windows 10
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p className="text-Kanit">
                        สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ Windows 10
                      </p>
                      <br />
                      <a href="https://www.mediafire.com/file/og6kvfgunih1n4x/DJ2300_Full_WebPack_51.1.4707.exe">
                        <Button
                          color="purple"
                          buttonType="outline"
                          size="regular"
                          rounded={false}
                          block={false}
                          iconOnly={false}
                          ripple="dark"
                        >
                          Download
                        </Button>
                      </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>
                      ไดร์เวอร์เครื่องปริ้น HP2300 (Driver Printer hp 2300) Windows 11
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p className="text-Kanit">
                        สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ Windows 11
                      </p>
                      <br />
                      <a href="https://www.mediafire.com/file/og6kvfgunih1n4x/DJ2300_Full_WebPack_51.1.4707.exe">
                        <Button
                          color="purple"
                          buttonType="outline"
                          size="regular"
                          rounded={false}
                          block={false}
                          iconOnly={false}
                          ripple="dark"
                        >
                          Download
                        </Button>
                      </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>
                      ไดร์เวอร์เครื่องปริ้น HP2300 (Driver Printer hp 2300) MacOS 11.x, 12.x
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p className="text-Kanit">
                        สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ MacOS 11.x,
                        12.x
                      </p>
                      <br />
                      <a href="https://www.mediafire.com/file/4gvk3lkwddgowdu/HP_DJ_2300_HP_Easy_Start.app_mac.zip">
                        <Button
                          color="purple"
                          buttonType="outline"
                          size="regular"
                          rounded={false}
                          block={false}
                          iconOnly={false}
                          ripple="dark"
                        >
                          Download
                        </Button>
                      </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>
                      ไดร์เวอร์เครื่องปริ้น HP2300 (Driver Printer hp 2300) macOS 10.11 to 10.15
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p className="text-Kanit">
                        สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ macOS 10.11 to
                        10.15
                      </p>
                      <br />
                      <a href="https://www.mediafire.com/file/4gvk3lkwddgowdu/HP_DJ_2300_HP_Easy_Start.app_mac.zip">
                        <Button
                          color="purple"
                          buttonType="outline"
                          size="regular"
                          rounded={false}
                          block={false}
                          iconOnly={false}
                          ripple="dark"
                        >
                          Download
                        </Button>
                      </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </section>
              <section id="3">
                <br />
                ไดรเวอร์เครื่องพิมพ์ฉลาก Xprinter (Label)
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>ไดรเวอร์เครื่องพิมพ์ฉลาก (Label) Windows</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p className="text-Kanit">
                        สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ Windows
                      </p>
                      <br />
                      <a href="https://www.xprintertech.com/label-driver">
                        <Button
                          color="purple"
                          buttonType="outline"
                          size="regular"
                          rounded={false}
                          block={false}
                          iconOnly={false}
                          ripple="dark"
                        >
                          Download
                        </Button>
                      </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>ไดรเวอร์เครื่องพิมพ์ฉลาก (Label) Mac</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p className="text-Kanit">
                        สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ Mac
                      </p>
                      <br />
                      <a href="https://www.xprintertech.com/label-printer-driver-mac">
                        <Button
                          color="purple"
                          buttonType="outline"
                          size="regular"
                          rounded={false}
                          block={false}
                          iconOnly={false}
                          ripple="dark"
                        >
                          Download
                        </Button>
                      </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </section>
              <section id="4">
                <br />
                ไดรเวอร์เครื่องใบเสร็จ Xprinter (Receipt)
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>ไดรเวอร์เครื่องพิมพ์ใบเสร็จ (Receipt) Windows</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p className="text-Kanit">
                        สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ Windows
                      </p>
                      <br />
                      <a href="https://www.xprintertech.com/58-76-80mm-driver">
                        <Button
                          color="purple"
                          buttonType="outline"
                          size="regular"
                          rounded={false}
                          block={false}
                          iconOnly={false}
                          ripple="dark"
                        >
                          Download
                        </Button>
                      </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>ไดรเวอร์เครื่องพิมพ์ใบเสร็จ (Receipt) Mac</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <p className="text-Kanit">
                        สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ Mac
                      </p>
                      <br />
                      <a href="https://www.xprintertech.com/receipt-printer-mac">
                        <Button
                          color="purple"
                          buttonType="outline"
                          size="regular"
                          rounded={false}
                          block={false}
                          iconOnly={false}
                          ripple="dark"
                        >
                          Download
                        </Button>
                      </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </section>

              <section id="5">
                <br />
                Google Drive
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>ไปยังไดรเวอร์ที่ทำการเก็บไฟล์ Driver</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <br />
                      <a href="https://drive.google.com/drive/folders/12W2bJj438YsL9X27WgXaKTHwgbY-cFoK?usp=sharing">
                        <Button
                          color="purple"
                          buttonType="outline"
                          size="regular"
                          rounded={false}
                          block={false}
                          iconOnly={false}
                          ripple="dark"
                        >
                          ไปยังไดรเวอร์ที่ทำการเก็บไฟล์
                        </Button>
                      </a>
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
