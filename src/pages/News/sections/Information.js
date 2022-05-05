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

// import Card from '@material-tailwind/react/Card';
// import Button from '@material-tailwind/react/Button';

// Material Kit 2 React components
import MKBox from '../../../components/MKBox';
// import MKBadge from "components/MKBadge";
import MKTypography from '../../../components/MKTypography';
// imatge
import NewsCards from '../conpanents/NewsCards';
import BlogNews from '../conpanents/BlogNews';

function DesignBlocks() {
  const [showNews, setNews] = React.useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    const GETNews = await axios.get(`${process.env.REACT_APP_WEB_SERVICE}/news`);
    const SortNews = GETNews.data.data.sort(
      (date1, date2) => new Date(date2.news_date) - new Date(date1.news_date)
    );
    setNews(SortNews);
  }, []);
  const renderData = (
    <Grid container spacing={3} sx={{ mb: 10, mt: -10 }}>
      <a className="header-text-news">ข่าวประชาสัมพันธ์</a>
      <>
        <Grid item xs={12} lg={12}>
          <Grid container spacing={2}>
            {showNews.map((value) => (
              <BlogNews news={value} />
            ))}
          </Grid>
        </Grid>
        {/* <Grid item xs={12} lg={3}>
          <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
            <NewsCards showNews={showNews} />
          </MKBox>
        </Grid> */}
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
    </MKBox>
  );
}

export default DesignBlocks;
