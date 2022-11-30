/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Button, Grid, Box, Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Swal from 'sweetalert2';
import axios from 'axios';

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}));

function button1(props) {
  const { isValues } = props;
  const [imgSrc, setimgSrc] = useState(null);
  const [fileMain, setfileMain] = useState([]);
  const [isWidth, setWidth] = useState('');

  useEffect(() => {
    if (isValues) {
      setWidth(isValues.button2_width);
    }
  }, [isValues]);

  const onChangeMain = (file) => {
    const reader = new FileReader();
    const { files } = file.target;
    if (files && files.length !== 0) {
      setfileMain(files[0]);
      reader.onload = () => setimgSrc(reader.result);
      reader.readAsDataURL(files[0]);
    }
  };
  const headleSubmit = async () => {
    if (fileMain.length === 0) {
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
          formData.append('image', fileMain);
          await axios.put(`${process.env.REACT_APP_WEB_SERVICE}/first-page/${isValues._id}`, {
            button2_width: isWidth
          });
          Swal.fire({
            icon: 'success',
            title: 'ยืนยันการทำรายการ',
            showConfirmButton: false,
            timer: 1500
          });
        }
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
          formData.append('image', fileMain);
          const fileList = await axios.post(
            `${process.env.REACT_APP_WEB_SERVICE}/images/first-page`,
            formData
          );
          const { filename } = fileList.data;
          await axios.put(`${process.env.REACT_APP_WEB_SERVICE}/first-page/${isValues._id}`, {
            button2: filename,
            button2_width: isWidth
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
          <Box sx={{ width: '100%' }}>
            <ButtonStyled
              component="label"
              variant="outlined"
              htmlFor="button2"
              sx={{ color: '#000000' }}
            >
              เปลี่ยนรูปภาพ
              <input
                hidden
                type="file"
                onChange={onChangeMain}
                accept="image/png, image/jpeg"
                id="button2"
              />
            </ButtonStyled>
            <div style={{ marginTop: 10, width: '100%', display: 'flex' }}>
              <TextField
                value={isWidth}
                onChange={(e) => setWidth(e.target.value)}
                fullWidth
                id="outlined-basic"
                label="กรอกความกว้างของรูปตามที่ต้องการ"
                variant="outlined"
              />
              vh.
            </div>

            <Typography variant="body2" sx={{ marginTop: 2 }}>
              แนะนำให้เป็นไฟล์ png หรือ jpeg
            </Typography>
          </Box>
        </Box>
      </Grid>

      {imgSrc ? (
        <img src={imgSrc} alt={imgSrc} />
      ) : (
        <img
          src={`${process.env.REACT_APP_WEB_SERVICE}/static/first-page/${isValues.button2}`}
          alt={`${process.env.REACT_APP_WEB_SERVICE}/static/first-page/${isValues.button2}`}
        />
      )}
      <Button variant="outlined" sx={{ color: 'purple', mt: 2 }} fullWidth onClick={headleSubmit}>
        ยืนยันการแก้ไข
      </Button>
    </div>
  );
}

export default button1;
