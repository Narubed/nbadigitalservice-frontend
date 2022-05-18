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
import Image from '@material-tailwind/react/Image';
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
  const [regionName, setRegionName] = useState(localStorage.getItem('region_name'));
  const [level, setLevel] = useState(localStorage.getItem('level_name'));
  const [province, setProvince] = useState(localStorage.getItem('province_name'));
  const [representativesName, setRepresentativesName] = useState(
    localStorage.getItem('representative_name')
  );

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
    const data = {
      region_name: regionName,
      level_name: level,
      province_name: province,
      representative_name: representativesName
    };
    console.log(data);

    const formdata = new FormData();
    formdata.append('avatar', file);
    formdata.append('region_name', regionName);
    formdata.append('level_name', level);
    formdata.append('province_name', province);
    formdata.append('representative_name', representativesName);

    Swal.fire({
      title: 'Are you sure?',
      text: 'คุณต้องการแก้ไขโพสหรือไม่ !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยัน!',
      cancelButtonText: 'ยกเลิก!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (file.length === 0) {
          setOpen(true);
          await axios.put(
            `${process.env.REACT_APP_WEB_SERVICE}/representatives/${localStorage.getItem('_id')}`,
            data
          );
          setOpen(false);
          Swal.fire({
            icon: 'success',
            title: 'คุณได้แก้ไขโพสเรียบร้อยเเล้ว',
            showConfirmButton: false,
            timer: 1500
          });
          setTimeout(() => {
            window.localStorage.clear();
            window.history.back();
          }, 1500);
        } else {
          setOpen(true);
          await axios.delete(
            `${process.env.REACT_APP_WEB_SERVICE}/deleteImage/${localStorage.getItem(
              'representative_image'
            )}`
          );
          await axios.put(
            `${process.env.REACT_APP_WEB_SERVICE}/representatives/${localStorage.getItem('_id')}`,
            formdata
          );
          setOpen(false);
          Swal.fire({
            icon: 'success',
            title: 'คุณได้แก้ไขโพสเรียบร้อยเเล้ว',
            showConfirmButton: false,
            timer: 1500
          });
          setTimeout(() => {
            window.localStorage.clear();
            window.history.back();
          }, 1500);
        }
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
  const optionsRegion = [
    { label: 'ภาคเหนือ', value: 'ภาคเหนือ' },
    { label: 'ภาคตะวันออกเฉียงเหนือ', value: 'ภาคตะวันออกเฉียงเหนือ' },
    { label: 'ภาคตะวันตก', value: 'ภาคตะวันตก' },
    { label: 'ภาคกลาง', value: 'ภาคกลาง' },
    { label: 'ภาคตะวันออก', value: 'ภาคตะวันออก' },
    { label: 'ภาคใต้', value: 'ภาคใต้' }
  ];
  const optionsLevel = [
    { label: 'ศูนย์ตำบล', value: 'ศูนย์ตำบล' },
    { label: 'ศูนย์อำเภอ', value: 'ศูนย์อำเภอ' },
    { label: 'ศูนย์จังหวัด', value: 'ศูนย์จังหวัด' }
  ];
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
                <div className="w-full h-10 pl-1 pr-1 text-base placeholder-gray-600 rounded-lg appearance-none focus:shadow-outline">
                  <div className="text-base placeholder-gray-600">ภูมิภาคของศูนย์</div>
                  <Select
                    options={optionsRegion}
                    onChange={(e) => setRegionName(e.value)}
                    defaultValue={{
                      label: localStorage.getItem('region_name'),
                      value: localStorage.getItem('region_name')
                    }}
                  />
                </div>
                <div className="w-full h-10 pl-1 pr-1 text-base placeholder-gray-600 rounded-lg appearance-none focus:shadow-outline">
                  <div className="text-base placeholder-gray-600">ระดับของศูนย์</div>
                  <Select
                    options={optionsLevel}
                    onChange={(e) => setLevel(e.value)}
                    defaultValue={{
                      label: localStorage.getItem('level_name'),
                      value: localStorage.getItem('level_name')
                    }}
                  />
                </div>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <div className="w-full h-10 pl-1 pr-1 text-base placeholder-gray-600 rounded-lg appearance-none focus:shadow-outline">
                  <div className="text-base placeholder-gray-600">ค้นหาจังหวัด</div>
                  <Select
                    options={provinces}
                    onChange={(e) => setProvince(e.value)}
                    defaultValue={{
                      label: localStorage.getItem('province_name'),
                      value: localStorage.getItem('province_name')
                    }}
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
                defaultValue={localStorage.getItem('representative_name')}
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
              ) : (
                <Image
                  src={`${process.env.REACT_APP_DRIVE_SELECT_IMAGE}${localStorage.getItem(
                    'representative_image'
                  )}`}
                  alt="Rounded Image"
                />
              )}
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
