/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import './CardNews.css';
import axios from 'axios';
import convert from 'htmr';
import parse from 'html-react-parser';
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import Image from '@material-tailwind/react/Image';

export default function CardNews({ showNews }) {
  console.log(showNews);
  //   const ChangeHTMR = convert(news_editor);
  return (
    <>
      <img
        className="image-cardnews"
        src={`${process.env.REACT_APP_DRIVE_SELECT_IMAGE}${showNews.news_image}`}
      />
      <div className="header-text-cardnews">{showNews.news_title}</div>
      <div className="containernews1">
        <div className="news_date">
          วันที่ประชาสัมพันธ์{' '}
          {dayjs(showNews.news_date).add(543, 'year').locale('th').format('D MMMM YYYY')}
        </div>
      </div>
      <div className="main-text">{parse(showNews.news_editor)}</div>
    </>
  );
}

CardNews.propTypes = {
  showNews: PropTypes.string
};
