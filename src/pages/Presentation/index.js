/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
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
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion/dist/framer-motion';
import Image from '@material-tailwind/react/Image';
// Material Kit 2 React components
// import bgImage from '../../assets/images/NBAService/NBA1.jpg';
import bgImage from '../../assets/images/NBAService/background/background-purple5.jpg';
import MKBox from '../../components/MKBox';
import MKTypography from '../../components/MKTypography';
import MKSocialButton from '../../components/MKSocialButton';

// Material Kit 2 React examples
import DefaultNavbar from '../../examples/Navbars/DefaultNavbar';
import DefaultFooter from '../../examples/Footers/DefaultFooter';
import FilledInfoCard from '../../examples/Cards/InfoCards/FilledInfoCard';

// Presentation page sections
import Counters from './sections/Counters';
import Information from './sections/Information';
import DesignBlocks from './sections/DesignBlocks';
import Pages from './sections/Pages';
import Testimonials from './sections/Testimonials';
import Download from './sections/Download';
import Accounting from './sections/Accounting';
import PrintingMedia from './sections/PrintingMedia';
import WebsiteDesign from './sections/WebsiteDesign';
import Logosilde from './sections/Logosilde';
import NBAExpress from './sections/NBAExpress';
import Advert from './sections/Advert';
import Vision from './sections/Vision';
import NbaDigitalService from './sections/NbaDigitalService';
import CounterService from './sections/CounterService';
import PromotionLogo from './sections/PromotionLogo';

// Presentation page components
import BuiltByDevelopers from './components/BuiltByDevelopers';
import ImageSlider from './sections/ImageSlider';

// Routes
import routes from '../../routes';
import footerRoutes from '../../footer.routes';
import bgImage2 from '../../assets/images/NBAService/background/buble.png';

function Presentation() {
  return (
    <>
      <Advert />
      <DefaultNavbar
        routes={routes}
        action={{
          type: 'external',
          route: '/pages/landing-pages/contact',
          label: 'ติดต่อเรา',
          color: 'info'
        }}
        sticky
      />
      {/* <Box
        height="100vh"
        minHeight="75vh"
        width="100"
        sx={{
          height: '10000%',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          // backgroundPosition: 'top',
          // display: 'grid',
          placeItems: 'center'
        }}
      > */}
      {/* <Box>
        <div className="min-h-screen h-4/5">
          <Image
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            minHeight="100vh"
            minWidth="100%"
            pt={6}
            src={bgImage}
            width="100%"
          />
        </div> */}
      {/* <Container> */}
      {/* <Grid container item xs={12} lg={7} justifyContent="center" mx="auto"> */}
      {/* <Typography
              variant="h1"
              color="#b388ff"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down('md')]: {
                  fontSize: size['3xl']
                }
              })}
            > */}
      {/* <div color="blue">NBA Digital Service</div> */}
      {/* </Typography> */}
      {/* <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            > */}
      {/* ศูนย์บริการลูกค้า เอ็นบีเอ ดิจิตอลเวิลด์ ครบเครื่องครบวงจร บริการ เคาน์เตอร์ เซอร์วิส
              ออกแบบสื่อสิ่งพิมพ์ออนไลน์และออฟไลน์ บัญชีและธุรกิจครบวงจร ปรึกษาทางด้านธุรกิจ
              กฏหมายบัญชีและภาษี */}
      {/* </MKTypography> */}
      {/* </Grid> */}
      {/* </Container> */}
      {/* </Box> */}
      {/* <div>
        <img className="h-96 min-h-24 hover:min-h-full w-full" src={bgImage} />
      </div> */}
      <ImageSlider />
      <Vision />

      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -6,
          mb: 4,
          background: 'none',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          // backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backgroundImage: `url(${bgImage2})`,
          backdropFilter: 'saturate(200%) blur(30px)',
          boxShadow: ({ boxShadows: { xxl } }) => xxl
        }}
      >
        {/* <iframe
          width="100%"
          height="880"
          src="http://online.anyflip.com/eahgk/imzl/"
          seamless="seamless"
          scrolling="no"
          frameBorder="0"
          allowtransparency="true"
          allowFullScreen="true"
        /> */}
        {/* <iframe
          width="100%"
          height="760px"
          src="https://anyflip.com/bookcase/mzlqf/red"
          seamless="seamless"
          scrolling="no"
          frameBorder="0"
          allowtransparency="true"
          allowFullScreen="true"
        /> */}
        <div className="background-effect-wrapper">
          <div className="background-effect kenBurnsToRight">
            <div className="particle-effect snowfall" />
          </div>
        </div>
        <Counters />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          <NbaDigitalService />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          <CounterService />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          <Accounting />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          <PrintingMedia />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          <WebsiteDesign />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          <NBAExpress />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          <PromotionLogo />
        </motion.div>
        {/* <Information /> */}
        {/* <DesignBlocks /> */}
        {/* <Pages /> */}
        {/* <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: 'external',
                  route: 'https://www.creative-tim.com/learning-lab/react/overview/material-kit/',
                  label: "Let's start"
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: 'external',
                  route: 'https://www.creative-tim.com/learning-lab/react/overview/datepicker/',
                  label: 'Read more'
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: 'external',
                  route: 'https://www.creative-tim.com/learning-lab/react/alerts/material-kit/',
                  label: 'Read more'
                }}
              />
            </Grid>
          </Grid>
        </Container> */}
        {/* <Testimonials /> */}
        <Logosilde />
        {/* <Download /> */}
        {/* <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: 'auto' }}
                mr={{ xs: 0, lg: 'auto' }}
                sx={{ textAlign: { xs: 'center', lg: 'right' } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
        {/* <ImageFooter /> */}
      </MKBox>
    </>
  );
}

export default Presentation;
