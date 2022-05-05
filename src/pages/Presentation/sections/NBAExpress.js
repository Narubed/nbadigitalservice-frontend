/* eslint-disable global-require */
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from '@material-tailwind/react/Image';

// Material Kit 2 React components
import MKBox from '../../../components/MKBox';

// Material Kit 2 React examples
import DefaultInfoCard from '../../../examples/Cards/InfoCards/DefaultInfoCard';

function NBAExpress() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: 'auto' }}>
          <Grid item xs={12} lg={8} sx={{ ml: 'auto' }}>
            <Image
              src={require('../../../assets/images/NBAService/NBAExpress1.png').default}
              rounded={false}
              raised
              alt="Raised Image"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: 'auto' }}>
            <DefaultInfoCard
              title="เว็บไซต์สำหรับศูนย์บริการขนส่ง"
              description="The website for the transport service center."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default NBAExpress;
