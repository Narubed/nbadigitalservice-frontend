/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Kit 2 React helper functions
import pxToRem from '../functions/pxToRem';

export default {
  defaultProps: {
    fontSize: 'inherit'
  },

  styleOverrides: {
    fontSizeInherit: {
      fontSize: 'inherit !important'
    },

    fontSizeSmall: {
      fontSize: `${pxToRem(20)} !important`
    },

    fontSizeLarge: {
      fontSize: `${pxToRem(36)} !important`
    }
  }
};
