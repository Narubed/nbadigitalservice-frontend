/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { filter } from 'lodash';
import { Icon } from '@iconify/react';
// import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
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
  Badge
} from '@mui/material';
import Image from '@material-tailwind/react/Image';
import { styled } from '@mui/material/styles';
import {
  RepresentativeListToolbar,
  RepresentativeListHead,
  RepresentativeMoreMenu
} from '../companents/representative';

import Scrollbar from '../companents/Scrollbar';
import SearchNotFound from '../companents/SearchNotFound';
import RepresentativeImage from '../companents/RepresentativeImage';

// ----------------------------------------------------------------------
const TABLE_HEAD = [
  { id: 'region_name', label: 'ชื่อศูนย์', alignRight: true },
  { id: 'level_name', label: 'ระดับศูนย์', alignRight: false },
  { id: 'province_name', label: 'ภูมิภาคของศูนย์', alignRight: false },
  { id: 'representative_name', label: 'จังหวัดของศูนย์', alignRight: false },
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
        _user.region_name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        _user.level_name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        _user.province_name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        _user.representative_name.toLowerCase().indexOf(query.toLowerCase()) !== -1
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
  const [Representative, setRepresentative] = useState([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  // eslint-disable-next-line camelcase
  const [selected_id, setSelected_id] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [provinces, setProvinces] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const getRepresentative = await axios.get(`${process.env.REACT_APP_WEB_SERVICE}/representatives
    `);
    setRepresentative(getRepresentative.data.data);
    const getApi = await axios.get(
      'https://codebee.co.th/labs/examples/autoprovince/json/provinces.json'
    );
    const valueOption = [];
    getApi.data.forEach((element) => {
      const data = {
        value: element.province_name,
        label: element.province_name
      };
      valueOption.push(data);
    });
    console.log(valueOption);
    setProvinces(valueOption);
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = Representative.map((n) => n.company_name);
      const newSelectedsid = Representative.map((n) => n.company_id);
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

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - Representative.length) : 0;

  // eslint-disable-next-line no-undef
  const filterRepresentative = applySortFilter(
    Representative,
    getComparator(order, orderBy),
    filterName
  );

  const isUserNotFound = filterRepresentative.length === 0;
  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            ศูนย์ทั้งหมดที่อยู่ในระบบ
          </Typography>
          <Button
            color="success"
            variant="contained"
            component={RouterLink}
            to="/pages/admin/admin-create-representative"
            startIcon={<Icon icon="ooui:ellipsis" />}
          >
            เพิ่มข้อมูลใหม่
          </Button>
        </Stack>
        <Card>
          <RepresentativeListToolbar
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
                <RepresentativeListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={Representative.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filterRepresentative
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const {
                        _id,
                        region_name,
                        level_name,
                        province_name,
                        representative_name,
                        representative_image
                      } = row;
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
                                <RepresentativeImage
                                  images={representative_image}
                                  Name={representative_name}
                                />
                              </StyledBadge>
                              <Typography variant="subtitle2" noWrap>
                                {level_name} {representative_name}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell align="left">{level_name}</TableCell>
                          <TableCell align="left">{region_name}</TableCell>
                          <TableCell align="left">{province_name}</TableCell>

                          <TableCell align="right">
                            <RepresentativeMoreMenu
                              provinces={provinces}
                              _id={_id}
                              region_name={region_name}
                              level_name={level_name}
                              province_name={province_name}
                              representative_name={representative_name}
                              representative_image={representative_image}
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
            count={Representative.length}
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
