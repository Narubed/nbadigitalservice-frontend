/* eslint-disable jsx-a11y/alt-text */
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

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Material Kit 2 React components
import MKBox from '../../../components/MKBox';
import MKTypography from '../../../components/MKTypography';
import images from '../../../assets/images/NBAService/footer/BGnba4.jpg';

function ImageFooter() {
  return (
    <MKBox component="footer">
      <img src={images} />
      <Grid item xs={12} sx={{ textAlign: 'center', my: 3 }}>
        NBA Digital Service Center
      </Grid>
    </MKBox>
  );
}

export default ImageFooter;
