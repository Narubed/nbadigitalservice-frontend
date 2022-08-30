import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import Center from '../../../../assets/images/NBAService/area_zone/Center/Center2.jpg';
import Zone1 from '../../../../assets/images/NBAService/area_zone/Center/CenterZone1.jpg';
import Zone2 from '../../../../assets/images/NBAService/area_zone/Center/CenterZone2.jpg';
import Zone3 from '../../../../assets/images/NBAService/area_zone/Center/CenterZone3.jpg';

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
            <img src={`${Center}`} alt="imge" width="100%" style={{ borderRadius: '15px' }} />
          </div>
        </Grid>
        <Grid xs={12} sm={4} p={2}>
          <div className="img-hover-zoom--slowmo">
            <img src={`${Zone1}`} alt="imge" style={{ borderRadius: '15px' }} />
          </div>
        </Grid>
        <Grid xs={12} sm={4} p={2}>
          <div className="img-hover-zoom--slowmo">
            <img src={`${Zone2}`} alt="imge" style={{ borderRadius: '15px' }} />
          </div>
        </Grid>
        <Grid xs={12} sm={4} p={2}>
          <div className="img-hover-zoom--slowmo">
            <img src={`${Zone3}`} alt="imge" style={{ borderRadius: '15px' }} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default index;
