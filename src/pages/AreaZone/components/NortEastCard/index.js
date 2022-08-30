import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import NorthEast1 from '../../../../assets/images/NBAService/area_zone/NortEast/NorthEast1.jpg';
import NorthEast2 from '../../../../assets/images/NBAService/area_zone/NortEast/NorthEast2.jpg';
import Zone1 from '../../../../assets/images/NBAService/area_zone/NortEast/NETop1.jpg';
import Zone2 from '../../../../assets/images/NBAService/area_zone/NortEast/NETop2.jpg';

import NEbottom1 from '../../../../assets/images/NBAService/area_zone/NortEast/NEBottom1.jpg';
import NEbottom2 from '../../../../assets/images/NBAService/area_zone/NortEast/NEBottom2.jpg';

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
            <img src={`${NorthEast1}`} alt="imge" width="100%" style={{ borderRadius: '15px' }} />
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
        <Grid xs={12} p={2}>
          <div className="img-hover-zoom--slowmo">
            <img src={`${NorthEast2}`} alt="imge" width="100%" style={{ borderRadius: '15px' }} />
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
                <img src={`${NEbottom1}`} alt="imge" style={{ borderRadius: '15px' }} />
              </div>
            </Grid>
            <Grid xs={12} sm={6} p={2}>
              <div className="img-hover-zoom--slowmo">
                <img src={`${NEbottom2}`} alt="imge" style={{ borderRadius: '15px' }} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}

export default index;
