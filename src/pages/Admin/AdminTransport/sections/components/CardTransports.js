/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import H5 from '@material-tailwind/react/Heading5';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';

import Button from '@material-tailwind/react/Button';
import {
  Stack,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import CircularProgress from '@mui/material/CircularProgress';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

function Transports({ value }) {
  const [open, setOpen] = React.useState(false);
  const [file, setfile] = useState([]);
  const [filepreview, setfilepreview] = useState(null);

  const handleInputChange = async (event) => {
    setfile(event.target.files[0] ? event.target.files[0] : []);
    setfilepreview(event.target.files[0] ? URL.createObjectURL(event.target.files[0]) : null);
  };
  const handleSubmit = async () => {
    console.log(value);
    if (file.length !== 0) {
      const formdata = new FormData();
      // formdata.append('_id', AnnounceAdverts._id);
      formdata.append('avatar', file);
      //   const formdata = {
      //     avatar: file
      //   };
      Swal.fire({
        title: 'คุณต้องการบันทึกรูปนี้หรือไม่ ?',
        text: `หลังจากคุณบันทึกภาพที่แสดงหน้าขนส่ง ${value.transport_name} จะเปลี่ยนเป็นภาพนี้ทันที !`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ยืนยันการเปลี่ยนแปลงภาพ!',
        cancelButtonText: 'ยกเลิกการเปลี่ยนแปลง!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          setOpen(true);
          await axios.put(`${process.env.REACT_APP_WEB_SERVICE}/transports/${value._id}`, formdata);
          setOpen(false);
          Swal.fire({
            position: '',
            icon: 'success',
            title: `คุณได้ทำการยืนยันการเปลี่ยนภาพขนส่ง${value.transport_name}เเล้ว `,
            showConfirmButton: false,
            timer: 1500
          });

          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
      });
    } else {
      Swal.fire('คุณลืมเพิ่มรูปภาพ ?', 'กรุณาเลือกไฟล์ภาพสำหรับแสดงหน้าของผู้ใช้ด้วย?', 'question');
    }
  };

  return (
    <>
      <Card>
        <CardHeader color="purple" size="s">
          <H5 color="white">{value.transport_name}</H5>
        </CardHeader>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <TextField
            type="file"
            className="form-control"
            autoComplete="filemik"
            name="upload_file"
            onChange={handleInputChange}
          />
        </Stack>
        <br />
        <CardBody>
          {filepreview !== null ? (
            <img className="previewimg" src={filepreview || 'null'} alt="UploadImage" />
          ) : value && value.transport_image !== null ? (
            <img
              className="previewimg"
              src={`${process.env.REACT_APP_DRIVE_SELECT_IMAGE}${value.transport_image}`}
              alt="UploadImage"
            />
          ) : null}
        </CardBody>
        <CardFooter>
          {filepreview !== null ? (
            <Button
              color="indigo"
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              iconOnly={false}
              ripple="light"
              onClick={() => handleSubmit()}
            >
              ยืนยันการแก้ไข
            </Button>
          ) : null}
        </CardFooter>
      </Card>
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

export default Transports;
