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
import Card from '@mui/material/Card';

// Material Kit 2 React components
// import bgImage from '../../assets/images/bg-about-us.jpg';
import bgImage from '../../assets/images/NBAService/background/BGPages.jpg';
import MKBox from '../../components/MKBox';
import MKTypography from '../../components/MKTypography';

// Material Kit 2 React examples
import DefaultNavbar from '../../examples/Navbars/DefaultNavbar';
import DefaultFooter from '../../examples/Footers/DefaultFooter';

// About Us page sections
import MainCard from './sections/MainCard';
import routes from '../../routes';
import footerRoutes from '../../footer.routes';

// Images
import bgImageBuble from '../../assets/images/NBAService/background/buble.png';

function AboutUs() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: 'external',
          route: '/pages/landing-pages/contact',
          label: 'ติดต่อเรา',
          color: 'default'
        }}
        transparent
        light
      />
      <MKBox
        minHeight="45vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'grid',
          placeItems: 'center'
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: 'auto', textAlign: 'center' }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down('md')]: {
                  fontSize: size['3xl']
                }
              })}
            >
              ประวัติความเป็นมา
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              เอ็นบีเอ ดิจิตอล เซอร์วิส เซ็นเตอร์
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          // background: 'none',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundImage: `url(${bgImageBuble})`,
          boxShadow: ({ boxShadows: { xxl } }) => xxl
        }}
      >
        <MainCard />
        {/* <Featuring /> */}
        {/* <Newsletter /> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
