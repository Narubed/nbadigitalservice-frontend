/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import axios from 'axios';

// Material Kit 2 React components
import MKBox from '../../../components/MKBox';
import MKTypography from '../../../components/MKTypography';

// Material Kit 2 React examples
import DefaultNavbar from '../../../examples/Navbars/DefaultNavbar';
import DefaultFooter from '../../../examples/Footers/DefaultFooter';
// Routes
// import routes from '../../../routes';
import routes from '../../../routes_admin';
import footerRoutes from '../../../footer.routes';

// Images
import bgImage from '../../../assets/images/bg-about-us.jpg';
import BackgroundImage from './companents/backgroundImage';
import MainImage from './companents/mainImage';
import Button1 from './companents/button1';
import Button2 from './companents/button2';

export default function index() {
  const [isValues, setValue] = useState({});
  useEffect(() => {
    findData();
  }, []);

  const findData = async () => {
    await axios
      .get(`${process.env.REACT_APP_WEB_SERVICE}/first-page`)
      .then((json) => setValue(json.data.data))
      .catch(() => setValue({}));
  };
  return (
    <div>
      {' '}
      <DefaultNavbar routes={routes} />
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
                  fontSize: size['2xl']
                }
              })}
            >
              จัดการหน้าหลัก
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              สำหรับผู้ดูแลระบบ NBA Digital Service
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
          boxShadow: ({ boxShadows: { xxl } }) => xxl
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid
              item
              xs={6}
              p={1}
              sx={{ borderRight: '1px solid grey', borderBottom: '1px solid grey' }}
            >
              <BackgroundImage isValues={isValues} id="1" />
            </Grid>
            <Grid
              item
              xs={6}
              p={1}
              sx={{ borderLeft: '1px solid grey', borderBottom: '1px solid grey' }}
            >
              <MainImage isValues={isValues} id="2" />
            </Grid>
            <Grid
              item
              xs={6}
              p={1}
              sx={{ borderRight: '1px solid grey', borderTop: '1px solid grey' }}
            >
              <Button1 isValues={isValues} id="3" />
            </Grid>
            <Grid
              item
              xs={6}
              p={1}
              sx={{ borderLeft: '1px solid grey', borderTop: '1px solid grey' }}
            >
              <Button2 isValues={isValues} id="4" />
            </Grid>
          </Grid>
        </Container>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </div>
  );
}
