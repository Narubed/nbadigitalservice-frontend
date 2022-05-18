/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/no-onchange */
import * as React from 'react';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useFormik, Form, FormikProvider } from 'formik';
import Select from 'react-select';
import Swal from 'sweetalert2';
import axios from 'axios';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import convert from 'htmr';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
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
  Slide,
  Grid
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { now } from 'lodash';

// companent
// ----------------------------------------------------------------------
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function AdminCreateProductApp() {
  const [open, setOpen] = useState(false);
  const [file, setfile] = useState([]);
  const [filepreview, setfilepreview] = useState(null);
  const [editorState, seteditorState] = useState(EditorState.createEmpty());
  const [valueEditor, setValueEditor] = useState('');
  const [titleNews, setTitleNews] = useState('');
  // const [subTitleNews, setSubTitleNews] = useState('');
  const [value, setValue] = useState(new Date());

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    //
  }, []);
  const RegisterSchema = Yup.object().shape({});
  const handleSubmits = async () => {
    const formdata = new FormData();
    formdata.append('avatar', file);
    formdata.append('news_title', titleNews);
    // formdata.append('news_subtitle', subTitleNews);
    formdata.append('news_editor', valueEditor);
    formdata.append('news_date', value);
    Swal.fire({
      title: 'Are you sure?',
      text: 'คุณต้องการเพิ่มข่าวสารหรือไม่ !',
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
        await axios.post(`${process.env.REACT_APP_WEB_SERVICE}/news`, formdata);
        setOpen(false);
        Swal.fire({
          icon: 'success',
          title: 'คุณได้เพิ่มข่าวสารเรียบร้อยเเล้ว',
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
      // region_name: '',
      // level_name: '',
      // province_name: '',
      // representative_text: '',
      // representative_image: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (e) => handleSubmits(e)
  });
  const handleInputChange = async (event) => {
    setfile(event.target.files[0] ? event.target.files[0] : []);
    setfilepreview(event.target.files[0] ? URL.createObjectURL(event.target.files[0]) : null);
  };
  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
  const onEditorStateChange = (req) => {
    setValueEditor(draftToHtml(convertToRaw(req.getCurrentContent())));
    // console.log(draftToHtml(convertToRaw(req.getCurrentContent())));
    seteditorState(req);
  };
  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            เพิ่มบล๊อกข่าวสาร
          </Typography>
        </Stack>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Input
                  type="text"
                  color="lightBlue"
                  size="lg"
                  outline={false}
                  placeholder="หัวข้อหลักของข่าวสารนี้ (Title)"
                  onChange={(e) => setTitleNews(e.target.value)}
                />
              </Stack>
              {/* <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Input
                  type="text"
                  color="lightBlue"
                  size="sm"
                  outline
                  placeholder="ข้อความแสดงหน้าข่าวสารหน้าแรกเท่านั้น (Sub-Title) จะไม่แสดงในหน้ารายระเอียดข่าวสาร"
                  onChange={(e) => setSubTitleNews(e.target.value)}
                />
              </Stack> */}
              <Grid item xs={12} lg={6} pr="65%">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <MobileDatePicker
                      label="วันที่ของข่าวสารนี้"
                      value={value}
                      onChange={(newValue) => {
                        console.log(newValue);
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </Grid>
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
              {filepreview !== null ? (
                <img
                  className="previewimg"
                  src={filepreview}
                  alt="UploadImage"
                  width="50%"
                  higth="50%"
                  style={{ margin: 'auto' }}
                />
              ) : null}
              <br />
              <Editor
                editorState={editorState}
                wrapperClassName=""
                editorClassName=""
                onEditorStateChange={onEditorStateChange}
              />
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
            </Stack>
          </Form>
        </FormikProvider>
      </Container>
      {/* {convert(valueEditor)} */}
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
