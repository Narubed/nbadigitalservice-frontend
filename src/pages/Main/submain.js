/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './submain.css';
import { Grid, Container } from '@mui/material';
import { motion } from 'framer-motion/dist/framer-motion';

import bgImage from '../../assets/images/NBAService/main/submain/bgsub.jpg';
import buttonImage1 from '../../assets/images/NBAService/main/submain/web-jump_0.png';
import buttonImage2 from '../../assets/images/NBAService/main/submain/web-platform_0.png';

export default function index() {
  const onSetLocal = () => {
    sessionStorage.setItem('submain', '9asd48wd13sadcEAsDas3d1sd');
  };

  return (
    <>
      <Grid
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          height: '100vh',
          padding: 5,
          // background: 'none',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top'
        }}
      >
        {/* <Container> */}
        <Grid container item xs={12} lg={12} sx={{ mx: 'auto' }}>
          <Grid item xs={12} lg={6}>
            {/* <Link to="/pages/landing-pages/contact"> */}
            <a href="https://nba-platform.nbadigitalservice.com/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                <input
                  className="image-sunmain-rigth"
                  type="image"
                  id="image"
                  src={buttonImage2}
                  onClick={() => onSetLocal()}
                />
              </motion.div>
            </a>
          </Grid>
          <Grid item xs={12} lg={6}>
            <a href="https://www.jumpconnect.net/member/member_regis_info.php?sp_code=27982&qr_code=1">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                <input
                  className="image-sunmain-left"
                  type="image"
                  id="image"
                  src={buttonImage1}
                  onClick={() => onSetLocal()}
                />
              </motion.div>
            </a>
          </Grid>
        </Grid>
        {/* </Container> */}
      </Grid>
    </>
  );
}
