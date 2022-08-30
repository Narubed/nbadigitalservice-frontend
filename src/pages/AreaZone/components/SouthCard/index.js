import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import South1 from '../../../../assets/images/NBAService/area_zone/South/South1.jpg';
import South2 from '../../../../assets/images/NBAService/area_zone/South/South2.jpg';
import Zone1 from '../../../../assets/images/NBAService/area_zone/South/southtop1.jpg';
import Zone2 from '../../../../assets/images/NBAService/area_zone/South/southtop2.jpg';

import Zone3 from '../../../../assets/images/NBAService/area_zone/South/sourthbottom1.jpg';
import Zone4 from '../../../../assets/images/NBAService/area_zone/South/sourthbottom2.jpg';

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
            <img src={`${South1}`} alt="imge" width="100%" style={{ borderRadius: '15px' }} />
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
            <img src={`${South2}`} alt="imge" width="100%" style={{ borderRadius: '15px' }} />
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
                <img src={`${Zone3}`} alt="imge" style={{ borderRadius: '15px' }} />
              </div>
            </Grid>
            <Grid xs={12} sm={6} p={2}>
              <div className="img-hover-zoom--slowmo">
                <img src={`${Zone4}`} alt="imge" style={{ borderRadius: '15px' }} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}

export default index;
