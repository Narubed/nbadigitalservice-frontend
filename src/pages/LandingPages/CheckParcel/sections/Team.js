/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Material Kit 2 React components
import MKBox from '../../../../components/MKBox';
import MKTypography from '../../../../components/MKTypography';

// Material Kit 2 React examples
import HorizontalTeamCard from '../../../../examples/Cards/TeamCards/HorizontalTeamCard';

// Images
import EMS from '../../../../assets/images/NBAService/logoParcel/ems.png';
import DHL from '../../../../assets/images/NBAService/logoParcel/dhl.png';
import Flash from '../../../../assets/images/NBAService/logoParcel/flash.png';
import Kerry from '../../../../assets/images/NBAService/logoParcel/kerry.png';
import SCG from '../../../../assets/images/NBAService/logoParcel/scg.png';
import True from '../../../../assets/images/NBAService/parcel/True.jpg';
import BestExpress from '../../../../assets/images/NBAService/logoParcel/best.png';
import Deliveree from '../../../../assets/images/NBAService/parcel/Deliveree.png';
import Ninjavan from '../../../../assets/images/NBAService/logoParcel/ninja.png';
import SCGCool from '../../../../assets/images/NBAService/logoParcel/scgcool.png';
import Lazada from '../../../../assets/images/NBAService/logoParcel/lazada.png';
import bgImageBuble from '../../../../assets/images/NBAService/background/buble.png';
// import bgImageBuble2 from '../../../../assets/images/NBAService/background/buble2.png';

function Team() {
  return (
    <MKBox
      sx={{
        background: 'none',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: `url(${bgImageBuble})`
      }}
      component="section"
      variant="gradient"
      // bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              ตรวจสอบสถานะพัสดุ
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              You can select a company for checking the status of your parcel as below.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                linkWeb="https://track.thailandpost.co.th/"
                image={EMS}
                name="ไปรษณีย์ไทย"
                position={{ color: 'info', label: 'บริษัท ไปรษณีย์ไทย จำกัด (ปณท)' }}
                description="ให้บริการส่งของทางไปรษณีย์ บริการส่งด่วน (EMS) ตรวจสอบสถานะหรือเช็คเลขพัสดุ ได้ตลอด 24 ชม. ใช้บริการได้ที่สาขาเอ็นบีเอ ได้ทุกสาขาทั่วประเทศ."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                linkWeb="https://th.kerryexpress.com/th/track/"
                image={Kerry}
                name="Kerry Express"
                position={{
                  color: 'info',
                  label: 'บริษัท เคอรี่ เอ็กซ์เพรส จำกัด (มหาชน)'
                }}
                description="ผู้ให้บริการจัดส่งพัสดุในประเทศอย่างรวดเร็วและปลอดภัย การันตีด้วยคุณภาพบริการ No.1 Brand Thailand 4 ปีซ้อน ใช้บริการได้ที่สาขาเอ็นบีเอ ได้ทุกสาขาทั่วประเทศ."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                linkWeb="https://www.flashexpress.co.th/tracking/"
                image={Flash}
                name="Flash Express"
                position={{ color: 'info', label: 'บริษัท แฟลช เอ็กซ์เพรส จำกัด' }}
                description="ให้บริการจัดส่งสินค้าภายในประเทศได้อย่างรวดเร็วและปลอดภัย พร้อมงานบริการเรียกเก็บเงินปลายทางใช้บริการได้ที่สาขาเอ็นบีเอ ได้ทุกสาขาทั่วประเทศ."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                linkWeb="https://www.ninjavan.co/th-th/"
                image={Ninjavan}
                name="Ninja Van"
                position={{ color: 'info', label: 'บริษัท นินจา โลจิสติกส์ (ประเทศไทย) จำกัด' }}
                description="นินจาแวน มีระบบการส่งพัสดุที่พร้อมให้บริการทุกความต้องการ รองรับทุกโอกาสทางธุรกิจ และความพึงพอใจสูงสุดถึงมือผู้รับ."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                linkWeb="https://www.dhl.com/th-th/home/tracking.html"
                image={DHL}
                name="DHL eCommerce"
                position={{ color: 'info', label: 'บริษัท ดีเอชแอล อีคอมเมิร์ซ โซลูชั่นส์ จำกัด' }}
                description="ขนส่งชั้นนำมีชื่อเสียงในประเทศ มอบบริการจัดส่งพัสดุทั้งภายในประเทศสำหรับลูกค้าที่ต้องการมาใช้บริการที่สาขาเอ็นบีเอ ได้ทุกสาขาทั่วประเทศ."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                linkWeb="https://www.best-inc.co.th/track"
                image={BestExpress}
                name="Best Express"
                position={{ color: 'info', label: 'บริษัท เบสท์ โลจิสติกส์ (ประเทศไทย) จำกัด' }}
                description="ผู้ให้บริการด้านซัพพลายเชนและผู้นำเสนอแนวทางการแก้ปัญหาทาง ด้านโลจิสติกส์แถวหน้าของโลก ใช้บริการได้ที่สาขาเอ็นบีเอ ได้ทุกสาขาทั่วประเทศ."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                linkWeb="https://www.scgexpress.co.th/tracking/"
                image={SCG}
                name="SCG Express"
                position={{ color: 'info', label: 'บริษัท เอสซีจี เอ็กซ์เพรส จำกัด' }}
                description="มุ่งเน้นการให้บริการขนส่งพัสดุด่วน ทั้งแบบทั่วไปและพัสดุประเภทอาหารที่ต้องการการควบคุมอุณหภูมิเป็นพิเศษ ใช้บริการได้ที่สาขาเอ็นบีเอ ได้ทุกสาขาทั่วประเทศ."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                linkWeb="https://www.scgexpress.co.th/tracking/"
                image={SCGCool}
                name="SCG CHILLED & FROZEN PARCEL"
                position={{ color: 'info', label: 'บริษัท เอสซีจี เอ็กซ์เพรส จำกัด' }}
                description=" การขนส่งสินค้าแบบแช่เย็น หรือแช่แข็ง SCG EXPRESS
                          มีบริการขนส่งสินค้าสำหรับพัสดุที่ต้องควบคุมอุณหภูมิ เช่น ของสด อาหารทะเล
                          ผลไม้."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                linkWeb="https://www.lazada.co.th/helpcenter/how-do-i-track-my-order-status-6074.html"
                image={Lazada}
                name="Lazada Drop-Off"
                position={{ color: 'info', label: 'บริษัท ลาซาด้า จำกัด' }}
                description="เป็นผู้ให้บริการเว็บไซต์ช้อปปิ้งออนไลน์สินค้าราคาถูก
                        โดยมีสินค้าให้เลือกซื้อหลายสิบกลุ่มใหญ่ และแยกย่อยอีกหลายร้อยหมวดหมู่ย่อย."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
