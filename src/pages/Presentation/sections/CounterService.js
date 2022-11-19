/* eslint-disable global-require */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from '@material-tailwind/react/Image';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
// Material Kit 2 React components
import MKBox from '../../../components/MKBox';

// Material Kit 2 React examples
import DefaultInfoCard from '../../../examples/Cards/InfoCards/DefaultInfoCard';

const FadeInRightShorter = keyframes`
from {
  opacity: 0;
  transform: translate(-50px,0);
  transform-origin: 0 0;
}

to {
  opacity: 1;
  transform: none
}`;

function CounterService() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: 'auto' }}>
          <Grid item xs={12} lg={8} sx={{ ml: 'auto' }}>
            <div>
              <Image
                src={
                  require('../../../assets/images/NBAService/mainPages/CounterService.jpg').default
                }
                rounded={false}
                raised
                alt="Raised Image"
              />
            </div>
          </Grid>

          <Grid item xs={12} lg={4} sx={{ mx: 'auto' }}>
            <DefaultInfoCard
              title="บริการ เคาน์เตอร์เซอร์วิส "
              description="Counter service, bill payment, top-up, ticket booking."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CounterService;