/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './BlogNews.css';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import convert from 'htmr';
import * as dayjs from 'dayjs';
import 'dayjs/locale/th';

// material-tailwind
import Small from '@material-tailwind/react/Small';
// image
import Grid from '@mui/material/Grid';
import MKBox from '../../../components/MKBox';
import image1 from '../../../assets/images/NBAService/NBAExpress1.png';
import image2 from '../../../assets/images/NBAService/NBA.jpg';

export default function BlogNews({ news }) {
  return (
    <>
      <Grid item xs={12} md={4} sx={{ mb: { xs: 3, lg: 0 } }}>
        <Card sx={{ maxWidth: '100%' }} onClick={() => console.log('Click me')}>
          <div className="container">
            <img
              className="image"
              src={`${process.env.REACT_APP_DRIVE_SELECT_IMAGE}${news.news_image}`}
            />
          </div>
          {/* </MKBox> */}
          <CardContent sx={{ pt: 0, mt: 0 }}>
            <div className="news_title">
              <a href="#" onClick={() => console.log('clickme')}>
                {news.news_title}
              </a>
            </div>
            <div className="news_date">
              {dayjs(news.news_date).add(543, 'year').locale('th').format('D MMMM YYYY')}
            </div>
            {/* <Small color="lightBlue">{news.news_subtitle}</Small> */}
            <Typography variant="body2" color="text.secondary" component="div">
              {/* {`${news.news_subtitle.substring(0, 180)}....`}
              <a href="#">
                <Button size="small">Read more</Button>
              </a> */}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
BlogNews.propTypes = {
  news: PropTypes.object
};
