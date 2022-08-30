/* eslint-disable global-require */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from '@material-tailwind/react/Image';

// Material Kit 2 React components
import MKBox from '../../../components/MKBox';

function PromotionLogo() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid
          container
          item
          xs={11}
          spacing={3}
          alignItems="center"
          justifyContent="center"
          sx={{ mx: 'auto' }}
        >
          <Image
            src={require('../../../assets/images/NBAService/Promotion.jpg').default}
            rounded={false}
            raised
            alt="Raised Image"
            width="70%"
          />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default PromotionLogo;
