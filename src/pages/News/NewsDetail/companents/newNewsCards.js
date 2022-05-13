/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './newNewsCards.scss';
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@material-tailwind/react/Button';
import Grid from '@mui/material/Grid';
import Buttons from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import axios from 'axios';
import Small from '@material-tailwind/react/Small';
// image
import image1 from '../../../../assets/images/NBAService/NBA2.jpg';

export default function NewsCards({ showNews }) {
  console.log(showNews);
  const onClickDetail = (req, res) => {
    localStorage.setItem('news_id', req._id);
    window.location.reload();
  };

  return (
    <>
      <Card sx={{ maxWidth: '80%', mb: 2 }}>
        <CardMedia>
          <img
            src={
              showNews.length !== 0
                ? `${process.env.REACT_APP_DRIVE_SELECT_IMAGE}${showNews[0].news_image}`
                : null
            }
          />
          <div className="ribbon-wrapper">
            <div className="ribbon">NEW</div>
          </div>
        </CardMedia>
        <CardContent>
          <div className="new-newscard-text">
            {showNews.length !== 0 ? showNews[0].news_title : null}
          </div>
          <div className="new-newcard-date">
            {showNews.length !== 0
              ? dayjs(showNews[0].news_date).add(543, 'year').locale('th').format('D MMMM YYYY')
              : null}
          </div>
        </CardContent>
        <Button
          className=""
          color="purple"
          buttonType="link"
          size="regular"
          rounded
          block={false}
          iconOnly={false}
          ripple="dark"
          onClick={() => onClickDetail(showNews[0])}
        >
          อ่านเพิ่มเติ่ม
        </Button>
      </Card>
      <Card sx={{ maxWidth: '80%', mb: 2 }}>
        <CardMedia>
          <img
            src={
              showNews.length !== 0
                ? `${process.env.REACT_APP_DRIVE_SELECT_IMAGE}${showNews[1].news_image}`
                : null
            }
          />
          <div className="ribbon-wrapper">
            <div className="ribbon">NEW</div>
          </div>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            <div className="new-newscard-text">
              {showNews.length !== 0 ? showNews[1].news_title : null}
            </div>
            <div className="new-newcard-date">
              {showNews.length !== 0
                ? dayjs(showNews[1].news_date).add(543, 'year').locale('th').format('D MMMM YYYY')
                : null}
            </div>
          </Typography>
        </CardContent>
        <Button
          className=""
          color="purple"
          buttonType="link"
          size="regular"
          rounded
          block={false}
          iconOnly={false}
          ripple="dark"
          onClick={() => onClickDetail(showNews[1])}
        >
          อ่านเพิ่มเติ่ม
        </Button>
      </Card>
      <Card sx={{ maxWidth: '80%', mb: 0 }}>
        <CardMedia>
          <img
            src={
              showNews.length !== 0
                ? `${process.env.REACT_APP_DRIVE_SELECT_IMAGE}${showNews[2].news_image}`
                : null
            }
          />
          <div className="ribbon-wrapper">
            <div className="ribbon">NEW</div>
          </div>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            <div className="new-newscard-text">
              {showNews.length !== 0 ? showNews[2].news_title : null}
            </div>
            <div className="new-newcard-date">
              {showNews.length !== 0
                ? dayjs(showNews[2].news_date).add(543, 'year').locale('th').format('D MMMM YYYY')
                : null}
            </div>
          </Typography>
        </CardContent>
        <Button
          className=""
          color="purple"
          buttonType="link"
          size="regular"
          rounded
          block={false}
          iconOnly={false}
          ripple="dark"
          onClick={() => onClickDetail(showNews[2])}
        >
          อ่านเพิ่มเติ่ม
        </Button>
      </Card>
    </>
  );
}
NewsCards.propType = {
  showNews: PropTypes.array,
  news_title: PropTypes.string
};
