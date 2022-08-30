import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import Nort1 from '../../../../assets/images/NBAService/area_zone/Nort/Nort1.jpg';

import Zone1 from '../../../../assets/images/NBAService/area_zone/Nort/NortZone1.jpg';
import Zone2 from '../../../../assets/images/NBAService/area_zone/Nort/NortZone2.jpg';

function index() {
  return (
    <div>
      <Grid
        xs={12}
        container
        display="flex"
        sx={{ alignItems: 'center', textAlign: 'center', width: '100%' }}
      >
        <Grid xs={12} p={2}>
          <div className="img-hover-zoom--slowmo">
            <img src={`${Nort1}`} alt="imge" width="100%" style={{ borderRadius: '15px' }} />
          </div>
        </Grid>
        <Container display="flex">
          <Grid
            xs={12}
            container
            display="flex"
            sx={{ alignItems: 'center', textAlign: 'center', width: '100%' }}
          >
            <Grid xs={12} sm={6} p={2}>
              <div className="img-hover-zoom--slowmo">
                <img src={`${Zone1}`} alt="imge" style={{ borderRadius: '15px' }} />
              </div>
            </Grid>
            <Grid xs={12} sm={6} p={2}>
              <div className="img-hover-zoom--slowmo">
                <img src={`${Zone2}`} alt="imge" style={{ borderRadius: '15px' }} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}

export default index;
