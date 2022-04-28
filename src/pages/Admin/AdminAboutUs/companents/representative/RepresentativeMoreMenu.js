/* eslint-disable camelcase */
import { Icon } from '@iconify/react';
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Select from 'react-select';
// material-tailwind
import '@material-tailwind/react/tailwind.css';
import Input from '@material-tailwind/react/Input';
// material
import {
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  // Select,
  Stack,
  Box,
  FormControl,
  InputLabel
} from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import Button from '@material-tailwind/react/Button';
// ----------------------------------------------------------------------
RepresentativeMoreMenu.propTypes = {
  _id: PropTypes.string,
  region_name: PropTypes.string,
  level_name: PropTypes.string,
  province_name: PropTypes.string,
  representative_name: PropTypes.string,
  representative_image: PropTypes.string,
  provinces: PropTypes.object
};

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function RepresentativeMoreMenu(props) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(async () => {

  // }, []);
  const dispatch = useDispatch();
  const {
    _id,
    region_name,
    level_name,
    province_name,
    representative_name,
    representative_image,
    provinces
  } = props;
  console.log(provinces);
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const deleteRepresentative = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'คุณต้องการลบโพสนี้หรือไม่ !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยัน!',
      cancelButtonText: 'ยกเลิก!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`${process.env.REACT_APP_WEB_SERVICE}/representatives/${_id}`);
        await axios.delete(
          `${process.env.REACT_APP_WEB_SERVICE}/deleteImage/${representative_image}`
        );
        Swal.fire({
          icon: 'success',
          title: 'คุณได้ลบโพสนี้เรียบร้อยเเล้ว',
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    });
  };
  const setDataEditData = () => {
    localStorage.setItem('_id', _id);
    localStorage.setItem('region_name', region_name);
    localStorage.setItem('level_name', level_name);
    localStorage.setItem('province_name', province_name);
    localStorage.setItem('province_name', province_name);
    localStorage.setItem('representative_name', representative_name);
    localStorage.setItem('representative_image', representative_image);
  };
  return (
    <>
      <>
        <IconButton ref={ref} onClick={() => setIsOpen(true)}>
          <Icon icon="ooui:ellipsis" />
        </IconButton>

        <Menu
          open={isOpen}
          anchorEl={ref.current}
          onClose={() => setIsOpen(false)}
          PaperProps={{
            sx: { width: 200, maxWidth: '100%' }
          }}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem sx={{ color: 'text.secondary' }}>
            <ListItemIcon>
              <Icon icon="ooui:ellipsis" />
            </ListItemIcon>
            <ListItemText
              primary="Delete"
              primaryTypographyProps={{ variant: 'body2' }}
              onClick={() => deleteRepresentative()}
            />
          </MenuItem>

          <MenuItem
            component={RouterLink}
            to="/pages/admin/admin-edit-representative"
            sx={{ color: 'text.secondary' }}
          >
            <ListItemIcon>
              <Icon icon="ooui:ellipsis" />
            </ListItemIcon>
            <ListItemText
              primary="Edit"
              primaryTypographyProps={{ variant: 'body2' }}
              onClick={() => setDataEditData()}
            />
          </MenuItem>
        </Menu>
      </>
    </>
  );
}
