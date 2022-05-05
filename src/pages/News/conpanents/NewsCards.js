/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@material-tailwind/react/Button';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import axios from 'axios';
import Small from '@material-tailwind/react/Small';
// image
import image1 from '../../../assets/images/NBAService/NBA2.jpg';

export default function NewsCards({ showNews }) {
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
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            รีบจองด่วน” ก่อนเต็ม...มีจำนวนจำกัด จอง-จ่าย-จบ ศูนย์ภาค ครบครบ 1 ปี เอ็นบีเอ ดิจิตอล
            เวิลด์ “NBA DIGITAL WORLDS
          </Typography>
        </CardContent>
        <Button
          className=""
          color="lightBlue"
          buttonType="link"
          size="regular"
          rounded
          block={false}
          iconOnly={false}
          ripple="dark"
        >
          อ่านเพิ่มเติ่ม
        </Button>
      </Card>
      <Card sx={{ maxWidth: '80%', mb: 0 }}>
        <CardMedia>
          <img src={image1} style={{ padding: 'auto', margin: 'auto' }} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            รีบจองด่วน” ก่อนเต็ม...มีจำนวนจำกัด จอง-จ่าย-จบ ศูนย์ภาค ครบครบ 1 ปี เอ็นบีเอ ดิจิตอล
            เวิลด์ “NBA DIGITAL WORLDS
          </Typography>
        </CardContent>
        <Button
          className=""
          color="lightBlue"
          buttonType="link"
          size="regular"
          rounded
          block={false}
          iconOnly={false}
          ripple="dark"
        >
          อ่านเพิ่มเติ่ม
        </Button>
      </Card>
    </>
  );
}
NewsCards.propType = {
  showNews: PropTypes.array
};
