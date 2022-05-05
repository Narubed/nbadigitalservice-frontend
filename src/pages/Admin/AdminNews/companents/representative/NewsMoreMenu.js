/* eslint-disable camelcase */
import { Icon } from '@iconify/react';
import React, { useRef, useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// material-tailwind
import '@material-tailwind/react/tailwind.css';
// material
import { IconButton, Slide, Dialog, DialogContent, DialogContentText } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import CircularProgress from '@mui/material/CircularProgress';
// ----------------------------------------------------------------------
RepresentativeMoreMenu.propTypes = {
  _id: PropTypes.string,
  news_image: PropTypes.string
};
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function RepresentativeMoreMenu(props) {
  const [open, setOpen] = useState(false);
  const { _id, news_image } = props;
  const ref = useRef(null);

  const deleteRepresentative = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'คุณต้องการลบข่าวสารนี้หรือไม่ !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยัน!',
      cancelButtonText: 'ยกเลิก!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        setOpen(true);
        await axios.delete(`${process.env.REACT_APP_WEB_SERVICE}/news/${_id}`);
        await axios.delete(`${process.env.REACT_APP_WEB_SERVICE}/deleteImage/${news_image}`);
        setOpen(false);
        Swal.fire({
          icon: 'success',
          title: 'คุณได้ลบข่าวสารนี้เรียบร้อยเเล้ว',
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    });
  };
  return (
    <>
      <>
        <IconButton ref={ref} onClick={() => deleteRepresentative()}>
          <Icon icon="fluent:delete-20-filled" />
        </IconButton>
      </>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <CircularProgress color="secondary" />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}
