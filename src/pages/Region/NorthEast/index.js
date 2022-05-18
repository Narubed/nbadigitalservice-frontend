import Card from '@mui/material/Card';
import MKBox from '../../../components/MKBox';

// Material Kit 2 React examples
import DefaultNavbar from '../../../examples/Navbars/DefaultNavbar';
import DefaultFooter from '../../../examples/Footers/DefaultFooter';
// companents
import DesignBlocks from './sections/DesignBlocks';
// Routes
import routes from '../../../routes';
import footerRoutes from '../../../footer.routes';

// Image

function ContactUs() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: 'external',
          route: '/pages/landing-pages/contact',
          label: 'ติดต่อเรา',
          color: 'info'
        }}
        sticky
      />
      <Card
        sx={{
          p: 4,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: 'saturate(200%) blur(30px)',
          boxShadow: ({ boxShadows: { xxl } }) => xxl
        }}
      >
        <br />
        <br />
        <DesignBlocks />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
