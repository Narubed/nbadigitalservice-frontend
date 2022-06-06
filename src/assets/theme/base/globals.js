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

// Material Kit 2 React Base Styles
import { borderRadius } from '@mui/system';
import borders from './borders';
import colors from './colors';

const { info, dark } = colors;

export default {
  html: {
    scrollBehavior: 'smooth',
    '&::-webkit-scrollbar': {
      width: '0.8em'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(102,51,153,1)',
      webkitBoxShadow: 'inset 0 0 6px rgba(102,51,153,1.00)',
      borderRadius: '10px'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(102,51,153,1)',
      outline: '1px solid slategrey',
      borderRadius: '10px'
    }
  },
  '*, *::before, *::after': {
    margin: 0,
    padding: 0
  },
  'a, a:link, a:visited': {
    textDecoration: 'none !important'
  },
  'a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited': {
    color: `${dark.main} !important`,
    transition: 'color 150ms ease-in !important'
  },
  'a.link:hover, .link:hover, a.link:focus, .link:focus': {
    color: `${info.main} !important`
  }
};
