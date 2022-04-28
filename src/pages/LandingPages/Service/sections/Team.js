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
import EMS from '../../../../assets/images/NBAService/parcel/EMS.jpg';
import DHL from '../../../../assets/images/NBAService/parcel/DHL.jpg';
import Flash from '../../../../assets/images/NBAService/parcel/Flash.jpg';
import Kerry from '../../../../assets/images/NBAService/parcel/Kerry.jpg';
import SCG from '../../../../assets/images/NBAService/parcel/SCG.jpg';
import True from '../../../../assets/images/NBAService/parcel/True.jpg';
import BestExpress from '../../../../assets/images/NBAService/parcel/BestExpress.png';
import Deliveree from '../../../../assets/images/NBAService/parcel/Deliveree.png';
import Ninjavan from '../../../../assets/images/NBAService/parcel/Ninjavan.png';

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
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
                image={True}
                name="True e-Logistics"
                position={{ color: 'info', label: 'บริษัท ทรูโลจิสติกส์ จำกัด' }}
                description=" ให้บริการขนส่งพัสดุภายในประเทศจัดส่งพัสดุถึงปลายทางภายใน 1 วัน พร้อมบริการเข้ารับพัสดุถึงบ้าน และบริการเก็บเงินปลายทาง ใช้บริการได้ที่สาขาเอ็นบีเอ ได้ทุกสาขา."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={Deliveree}
                name="SCG Express"
                position={{ color: 'info', label: 'บริษัท เดลิเวอรี (ไทยแลนด์) จำกัด' }}
                description="ให้บริการส่งของ 2 รูปแบบ คือแบบเหมาคันและแบบรายชิ้น โดยคุณสามารถเลือกบริการที่ต้องการใช้ในขั้นตอนที่หนึ่งของการจอง."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
