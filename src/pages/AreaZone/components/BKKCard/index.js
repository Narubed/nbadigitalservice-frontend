import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import BKK1 from '../../../../assets/images/NBAService/area_zone/BKK/BKK1.jpg';
import BKK2 from '../../../../assets/images/NBAService/area_zone/BKK/BKK2.jpg';
import Zone1 from '../../../../assets/images/NBAService/area_zone/BKK/zone1.jpg';
import Zone2 from '../../../../assets/images/NBAService/area_zone/BKK/zone2.jpg';
import Zone3 from '../../../../assets/images/NBAService/area_zone/BKK/zone3.jpg';
import Zone4 from '../../../../assets/images/NBAService/area_zone/BKK/zone4.jpg';
import Zone5 from '../../../../assets/images/NBAService/area_zone/BKK/zone5.jpg';
import Zone6 from '../../../../assets/images/NBAService/area_zone/BKK/zone6.jpg';
import Zone7 from '../../../../assets/images/NBAService/area_zone/BKK/zone7.jpg';
import Zone8 from '../../../../assets/images/NBAService/area_zone/BKK/zone8.jpg';

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
            <img src={`${BKK1}`} alt="imge" width="100%" style={{ borderRadius: '15px' }} />
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
        <Grid xs={12} p={2}>
          <div className="img-hover-zoom--slowmo">
            <img src={`${BKK2}`} alt="imge" width="100%" style={{ borderRadius: '15px' }} />
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
                <img src={`${Zone5}`} alt="imge" style={{ borderRadius: '15px' }} />
              </div>
            </Grid>
            <Grid xs={12} sm={6} p={2}>
              <div className="img-hover-zoom--slowmo">
                <img src={`${Zone6}`} alt="imge" style={{ borderRadius: '15px' }} />
              </div>
            </Grid>
            <Grid xs={12} sm={6} p={2}>
              <div className="img-hover-zoom--slowmo">
                <img src={`${Zone7}`} alt="imge" style={{ borderRadius: '15px' }} />
              </div>
            </Grid>
            <Grid xs={12} sm={6} p={2}>
              <div className="img-hover-zoom--slowmo">
                <img src={`${Zone8}`} alt="imge" style={{ borderRadius: '15px' }} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}

export default index;
