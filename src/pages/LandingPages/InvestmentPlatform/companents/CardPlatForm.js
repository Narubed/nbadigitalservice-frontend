import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import Center from '../../../../assets/images/Platform/ส่วน 1-01-01.png';
import Center2 from '../../../../assets/images/Platform/ส่วน 1-01-02.png';
import Zone1 from '../../../../assets/images/Platform/แพลตฟอร์ม-01.png';
import Zone2 from '../../../../assets/images/Platform/แพลตฟอร์ม-02.png';
import Zone3 from '../../../../assets/images/Platform/แพลตฟอร์ม-03.png';

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
          <div>
            <img src={`${Center}`} alt="imge" width="100%" />
          </div>
        </Grid>
        <Grid xs={12} sm={4} p={2}>
          <div>
            <img src={`${Zone1}`} alt="imge" style={{ borderRadius: '15px' }} />
          </div>
        </Grid>
        <Grid xs={12} sm={4} p={2}>
          <div>
            <img src={`${Zone2}`} alt="imge" style={{ borderRadius: '15px' }} />
          </div>
        </Grid>
        <Grid xs={12} sm={4} p={2}>
          <div>
            <img src={`${Zone3}`} alt="imge" style={{ borderRadius: '15px' }} />
          </div>
        </Grid>
        <Grid xs={12} p={2}>
          <div>
            <img src={`${Center2}`} alt="imge" width="100%" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default index;
