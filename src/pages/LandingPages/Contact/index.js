/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */

import Card from '@mui/material/Card';
// Material Kit 2 React components
import MKBox from '../../../components/MKBox';

// Material Kit 2 React examples
import DefaultNavbar from '../../../examples/Navbars/DefaultNavbar';

// Author page sections
import Profile from './sections/Profile';
import Footer from './sections/Footer';
import ContactBox from './sections/ContactBox';
import DefaultFooter from '../../../examples/Footers/DefaultFooter';

// Routes
import routes from '../../../routes';
import footerRoutes from '../../../footer.routes';
// Images
// import bgImage from '../../../assets/images/city-profile.jpg';
// import bgImage from '../../../assets/images/NBAService/background/background-purple2.jpg';
import bgImage from '../../../assets/images/NBAService/background/BGPages.jpg';
import bgImageBuble from '../../../assets/images/NBAService/background/buble.png';

function Author() {
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
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            background: 'none',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0),
                rgba(gradients.dark.state, 0)
              )}, url(${bgImage})`
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            background: 'none',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundImage: `url(${bgImageBuble})`,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: 'saturate(200%) blur(30px)',
            boxShadow: ({ boxShadows: { xxl } }) => xxl
          }}
        >
          <div className="background-effect-wrapper">
            <div className="background-effect kenBurnsToRight">
              <div className="particle-effect snowfall" />
            </div>
          </div>
          <Profile />
          <ContactBox />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.7539595342723!2d98.96149151538117!3d18.719830367934307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da2ffeb7148697%3A0xe6e373b71e42e954!2sNBA%20Digital%20Business%20Center!5e0!3m2!1sth!2sth!4v1650272246661!5m2!1sth!2sth"
            width="100%"
            height="600"
            // style="border:0;"
            allowFullScreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          />
        </Card>
        {/* <Footer /> */}
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </MKBox>
    </>
  );
}

export default Author;
