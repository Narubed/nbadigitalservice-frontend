/* eslint-disable global-require */

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from '@material-tailwind/react/Image';

// Material Kit 2 React components
import MKBox from '../../../components/MKBox';

// Material Kit 2 React examples
import RotatingCard from '../../../examples/Cards/RotatingCard';
import RotatingCardFront from '../../../examples/Cards/RotatingCard/RotatingCardFront';
import RotatingCardBack from '../../../examples/Cards/RotatingCard/RotatingCardBack';
import DefaultInfoCard from '../../../examples/Cards/InfoCards/DefaultInfoCard';

// Images
// import bgFront from "assets/images/rotating-card-bg-front.jpeg";
// import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function NbaDigitalService() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: 'auto' }}>
          <Grid item xs={12} lg={4} sx={{ mx: 'auto' }}>
            <DefaultInfoCard
              title="ที่เดียวครบ จบที่เรา จบทุกบริการ"
              description="One Stop Service For Business"
            />
          </Grid>
          <Grid item xs={12} lg={8} sx={{ ml: 'auto' }}>
            <Image
              src={
                require('../../../assets/images/NBAService/mainPages/nbadigitalservice.jpg').default
              }
              rounded={false}
              raised
              alt="Raised Image"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default NbaDigitalService;
