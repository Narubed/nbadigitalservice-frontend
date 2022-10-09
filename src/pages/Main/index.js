/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Main.css';
import { Grid, Container } from '@mui/material';

import bgImage from '../../assets/images/NBAService/main/วันพระราชสมภพสมเด็จย่า-1920X1080.png';
import imageKing from '../../assets/images/NBAService/main/วันพระราชสมภพสมเด็จย่า-1200x1200.png';
import buttonImage1 from '../../assets/images/NBAService/main/วันพระราชสมภพสมเด็จย่า-ปุ่ม-NBA-Platform.png';
import buttonImage2 from '../../assets/images/NBAService/main/วันพระราชสมภพสมเด็จย่า-ปุ่ม-NBA-DigitalWorld.png';

export default function index() {
  const onSetLocal = () => {
    sessionStorage.setItem('main', '3af42x5e3veg152xz48xdwaxzdws5');
  };
  const onSetTwoLocal = () => {
    sessionStorage.setItem('submain', '9asd48wd13sadcEAsDas3d1sd');
    sessionStorage.setItem('main', '3af42x5e3veg152xz48xdwaxzdws5');
  };
  return (
    // <div className="cComponent" style={divStyle}>
    <Grid
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        height: '100vh',
        padding: 5,
        backgroundPosition: 'top'
      }}
    >
      <img className="king-image" align="center" src={imageKing} />

      <Container>
        <Grid container item xs={12} lg={12} sx={{ mx: 'auto' }}>
          <Grid item xs={12} lg={6}>
            {/* <Link to="/pages/landing-pages/contact"> */}
            {/* <Link to="https://nba-platform.nbadigitalservice.com/"> */}
            <a href="https://nba-platform.nbadigitalservice.com/">
              <input
                className="button-main-rigth"
                type="image"
                id="image"
                src={buttonImage1}
                onClick={() => onSetLocal()}
              />
            </a>
            {/* </Link> */}
          </Grid>
          <Grid item xs={12} lg={6}>
            <Link to="/">
              <input
                className="button-main-left"
                type="image"
                id="image"
                src={buttonImage2}
                onClick={() => onSetTwoLocal()}
              />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Grid>
    // </div>
  );
}
