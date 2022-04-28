/* eslint-disable jsx-a11y/anchor-is-valid */
// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Masonry } from '@mui/lab';
import H5 from '@material-tailwind/react/Heading5';
import { Icon } from '@iconify/react';
import Image from '@material-tailwind/react/Image';
import MKBox from '../../../components/MKBox';
import MKTypography from '../../../components/MKTypography';

import DefaultNavbar from '../../../examples/Navbars/DefaultNavbar';
import DefaultFooter from '../../../examples/Footers/DefaultFooter';

import routes from '../../../routes';
import footerRoutes from '../../../footer.routes';

import bgImage from '../../../assets/images/NBAService/NBA.jpg';
import IMG14999 from '../../../assets/images/NBAService/investment/14999.jpg';
import IMG17499 from '../../../assets/images/NBAService/investment/17499.jpg';
import IMG19999 from '../../../assets/images/NBAService/investment/19999.jpg';

function ContactUs() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: 'external',
            route: '/pages/landing-pages/contact',
            label: 'ติดต่อเรา',
            color: 'info'
          }}
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: 'none', lg: 'flex' }}
            width="calc(100% - 2rem)"
            height="calc(110vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{
              backgroundImage: () => `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'grid',
              placeItems: 'center'
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: 'auto', lg: 6 }}
          mr={{ xs: 'auto', lg: 6 }}
        >
          <Card>
            <CardHeader color="purple" size="lg">
              <H5 color="white">NBA Digital Service</H5>
            </CardHeader>
            <CardBody>
              <MKBox p={3}>
                <MKTypography variant="body2" color="text" mb={2} display="flex">
                  <Icon icon="emojione-v1:ballot-box-bold-check" width="26" height="26" />
                  ราคาส่งพัสดุเริ่มต้นเพียง 18 บาท ส่งด่วนทั่วไทย!
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2} display="flex">
                  <Icon icon="emojione-v1:ballot-box-bold-check" width="26" height="26" />
                  มี % ส่วนแบ่งรายได้ให้สูงต่อเดือนสูงสุดถึง 20% ต่อชิ้น
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2} display="flex">
                  <Icon icon="emojione-v1:ballot-box-bold-check" width="26" height="26" />
                  รับส่งพัสดุได้สูงสุดถึง 50 กิโลกรัม !!
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2} display="flex">
                  <Icon icon="emojione-v1:ballot-box-bold-check" width="26" height="26" />
                  บริการเก็บปลายทาง.
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2} display="flex">
                  <Icon icon="emojione-v1:ballot-box-bold-check" width="26" height="26" />
                  รับสิทธิ์ใช้งานบริการเสริมที่สร้างรายได้เพิ่มเติมในอนาคต ฟรี ไม่มีค่าใช้จ่าย
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2} display="flex">
                  <Icon icon="emojione-v1:ballot-box-bold-check" width="26" height="26" />
                  บริการออกแบบสื่อสิ่งพิมพ์( นามบัตร ป้าย สติ๊กเกอร์ ฯลฯ )
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2} display="flex">
                  <Icon icon="emojione-v1:ballot-box-bold-check" width="26" height="26" />
                  มี%ส่วนแบ่ง รายได้ จากการรับงานออกแบบสื่อสิ่งพิมพ์ มากถึง 25%
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2} display="flex">
                  <Icon icon="emojione-v1:ballot-box-bold-check" width="26" height="26" />
                  บริการเคาน์เตอร์เซอร์วิส ทุกประเภท
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2} display="flex">
                  <Icon icon="emojione-v1:ballot-box-bold-check" width="26" height="26" />
                  มีอิสระในกำหนด ค่าธรรมเนียมเคาน์เตอร์เซอร์วิส ( รับเต็มไม่มีแบ่ง )
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2} display="flex">
                  <Icon icon="emojione-v1:ballot-box-bold-check" width="26" height="26" />
                  Call Center ทุกแผนกเพื่อรองรับทุกปัญหาที่พบ
                </MKTypography>
                <MKTypography variant="body2" color="text" mb={2} display="flex">
                  <Icon icon="emojione-v1:ballot-box-bold-check" width="26" height="26" />
                  ทางเรามีแอดมินคอยดูแลช่วยเหลือแก้ไขปัญหาในการใช้งาน ตลอด 24 ชั่วโมง
                </MKTypography>
              </MKBox>
            </CardBody>
          </Card>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />

      <Box sx={{ width: '100%', minHeight: '100%', pr: '3%', pl: '3%' }}>
        <Masonry columns={2} spacing={2}>
          <Paper xs={12} lg={6}>
            <Image src={IMG14999} rounded={false} raised alt="Raised Image" />
          </Paper>
          <Paper xs={12} lg={6}>
            <Image src={IMG17499} rounded={false} raised alt="Raised Image" />
          </Paper>
        </Masonry>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1
        }}
      >
        <Box sx={{ width: '50%', minHeight: '50%' }}>
          <Masonry columns={1} spacing={1}>
            <Paper sx={{ width: '50%', minHeight: '50%' }} pr="26%" pl="26%">
              <Image src={IMG19999} rounded={false} raised alt="Raised Image" />
            </Paper>
          </Masonry>
        </Box>
      </Box>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
