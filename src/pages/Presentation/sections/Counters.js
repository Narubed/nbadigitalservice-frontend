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

// image={require("assets/images/NBAService/NBA2.jpg").default}

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={12} sx={{ mx: 'auto' }}>
          <Grid item xs={12} md={3} display="flex">
            <EBranch />
          </Grid>
          <Grid item xs={12} md={3} display="flex">
            <ETRANSFER />
          </Grid>
          <Grid item xs={12} md={3} display="flex">
            <NBAExpress />
          </Grid>
          <Grid item xs={12} md={3} display="flex">
            <FoodExpress />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
