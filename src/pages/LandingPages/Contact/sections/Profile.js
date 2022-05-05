import { NavLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from '../../../../components/MKBox';
import MKAvatar from '../../../../components/MKAvatar';
import MKTypography from '../../../../components/MKTypography';
import MKButton from '../../../../components/MKButton';
// Images
import profilePicture from '../../../../assets/images/NBAService/logo/nba.png';

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: 'auto', sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">NBA Digital Service</MKTypography>
                <NavLink to="/pages/authentication/sign-in">
                  <MKButton variant="outlined" color="info" size="small">
                    Login
                  </MKButton>
                </NavLink>
              </MKBox>
              <MKTypography variant="body2" fontWeight="light" color="text">
                ศูนย์บริการงานที่ให้บริการทางด้านรับออกแบบสื่อสิ่งพิมพ์ทุกชนิด โปสเตอร์ แบนเนอร์
                ไวนิล งานด้านไอที รับพัฒนาเว็บไซต์ งานพัฒนาระบบสารสนเทศ
                และให้บริการด้านงานบัญชี-ภาษี รับทำบัญชี ปิดงบรายเดือน-รายปี
                รับประสานงานจดทะเบียนพาณิชย์ งานการตลาดดิจิตอล
                ทั้งนี้ยังมีบริการทางด้านรับชำระค่าบริการค่าน้ำ ค่าไฟฟ้า บัตรเครดิต สาธารณูปโภคต่างๆ
                ภายใต้แนวคิด &apos;ONE STOP SERVICE&apos; โดยจัดให้มีศูนย์บริการลูกค้า ขึ้นมาอยู่ 3
                ระดับ เพื่อให้การบริหารจัดการโปรเจคลงสู่ชุมชนในอนาคต
                และการกระจายผลตอบแทนและรายได้ตามระดับการบริหารดังนี้ <br />
                1.ระดับจังหวัด 2.ระดับอำเภอ 3.ระดับตำบล
                <br />
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
