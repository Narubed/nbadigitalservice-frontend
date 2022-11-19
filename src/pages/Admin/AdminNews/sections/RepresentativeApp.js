/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { filter } from 'lodash';
import { Icon } from '@iconify/react';
// import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import * as dayjs from 'dayjs';
import 'dayjs/locale/th';
// material
import {
  Card,
  Table,
  Stack,
  Button,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  Badge,
  Grid
} from '@mui/material';
import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Image from '@material-tailwind/react/Image';
import { styled } from '@mui/material/styles';
import { NewsListToolbar, NewsListHead, NewsMoreMenu } from '../companents/representative';

import Scrollbar from '../companents/Scrollbar';
import SearchNotFound from '../companents/SearchNotFound';
import RepresentativeImage from '../companents/RepresentativeImage';

// ----------------------------------------------------------------------
const TABLE_HEAD = [
  { id: 'news_title', label: 'หัวข้อหลัก', alignRight: true },
  { id: 'news_date', label: 'วันที่ข่าวสาร', alignRight: false },
  { id: '' }
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_user) =>
        _user.news_title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        _user.news_date.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }

  return stabilizedThis.map((el) => el[0]);
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
}));

function RepresentativeApp() {
  // eslint-disable-next-line no-undef
  const [News, setNews] = useState([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  // eslint-disable-next-line camelcase
  const [selected_id, setSelected_id] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [provinces, setProvinces] = useState(new Date());

  const [value, setValue] = useState(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const getNews = await axios.get(`${process.env.REACT_APP_WEB_SERVICE}/news
    `);
    setNews(getNews.data.data);
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = News.map((n) => n.news_title);
      const newSelectedsid = News.map((n) => n._id);
      setSelected(newSelecteds);
      setSelected_id(newSelectedsid);
      return;
    }
    setSelected([]);
    setSelected_id([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - News.length) : 0;
  const filterDate =
    value !== null
      ? News.filter(
          (f) => dayjs(f.news_date).format('DD MM YYYY') === dayjs(value).format('DD MM YYYY')
        )
      : News;
  // eslint-disable-next-line no-undef
  const filterNews = applySortFilter(filterDate, getComparator(order, orderBy), filterName);

  const isUserNotFound = filterNews.length === 0;
  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            ข่าวสารทั้งหมดที่อยู่ในระบบ
          </Typography>
          <Button
            color="success"
            variant="contained"
            component={RouterLink}
            to="/pages/admin/create-news"
            startIcon={<Icon icon="ooui:ellipsis" />}
          >
            เพิ่มข้อมูลใหม่
          </Button>
        </Stack>

        {/* <Grid item xs={12} lg={6} pr="65%">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <MobileDatePicker
                label="ค้นหาตามวันที่"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </Grid> */}

        <Card>
          <NewsListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
            selected={selected}
            // eslint-disable-next-line camelcase
            selected_id={selected_id}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <NewsListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={News.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filterNews
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const { _id, news_title, news_image, news_date } = row;
                      const isItemSelected = selected.indexOf(_id) !== -1;

                      return (
                        <TableRow
                          hover
                          key={_id}
                          tabIndex={-1}
                          role="checkbox"
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          <TableCell component="th" scope="row" padding="none">
                            <Stack direction="row" alignItems="center" spacing={2}>
                              <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                              >
                                <RepresentativeImage images={news_image} Name={news_title} />
                              </StyledBadge>
                              <Typography variant="subtitle2" noWrap>
                                {news_title}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell align="left">
                            {dayjs(news_date).locale('th').format('DD MMMM, YYYY')}
                          </TableCell>

                          <TableCell align="right">
                            <NewsMoreMenu
                              provinces={provinces}
                              _id={_id}
                              news_title={news_title}
                              news_image={news_image}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50]}
            component="div"
            count={News.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </>
  );
}
export default RepresentativeApp;
