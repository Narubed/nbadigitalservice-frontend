/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Main.css';
import { Grid, Container } from '@mui/material';

import bgImage from '../../assets/images/NBAService/main/1.jpg';
import imageKing from '../../assets/images/NBAService/main/2.jpg';
import buttonImage1 from '../../assets/images/NBAService/main/4.png';
import buttonImage2 from '../../assets/images/NBAService/main/3.png';

export default function index() {
  const onSetLocal = () => {
    sessionStorage.setItem('main', '3af42x5e3veg152xz485');
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
            <Link to="/pages/landing-pages/contact">
              <input
                className="button-main-rigth"
                type="image"
                id="image"
                src={buttonImage1}
                onClick={() => onSetLocal()}
              />
            </Link>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Link to="/">
              <input
                className="button-main-left"
                type="image"
                id="image"
                src={buttonImage2}
                onClick={() => onSetLocal()}
              />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Grid>
    // </div>
  );
}
