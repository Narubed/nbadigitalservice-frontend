/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import H5 from '@material-tailwind/react/Heading5';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
// @mui material components
import {
  Stack,
  Grid,
  Container,
  //   Card,
  TextField
  //   CardHeader,
  //   CardBody
  // CardContent,
  // Typography,
} from '@mui/material';

// Material Kit 2 React components
import MKBox from '../../../../components/MKBox';
import CardTransports from './components/CardTransports';

function Transports() {
  const [ProductType, setProductType] = React.useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const Transports = await axios.get(`${process.env.REACT_APP_WEB_SERVICE}/transports`);
    console.log(Transports);
    setProductType(Transports.data.data);
  }, []);
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={10} sx={{ mx: 'auto' }}>
          {ProductType.map((value) => (
            <Grid
              item
              xs={12}
              md={4}
              key={value._id}
              sx={{ ml: 'auto', mr: 'auto', pt: '5%', pl: '1%', pr: '1%' }}
            >
              <CardTransports value={value} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Transports;
