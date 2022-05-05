import Marquee from 'react-fast-marquee';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Card from '@material-tailwind/react/Card';
// Material Kit 2 React components
import MKBox from '../../../components/MKBox';
import MKButton from '../../../components/MKButton';
import MKTypography from '../../../components/MKTypography';

// Images
import ems from '../../../assets/images/NBAService/logo_slide2/ems.png';
import best from '../../../assets/images/NBAService/logo_slide2/best.png';
import dhl from '../../../assets/images/NBAService/logo_slide2/DHL.png';
import flash from '../../../assets/images/NBAService/logo_slide2/Flash.png';
import kerry from '../../../assets/images/NBAService/logo_slide2/kerry.png';
import ninjavan from '../../../assets/images/NBAService/logo_slide2/Ninjavan.png';
import scg from '../../../assets/images/NBAService/logo_slide2/scg.png';
import scgcool from '../../../assets/images/NBAService/logo_slide2/scg-cool.png';
import lazada from '../../../assets/images/NBAService/logo_slide2/lazada.jpg';

function Download() {
  return (
    <Container>
      <Grid container item xs={12} mx="auto">
        <MKBox textAlign="center">
          <MKTypography variant="h3" mt={6} mb={3}>
            พันธมิตรของเรา
          </MKTypography>

          <Marquee pauseOnHover speed="20">
            <Grid item xs={1} lg={1}>
              <Tooltip title="ไปรษณีย์ไทย บริษัท ไปรษณีย์ไทย จำกัด (ปณท)">
                <MKBox component="img" src={ems} width="50%" height="50%" />
              </Tooltip>
            </Grid>
            <Grid item xs={1} lg={1}>
              <Tooltip title="บริษัท เบสท์ โลจิสติกส์ (ประเทศไทย) จำกัด">
                <MKBox component="img" src={best} width="50%" height="50%" />
              </Tooltip>
            </Grid>
            <Grid item xs={1} lg={1}>
              <Tooltip title="บริษัท ดีเอชแอล อีคอมเมิร์ซ โซลูชั่นส์ จำกัด">
                <MKBox component="img" src={dhl} width="50%" height="50%" />
              </Tooltip>
            </Grid>
            <Grid item xs={1} lg={1}>
              <Tooltip title="บริษัท แฟลช เอ็กซ์เพรส จำกัด">
                <MKBox component="img" src={flash} width="50%" height="50%" />
              </Tooltip>
            </Grid>
            <Grid item xs={1} lg={1}>
              <Tooltip title="บริษัท เคอรี่ เอ็กซ์เพรส จำกัด (มหาชน)">
                <MKBox component="img" src={kerry} width="50%" height="50%" />
              </Tooltip>
            </Grid>
            <Grid item xs={1} lg={1}>
              <Tooltip title="บริษัท นินจา โลจิสติกส์ (ประเทศไทย) จำกัด">
                <MKBox component="img" src={ninjavan} width="50%" height="50%" />
              </Tooltip>
            </Grid>
            <Grid item xs={1} lg={1}>
              <Tooltip title="บริษัท เอสซีจี เอ็กซ์เพรส จำกัด">
                <MKBox component="img" src={scg} width="50%" height="50%" />
              </Tooltip>
            </Grid>
            <Grid item xs={1} lg={1}>
              <Tooltip title="บริษัท เอสซีจี เอ็กซ์เพรส จำกัด">
                <MKBox component="img" src={scgcool} width="50%" height="50%" />
              </Tooltip>
            </Grid>
            <Grid item xs={1} lg={1}>
              <Tooltip title="บริษัท ลาซาด้า จำกัด">
                <MKBox component="img" src={lazada} width="50%" height="50%" />
              </Tooltip>
            </Grid>
          </Marquee>
        </MKBox>
      </Grid>
    </Container>
  );
}

export default Download;
