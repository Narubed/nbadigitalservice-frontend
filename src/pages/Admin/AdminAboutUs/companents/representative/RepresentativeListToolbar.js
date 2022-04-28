import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
  OutlinedInput,
  InputAdornment
} from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3)
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&.Mui-focused': { width: 320, boxShadow: theme.customShadows },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`
  }
}));

// ----------------------------------------------------------------------

CompanyListToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
  selected_id: PropTypes.array
};

// eslint-disable-next-line camelcase
export default function CompanyListToolbar({ numSelected, filterName, onFilterName, selected_id }) {
  const deleteRider = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'คุณต้องการลบบริษัทหรือไม่ !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยัน!',
      cancelButtonText: 'ยกเลิก!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        selected_id.map(
          async (value) =>
            // eslint-disable-next-line no-return-await
            await axios.delete(`${process.env.REACT_APP_WEB_BACKEND}/deleteCompany/${value}`)
        );
        // await axios.delete(`${process.env.REACT_APP_WEB_BACKEND}/deleteRider/${id}`);
        Swal.fire('Success!', 'คุณได้ลบบริษัทเรียบร้อยเเล้ว.', 'success');
        setTimeout(() => {
          window.location.reload(false);
        }, 1500);
      }
    });
  };
  return (
    <RootStyle
      sx={{
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter'
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <SearchStyle
          value={filterName}
          onChange={onFilterName}
          placeholder="Search Compamy..."
          startAdornment={
            <InputAdornment position="start">
              {/* <Box component={Icon} icon={searchFill} sx={{ color: 'text.disabled' }} /> */}
              <Box
                component={Icon}
                // icon={}
                sx={{ color: 'text.disabled' }}
              />
              <Icon icon="ooui:search" />
            </InputAdornment>
          }
        />
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          11
          <IconButton>
            <Icon onClick={() => deleteRider()} />
            {/* <Icon icon={trash2Fill} onClick={() => deleteRider()} /> */}
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <Icon icon="ooui:ellipsis" />
            {/* <Icon /> */}
            {/* <Icon icon={roundFilterList} /> */}
          </IconButton>
        </Tooltip>
      )}
    </RootStyle>
  );
}
