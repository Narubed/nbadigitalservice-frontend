import Marquee from 'react-fast-marquee';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
// Material Kit 2 React components
import Box from '@mui/material/Box';

import MKBox from '../../../components/MKBox';
import MKButton from '../../../components/MKButton';
import MKTypography from '../../../components/MKTypography';

// Images
import logo01 from '../../../assets/images/NBAService/logo_slide/logo-01.png';
import ems from '../../../assets/images/NBAService/logo_slide/logo-06.png';
import best from '../../../assets/images/NBAService/logo_slide/logo-07.png';
import dhl from '../../../assets/images/NBAService/logo_slide/logo-03.png';
import flash from '../../../assets/images/NBAService/logo_slide/logo-02.png';
import kerry from '../../../assets/images/NBAService/logo_slide/logo-05.png';
import ninjavan from '../../../assets/images/NBAService/logo_slide/logo-04.png';
import scg from '../../../assets/images/NBAService/logo_slide/logo-08.png';
import scgcool from '../../../assets/images/NBAService/logo_slide/logo-09.png';
import lazada from '../../../assets/images/NBAService/logo_slide/logo-10.png';
import shopee from '../../../assets/images/NBAService/logo_slide/logo-11.png';

function Download() {
  return (
    <Grid container item xs={12} mx="auto">
      <MKBox textAlign="center">
        <MKTypography variant="h3" mt={6} mb={3}>
          <div style={{ color: '#000' }}>พันธมิตรของเรา</div>
        </MKTypography>

        <Marquee
          pauseOnHover
          speed="30"
          gradientColor={[240, 240, 240]}
          style={
            {
              // background: 'none'
            }
          }
        >
          <Grid item xs={1} lg={1}>
            <Tooltip title="บริษัทเอ็นบีเอ ดิจิตอล เซอร์วิส เซ็นเตอร์">
              <MKBox component="img" src={logo01} width="50%" sx={{ ml: '-360px' }} />
            </Tooltip>
          </Grid>
          <Grid item xs={1} lg={1}>
            <Tooltip title="ไปรษณีย์ไทย บริษัท ไปรษณีย์ไทย จำกัด (ปณท)">
              <MKBox component="img" src={ems} width="50%" sx={{ ml: '-360px' }} />
            </Tooltip>
          </Grid>
          <Grid item xs={1} lg={1}>
            <Tooltip title="บริษัท เบสท์ โลจิสติกส์ (ประเทศไทย) จำกัด">
              <MKBox component="img" src={best} width="50%" sx={{ ml: '-360px' }} />
            </Tooltip>
          </Grid>
          <Grid item xs={1} lg={1}>
            <Tooltip title="บริษัท ดีเอชแอล อีคอมเมิร์ซ โซลูชั่นส์ จำกัด">
              <MKBox component="img" src={dhl} width="50%" sx={{ ml: '-360px' }} />
            </Tooltip>
          </Grid>
          <Grid item xs={1} lg={1}>
            <Tooltip title="บริษัท แฟลช เอ็กซ์เพรส จำกัด">
              <MKBox component="img" src={flash} width="50%" sx={{ ml: '-360px' }} />
            </Tooltip>
          </Grid>
          <Grid item xs={1} lg={1}>
            <Tooltip title="บริษัท เคอรี่ เอ็กซ์เพรส จำกัด (มหาชน)">
              <MKBox component="img" src={kerry} width="50%" sx={{ ml: '-360px' }} />
            </Tooltip>
          </Grid>
          <Grid item xs={1} lg={1}>
            <Tooltip title="บริษัท นินจา โลจิสติกส์ (ประเทศไทย) จำกัด">
              <MKBox component="img" src={ninjavan} width="50%" sx={{ ml: '-360px' }} />
            </Tooltip>
          </Grid>
          <Grid item xs={1} lg={1}>
            <Tooltip title="บริษัท เอสซีจี เอ็กซ์เพรส จำกัด">
              <MKBox component="img" src={scg} width="50%" sx={{ ml: '-360px' }} />
            </Tooltip>
          </Grid>
          <Grid item xs={1} lg={1}>
            <Tooltip title="บริษัท เอสซีจี เอ็กซ์เพรส จำกัด">
              <MKBox component="img" src={scgcool} width="50%" sx={{ ml: '-360px' }} />
            </Tooltip>
          </Grid>
          <Grid item xs={1} lg={1}>
            <Tooltip title="บริษัท ลาซาด้า จำกัด">
              <MKBox component="img" src={lazada} width="50%" sx={{ ml: '-360px' }} />
            </Tooltip>
          </Grid>
          <Grid item xs={1} lg={1}>
            <Tooltip title="บริษัท ช้อปปี้ เอ็กซ์เพรส (ประเทศไทย) จำกัด">
              <MKBox component="img" src={shopee} width="50%" sx={{ ml: '-360px' }} />
            </Tooltip>
          </Grid>
        </Marquee>
      </MKBox>
    </Grid>
  );
}

export default Download;
