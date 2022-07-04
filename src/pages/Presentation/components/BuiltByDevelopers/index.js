/* eslint-disable jsx-a11y/iframe-has-title */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// Material Kit 2 React components
import MKBox from '../../../../components/MKBox';

function BuiltByDevelopers() {
  const bgImage =
    'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg';

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={3}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Container>
        <Grid container item xs={12} lg={12}>
          <iframe
            width="100%"
            height="520"
            src="https://www.youtube.com/embed/zbsgkdWrIZo?Version=3&loop=1&playlist=3ZGcaGhkCTI"
            // src="https://www.youtube.com/embed/3ZGcaGhkCTI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
