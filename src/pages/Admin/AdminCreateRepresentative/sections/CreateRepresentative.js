/* eslint-disable jsx-a11y/no-onchange */
import * as React from 'react';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useFormik, Form, FormikProvider } from 'formik';
import Select from 'react-select';
import Swal from 'sweetalert2';
import axios from 'axios';

import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
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

// companent
// ----------------------------------------------------------------------
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function AdminCreateProductApp() {
  const [open, setOpen] = useState(false);
  const [file, setfile] = useState([]);
  const [filepreview, setfilepreview] = useState(null);
  const [provinces, setProvinces] = useState([]);
  const [regionName, setRegionName] = useState('ภาคเหนือ');
  const [level, setLevel] = useState('ศูนย์ตำบล');
  const [province, setProvince] = useState('');
  const [representativesName, setRepresentativesName] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
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

    setProvinces(valueOption);
  }, []);
  const RegisterSchema = Yup.object().shape({});
  const handleSubmits = async () => {
    const formdata = new FormData();
    formdata.append('avatar', file);
    formdata.append('region_name', regionName);
    formdata.append('level_name', level);
    formdata.append('province_name', province);
    formdata.append('representative_name', representativesName);
    Swal.fire({
      title: 'Are you sure?',
      text: 'คุณต้องการเพิ่มโพสหรือไม่ !',
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
        await axios.post(`${process.env.REACT_APP_WEB_SERVICE}/representatives`, formdata);
        setOpen(false);
        Swal.fire({
          icon: 'success',
          title: 'คุณได้เพิ่มโพสเรียบร้อยเเล้ว',
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    });
  };
  const formik = useFormik({
    initialValues: {
      region_name: '',
      level_name: '',
      province_name: '',
      representative_text: '',
      representative_image: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (e) => handleSubmits(e)
  });
  const handleInputChange = async (event) => {
    setfile(event.target.files[0] ? event.target.files[0] : []);
    setfilepreview(event.target.files[0] ? URL.createObjectURL(event.target.files[0]) : null);
  };
  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            เพิ่มศูนย์ใหม่
          </Typography>
        </Stack>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <div className="relative inline-block w-full text-gray-700">
                  <div className="text-base placeholder-gray-600">ภูมิภาคของศูนย์</div>
                  <select
                    className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
                    placeholder="Regular input"
                    defaultValue="ภาคเหนือ"
                    onChange={(e) => setRegionName(e.target.value)}
                  >
                    <option key="1" value="ภาคเหนือ">
                      ภาคเหนือ
                    </option>
                    <option key="2" value="ภาคกลาง">
                      ภาคกลาง
                    </option>
                    <option key="3" value="ภาคอีสาน">
                      ภาคอีสาน
                    </option>
                    <option key="4" value="ภาคใต้">
                      ภาคใต้
                    </option>
                  </select>
                </div>
                <div className="relative inline-block w-full text-gray-700">
                  <div className="text-base placeholder-gray-600">ระดับของศูนย์</div>
                  <select
                    className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
                    placeholder="Regular input"
                    defaultValue="ศูนย์ตำบล"
                    onChange={(e) => setLevel(e.target.value)}
                  >
                    <option key="1" value="ศูนย์ตำบล">
                      ศูนย์ตำบล
                    </option>
                    <option key="2" value="ศูนย์อำเภอ">
                      ศูนย์อำเภอ
                    </option>
                    <option key="3" value="ศูนย์จังหวัด">
                      ศูนย์จังหวัด
                    </option>
                  </select>
                </div>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <div className="w-full h-10 pl-1 pr-1 text-base placeholder-gray-600 rounded-lg appearance-none focus:shadow-outline">
                  <div className="text-base placeholder-gray-600">ค้นหาจังหวัด</div>
                  <Select
                    options={provinces}
                    onChange={(e) => setProvince(e.value)}
                    // defaultValue={{ label: 'ลพบุรี   ', value: 'ลพบุรี   ' }}
                  />
                </div>
              </Stack>
              <br />
              <Input
                type="text"
                color="lightBlue"
                size="lg"
                outline={false}
                placeholder="ชื่อศูนย์ที่เปิด"
                onChange={(e) => setRepresentativesName(e.target.value)}
              />
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  type="file"
                  className="form-control"
                  autoComplete="filemik"
                  name="upload_file"
                  onChange={handleInputChange}
                  error={Boolean(touched.file && errors.file)}
                  helperText={touched.file && errors.file}
                />
              </Stack>
              <Button
                type="submit"
                color="deepPurple"
                buttonType="filled"
                size="lg"
                rounded={false}
                block
                iconOnly={false}
                ripple="light"
              >
                ยืนยันการเพิ่มข้อมูล
              </Button>
              {filepreview !== null ? (
                <img className="previewimg" src={filepreview} alt="UploadImage" />
              ) : null}
            </Stack>
          </Form>
        </FormikProvider>
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
