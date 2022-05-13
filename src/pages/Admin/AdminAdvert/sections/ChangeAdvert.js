/* eslint-disable no-nested-ternary */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/no-onchange */
import * as React from 'react';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import Button from '@material-tailwind/react/Button';
// material
import {
  Stack,
  TextField,
  Dialog,
  DialogContent,
  DialogContentText,
  Container,
  Typography,
  Slide
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
// ----------------------------------------------------------------------
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function ChangeAdvert() {
  const [open, setOpen] = useState(false);
  const [file, setfile] = useState([]);
  const [filepreview, setfilepreview] = useState(null);
  const [advert, setAdvert] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const GETAdvert = await axios.get(`${process.env.REACT_APP_WEB_SERVICE}/advert`);
    setAdvert(GETAdvert.data.data);
  }, []);
  const handleSubmits = async () => {
    console.log(file);
    const formdata = new FormData();
    formdata.append('avatar', file);
    Swal.fire({
      title: 'Are you sure?',
      text: 'คุณต้องการแก้ไขโฆษณาหรือไม่ !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยัน!',
      cancelButtonText: 'ยกเลิก!'
    }).then(async (result) => {
      if (file.length === 0) {
        Swal.fire(
          'เราคิดว่าคุณกรอกข้อมูลไม่ครบ?',
          'ลองเช็คที่ไฟล์รูปภาพของคุณอีกครั้ง?',
          'question'
        );
      } else if (result.isConfirmed) {
        setOpen(true);
        await axios.put(`${process.env.REACT_APP_WEB_SERVICE}/advert/${advert[0]._id}`, formdata);
        await axios.delete(
          `${process.env.REACT_APP_WEB_SERVICE}/deleteImage/${advert[0].advert_image}`
        );
        setOpen(false);
        Swal.fire({
          icon: 'success',
          title: 'คุณได้แก้ไขโฆษณาเรียบร้อยเเล้ว',
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    });
  };
  const handleInputChange = async (event) => {
    setfile(event.target.files[0] ? event.target.files[0] : []);
    setfilepreview(event.target.files[0] ? URL.createObjectURL(event.target.files[0]) : null);
  };
  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            เพิ่มบล๊อกข่าวสาร
          </Typography>
        </Stack>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              type="file"
              className="form-control"
              autoComplete="filemik"
              name="upload_file"
              onChange={handleInputChange}
            />
          </Stack>
          {filepreview !== null ? (
            <img className="previewimg" src={filepreview || 'null'} alt="UploadImage" />
          ) : advert.length !== 0 && advert[0].advert_image !== null ? (
            <img
              className="previewimg"
              src={`${process.env.REACT_APP_DRIVE_SELECT_IMAGE}${advert[0].advert_image}`}
              alt="UploadImage2"
            />
          ) : null}
          <br />
          {file.length !== 0 ? (
            <Button
              type="submit"
              color="deepPurple"
              buttonType="filled"
              size="lg"
              rounded={false}
              block
              iconOnly={false}
              ripple="light"
              onClick={() => handleSubmits()}
            >
              ยืนยันการแก้ไขข้อมูล
            </Button>
          ) : null}
        </Stack>
      </Container>
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
