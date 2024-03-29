import * as React from 'react';
// @mui material components
import {
  // Box,
  Grid,
  Container
  // Card,
  // CardActionArea,
  // CardMedia,
  // CardContent,
  // Typography,
} from '@mui/material';

// Material Kit 2 React components
import MKBox from '../../../components/MKBox';

// Material Kit 2 React examples
// import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import EBranch from './cardCounters/E-Branch';
import ETRANSFER from './cardCounters/E-TRANSFER';
import FoodExpress from './cardCounters/FoodExpress';
import NBAExpress from './cardCounters/NBAExpress';
import FoodDelivery from './cardCounters/FoodDelivery';
import HappyPoint from './cardCounters/Happy-Point';
import NBAPlatform from './cardCounters/NBA-Platform';
import ProductExpress from './cardCounters/ProductExpress';

import NBAPOS from './cardCounters/NBA-POS';
// image={require("assets/images/NBAService/NBA2.jpg").default}

function Counters() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={12} sx={{ mx: 'auto' }}>
          <Grid item xs={12} sm={6} md={6} mt={1} lg={2.4}>
            <EBranch />
          </Grid>

          <Grid item xs={12} sm={6} md={6} mt={1} lg={2.4}>
            <NBAPlatform />
          </Grid>
          <Grid item xs={12} sm={6} md={6} mt={1} lg={2.4}>
            <NBAExpress />
          </Grid>
          <Grid item xs={12} sm={6} md={6} mt={1} lg={2.4}>
            <FoodExpress />
          </Grid>
          <Grid item xs={12} sm={6} md={6} mt={1} lg={2.4}>
            <ETRANSFER />
          </Grid>

          <Grid item xs={12} sm={6} md={6} mt={1} lg={2.4}>
            <FoodDelivery />
          </Grid>
          <Grid item xs={12} sm={6} md={6} mt={1} lg={2.4}>
            <HappyPoint />
          </Grid>
          <Grid item xs={12} sm={6} md={6} mt={1} lg={2.4}>
            <NBAPOS />
          </Grid>
          <Grid item xs={12} sm={6} md={6} mt={1} lg={2.4}>
            <ProductExpress />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
