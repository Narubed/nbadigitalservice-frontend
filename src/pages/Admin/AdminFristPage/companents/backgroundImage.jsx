/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Button, Grid, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Swal from 'sweetalert2';
import axios from 'axios';

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}));

function backgroundImage(props) {
  const { isValues } = props;
  const [imgSrc, setImgSrc] = useState(null);
  const [file, setfile] = useState([]);

  const onChange = (file) => {
    const reader = new FileReader();
    const { files } = file.target;
    if (files && files.length !== 0) {
      setfile(files[0]);
      reader.onload = () => setImgSrc(reader.result);
      reader.readAsDataURL(files[0]);
    }
  };
  const headleSubmit = async () => {
    if (file.length === 0) {
      Swal.fire({
        icon: 'info',
        title: 'กรุณาตรวจสอบข้อมูลใหม่อีกครั้ง',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        title: 'Are you sure?',
        text: 'ต้องการเปลี่ยนข้อมูลนี้หรือไม่ !',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ตกลง',
        cancelButtonText: 'ยกเลิก'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const formData = new FormData();
          formData.append('image', file);
          const fileList = await axios.post(
            `${process.env.REACT_APP_WEB_SERVICE}/images/first-page`,
            formData
          );
          const { filename } = fileList.data;
          await axios.put(`${process.env.REACT_APP_WEB_SERVICE}/first-page/${isValues._id}`, {
            bgImage: filename
          });
          Swal.fire({
            icon: 'success',
            title: 'ยืนยันการทำรายการ',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    }
  };

  return (
    <div>
      <Grid item xs={12} sx={{ marginTop: 1.8, marginBottom: 3 }}>
        <br />

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box>
            <ButtonStyled
              component="label"
              variant="outlined"
              htmlFor="account-settings-upload-image"
              sx={{ color: '#000000' }}
            >
              เปลี่ยนรูปภาพ
              <input
                hidden
                type="file"
                onChange={onChange}
                accept="image/png, image/jpeg"
                id="account-settings-upload-image"
              />
            </ButtonStyled>

            <Typography variant="body2" sx={{ marginTop: 5 }}>
              แนะนำให้เป็นไฟล์ png หรือ jpeg ขนาด 1920x1080 เท่านั้น !!.
            </Typography>
          </Box>
        </Box>
      </Grid>

      {imgSrc ? (
        <img src={imgSrc} alt={imgSrc} />
      ) : (
        <img
          src={`${process.env.REACT_APP_WEB_SERVICE}/static/first-page/${isValues.bgImage}`}
          alt={`${process.env.REACT_APP_WEB_SERVICE}/static/first-page/${isValues.bgImage}`}
        />
      )}
      <Button variant="outlined" sx={{ color: 'purple', mt: 2 }} fullWidth onClick={headleSubmit}>
        ยืนยันการแก้ไข
      </Button>
    </div>
  );
}

export default backgroundImage;
