/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { styled } from '@mui/material/styles';
import MuiTab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// Material Kit 2 React components
// import bgImage from '../../assets/images/bg-about-us.jpg';
import bgImage from '../../assets/images/NBAService/background/BGPages.jpg';
import MKBox from '../../components/MKBox';
import MKTypography from '../../components/MKTypography';

// Material Kit 2 React examples
import DefaultNavbar from '../../examples/Navbars/DefaultNavbar';
import DefaultFooter from '../../examples/Footers/DefaultFooter';

import Tabs from './components/Tabs';

// About Us page sections
// import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
// import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
import routes from '../../routes';
// import routes from '../../../routes_admin';
import footerRoutes from '../../footer.routes';

// Images

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
      <div className="background-effect-wrapper">
        <div className="background-effect kenBurnsToRight">
          <div className="particle-effect snowfall" />
        </div>
      </div>
      <MKBox
        minHeight="35vh"
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
              variant="h3"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down('md')]: {
                  fontSize: size['3xl']
                }
              })}
            >
              รายละเอียดการแบ่งเขตพื้นที่ต่าง ๆ
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8} mt={1} mb={3}>
              NBA Digital Service
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          // backgroundColor: '#BA55D3',
          // background: 'none',
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl
        }}
      >
        <Tabs />
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
