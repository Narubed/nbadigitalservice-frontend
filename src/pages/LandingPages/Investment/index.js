/* eslint-disable jsx-a11y/anchor-is-valid */
// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

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

// compunents
import MainImage from './companents/mainImage';

import bgImage from '../../../assets/images/NBAService/NBA.jpg';
import IMG14999 from '../../../assets/images/NBAService/investment/14999.jpg';
import IMG17499 from '../../../assets/images/NBAService/investment/17499.jpg';
import IMG19999 from '../../../assets/images/NBAService/investment/19999.jpg';
import IMG200000 from '../../../assets/images/NBAService/investment/200000.jpg';
import IMG300000 from '../../../assets/images/NBAService/investment/300000.jpg';
import bgImageBuble from '../../../assets/images/NBAService/background/buble.png';

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
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -6,
          mb: 4,

          backgroundImage: `url(${bgImageBuble})`,
          // backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: 'saturate(200%) blur(30px)',
          boxShadow: ({ boxShadows: { xxl } }) => xxl
        }}
      >
        <Grid
          sx={{
            background: 'none',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundImage: `url(${bgImageBuble})`
          }}
        >
          <Grid container spacing={1} alignItems="center" sx={{}}>
            <MainImage />
          </Grid>
          <br />
          <br />
          <br />
          <MKBox textAlign="center">
            <MKTypography variant="h3" mt={6} mb={3}>
              <div>รูปแบบการลงทุนสำหรับ บุคคลทั่วไป</div>
            </MKTypography>
          </MKBox>
          <MKBox component="section" py={3}>
            <Container>
              <Grid container item xs={12} lg={12} sx={{ mx: 'auto', pr: '1%', pl: '1%' }}>
                <Grid
                  item
                  pb={2}
                  xs={12}
                  md={4}
                  display="flex"
                  sx={{ mx: 'auto', pr: '1%', pl: '1%' }}
                >
                  <div className="img-hover-zoom--slowmo">
                    <Image src={IMG14999} rounded={false} raised alt="Raised Image" />
                  </div>
                </Grid>
                <Grid
                  item
                  pb={2}
                  xs={12}
                  md={4}
                  display="flex"
                  sx={{ mx: 'auto', pr: '1%', pl: '1%' }}
                >
                  <div className="img-hover-zoom--slowmo">
                    <Image src={IMG17499} rounded={false} raised alt="Raised Image" />
                  </div>
                </Grid>
                <Grid
                  item
                  pb={2}
                  xs={12}
                  md={4}
                  display="flex"
                  sx={{ mx: 'auto', pr: '1%', pl: '1%' }}
                >
                  <div className="img-hover-zoom--slowmo">
                    <Image src={IMG19999} rounded={false} raised alt="Raised Image" />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </MKBox>
          <MKBox textAlign="center">
            <MKTypography variant="h3" mt={6} mb={3}>
              <div>รูปแบบการลงทุนสำหรับ ผู้บริหารศูนย์</div>
            </MKTypography>
          </MKBox>
          <MKBox component="section" py={3}>
            <Container>
              <Grid container item xs={12} lg={12} sx={{ mx: 'auto', pr: '1%', pl: '1%' }}>
                <Grid
                  item
                  pb={2}
                  xs={12}
                  md={6}
                  display="flex"
                  sx={{ mx: 'auto', pr: '1%', pl: '1%' }}
                >
                  <div className="img-hover-zoom--slowmo">
                    <Image src={IMG200000} rounded={false} raised alt="Raised Image" />
                  </div>
                </Grid>
                <Grid
                  item
                  pb={2}
                  xs={12}
                  md={6}
                  display="flex"
                  sx={{ mx: 'auto', pr: '1%', pl: '1%' }}
                >
                  <div className="img-hover-zoom--slowmo">
                    <Image src={IMG300000} rounded={false} raised alt="Raised Image" />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </MKBox>
        </Grid>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
