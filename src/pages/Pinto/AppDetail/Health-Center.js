/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Card from '@mui/material/Card';
import '../pinto.scss';

import bgpinto from '../../../assets/images/NBAService/pinto/background/ศูนย์สุขภาพ.jpg';
import MKBox from '../../../components/MKBox';
import DefaultNavbar from '../../../examples/Navbars/DefaultNavbar';
import DefaultFooter from '../../../examples/Footers/DefaultFooter';
import routes from '../../../routes';
import footerRoutes from '../../../footer.routes';
import bgImage2 from '../../../assets/images/NBAService/background/buble.png';
import DownloadApp from '../DownloadApp';

export default function Messenger() {
  return (
    <div>
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
      <div>
        <img className="main-page-pinto" src={bgpinto} />
      </div>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -6,
          mb: 4,
          background: 'none',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          // backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backgroundImage: `url(${bgImage2})`,
          backdropFilter: 'saturate(200%) blur(30px)',
          boxShadow: ({ boxShadows: { xxl } }) => xxl
        }}
      >
        {/* <CardPinto /> */}
        ศูนย์สุขภาพ
        <DownloadApp />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </div>
  );
}
