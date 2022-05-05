import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Material Kit 2 React components
import MKBox from '../../../../components/MKBox';
// import MKBadge from "components/MKBadge";
import MKTypography from '../../../../components/MKTypography';

// Presentation page components
import ExampleCard from '../ExampleCard';

// Data
import data from '../data/designBlocksData';

function DesignBlocks() {
  const renderData = data.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h4" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ image, name, detail }) => (
            <Grid item xs={12} md={4} sx={{ mb: 4 }} key={name}>
              <ExampleCard image={image} name={name} detail={detail} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: 'center', my: 6, mx: 'auto', px: 0.75 }}
        />
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
