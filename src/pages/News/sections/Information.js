/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-key */
/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
import React from 'react';
import './Information.css';
import axios from 'axios';
import * as dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TablePagination from '@mui/material/TablePagination';
import Pagination from '@mui/material/Pagination';
// import Card from '@material-tailwind/react/Card';
// import Button from '@material-tailwind/react/Button';

// Material Kit 2 React components
import MKBox from '../../../components/MKBox';
// import MKBadge from "components/MKBadge";
// imatge
import BlogNews from '../conpanents/BlogNews';

function paginator(items, current_page, per_page_items) {
  const page = current_page || 1;
  const per_page = per_page_items || 2;
  const offset = (page - 1) * per_page;
  const paginatedItems = items.slice(offset).slice(0, per_page_items);
  const total_pages = Math.ceil(items.length / per_page);
  // console.log(total_pages, items.length, per_page);

  return {
    page,
    per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages,
    data: paginatedItems
  };
}

function DesignBlocks() {
  const [showNews, setNews] = React.useState([]);
  const [count, setcount] = React.useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    const GETNews = await axios.get(`${process.env.REACT_APP_WEB_SERVICE}/news`);
    const SortNews = GETNews.data.data.sort(
      (date1, date2) => new Date(date2.news_date) - new Date(date1.news_date)
    );
    setcount(Math.ceil(SortNews.length / 9));
    setNews(SortNews);
  }, []);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(paginator(showNews, value, 1).page);
  };
  const renderData = (
    <Grid container spacing={3} sx={{ mb: 10, mt: -10 }}>
      <a className="header-text-news">ข่าวประชาสัมพันธ์</a>
      <>
        <Grid item xs={12} lg={12}>
          <Grid container spacing={2}>
            {/* <Pagintions carrierDetails={showNews} /> */}
            {paginator(showNews, page, 9).data.map((value, index) => (
              <>
                <BlogNews news={value} />
              </>
            ))}

            {/* {showNews.map((value) => (
              <BlogNews news={value} />
            ))} */}
          </Grid>
        </Grid>
      </>
    </Grid>
  );
  return (
    <MKBox component="section" my={4} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: 'center', my: 6, mx: 'auto', px: 0.75 }}
        />
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={count}
          page={paginator(showNews, page, count).page}
          onChange={handleChange}
          color="secondary"
        />
      </div>
    </MKBox>
  );
}

export default DesignBlocks;
