/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from 'react-router-dom';

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';

import './footer.scss';

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import bgImage2 from '../../../assets/images/NBAService/background/background-purple2.jpg';
// Material Kit 2 React components
import MKBox from '../../../components/MKBox';
import MKTypography from '../../../components/MKTypography';

function DefaultFooter({ content }) {
  const { brand, socials, menus, copyright } = content;

  return (
    <MKBox component="footer">
      {/* <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -9,
          mb: 4,
          background: 'none',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          // backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backgroundImage: `url(${bgImage2})`,
          backdropFilter: 'saturate(200%) blur(30px)',
          boxShadow: '2px 5px 5px 5px'
        }}
      > */}
      <div
        style={{
          paddingTop: '40px',
          marginTop: '-80px',
          background: 'none',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundImage: `url(${bgImage2})`
        }}
      >
        <Grid container spacing={1} sx={{ m: 'auto' }}>
          <Grid item xs={12} md={3} sx={{ m: 'auto', mb: 3 }}>
            <MKBox textAlign="center">
              <Link to={brand.route}>
                <MKBox
                  component="img"
                  src={brand.image}
                  alt={brand.name}
                  maxWidth="6rem"
                  mb={2}
                  m="auto"
                />
              </Link>
              <div className="content-nbadigitalservice">
                <MKTypography variant="h6" mt="18px" textAlign="center">
                  <div style={{ margin: 'auto' }}>
                    <h2> {brand.name}</h2>
                    <h2> {brand.name}</h2>
                  </div>
                </MKTypography>
              </div>
            </MKBox>
          </Grid>
          {menus.map(({ name: title, items }) => (
            <Grid key={title} item xs={6} md={2} sx={{ mb: 3 }}>
              <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
              >
                <div className="area-title-footer">{title}</div>
              </MKTypography>
              <MKBox component="ul" p={0} m={0} sx={{ listStyle: 'none' }}>
                {items.map(({ name, route, href }) => (
                  <MKBox key={name} component="li" p={0} m={0} lineHeight={1.25}>
                    {href ? (
                      <MKTypography
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        <div className="text-footer-nbadigital"> {name}</div>
                      </MKTypography>
                    ) : (
                      <MKTypography
                        component={Link}
                        to={route}
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        <div className="text-footer-nbadigital"> {name}</div>
                      </MKTypography>
                    )}
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}
          <Grid item xs={12} sx={{ textAlign: 'center', my: 3 }}>
            <div style={{ color: '#fff', fontSize: '12px' }}>NBA Digital Service © 2022</div>
          </Grid>
        </Grid>
        {/* </Card> */}
      </div>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired
};

export default DefaultFooter;
