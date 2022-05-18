import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Material Kit 2 React components
import ExampleCard from '../../ExampleCard';
import MKBox from '../../../../components/MKBox';
import MKBadge from '../../../../components/MKBadge';
import MKTypography from '../../../../components/MKTypography';
import getData from './data/getData';
// Presentation page components

// Data

function DesignBlocks() {
  const [DataRegion, setDataRegion] = React.useState([]);
  getData(setDataRegion);
  console.log(DataRegion);
  const renderData = DataRegion.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ image, name, count, route, pro }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <ExampleCard image={image} name={name} count={count} pro={pro} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: 'center', my: 6, mx: 'auto', px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="NBA Digital service"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            ตัวเเทนศูนย์ที่ให้บริการ ภาคตะวันออกเฉียงเหนือ (North East)
          </MKTypography>
          <MKTypography variant="body1" color="text">
            ข้อมูลที่แสดงอยู่เป็นเพียงส่วนหนึ่งของภูมิภาคนั้น ๆ เท่านั้น.
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
