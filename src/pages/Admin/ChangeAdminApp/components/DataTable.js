/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';
import Swal from 'sweetalert2';
import Button from '@material-tailwind/react/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Input from '@material-tailwind/react/Input';
import TextField from '@mui/material/TextField';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function DataTable({ value }) {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openEditPassword, setEditPassword] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState(value.firstName);
  const [lastName, setLastName] = React.useState(value.lastName);
  const [email, setEmail] = React.useState(value.email);
  const deleteAdmin = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'คุณต้องการลบผู้ดูแลระบบคนนี้หรือไม่ !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ตกลง!',
      cancelButtonText: 'ยกเลิก'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`${process.env.REACT_APP_WEB_SERVICE}/users/${value._id}`);
        Swal.fire('Deleted!', 'คุณได้ลบผู้ดูแลระบบคนนี้เเล้ว.', 'success');
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    });
  };
  const submitEditAdmin = () => {
    const data = {
      firstName,
      lastName,
      email
    };
    setOpenEdit(false);
    Swal.fire({
      title: 'Are you sure?',
      text: 'คุณต้องการแก้ไขผู้ดูแลระบบคนนี้หรือไม่ !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ตกลง!',
      cancelButtonText: 'ยกเลิก'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.put(`${process.env.REACT_APP_WEB_SERVICE}/users/${value._id}`, data);
        Swal.fire('ยันยันข้อมูล!', 'คุณได้เเก้ไขผู้ดูแลระบบคนนี้เเล้ว.', 'success');
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    });
  };
  const submitPassword = () => {
    const data = {
      password
    };
    setEditPassword(false);
    Swal.fire({
      title: 'Are you sure?',
      text: 'คุณต้องการแก้ไขผู้ดูแลระบบคนนี้หรือไม่ !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ตกลง!',
      cancelButtonText: 'ยกเลิก'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.put(`${process.env.REACT_APP_WEB_SERVICE}/users/${value._id}`, data);
        Swal.fire('ยันยันข้อมูล!', 'คุณได้เเก้ไขผู้ดูแลระบบคนนี้เเล้ว.', 'success');
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    });
  };
  return (
    <>
      <tr className="text-center whitespace-nowrap">
        <td className="px-6 py-4 text-sm text-gray-500">{value.firstName}</td>
        <td className="px-6 py-4">
          <div className="text-sm text-gray-900">{value.lastName}</div>
        </td>
        <td className="px-6 py-4">
          <div className="text-sm text-gray-500">{value.email}</div>
        </td>
        <td className="px-6 py-4">
          <a href="#" className="inline-block text-center">
            <svg
              onClick={() => setOpenEdit(true)}
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </a>
        </td>
        <td className="px-6 py-4">
          <a href="#" className="inline-block text-center">
            <svg
              onClick={() => deleteAdmin()}
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </a>
        </td>
        <td className="px-6 py-4">
          <a href="#" className="inline-block text-center">
            <Icon icon="ic:twotone-published-with-changes" onClick={() => setEditPassword(true)} />
          </a>
        </td>
      </tr>
      <Dialog
        fullWidth="fullWidth"
        maxWidth="sm"
        open={openEditPassword}
        onClose={() => setEditPassword(false)}
      >
        <DialogTitle>กรุณากรอกรหัสผ่านใหม่</DialogTitle>
        <DialogContent>
          <DialogContentText>
            รหัสผ่านนี้จะถูกนำไปเเทนที่รหัสผ่านเดิมของท่านทันที !
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="green"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
            onClick={() => submitPassword()}
          >
            ยืนยันการเเก้ไข
          </Button>
          <Button
            color="pink"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
            onClick={() => setEditPassword(false)}
          >
            ยกเลิก
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        fullWidth="fullWidth"
        maxWidth="sm"
        open={openEdit}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpenEdit(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>คุณยืนยันจะเเก้ไขข้อมูลของ {value.firstName} หรือไม่ ? </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <br />
            <Input
              type="text"
              color="purple"
              size="lg"
              outline
              placeholder="ชื่อ"
              defaultValue={value.firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <Input
              type="text"
              color="purple"
              size="lg"
              outline
              placeholder="นามสกุล"
              defaultValue={value.lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <br />
            <Input
              type="text"
              color="purple"
              size="lg"
              outline
              placeholder="อีเมล"
              defaultValue={value.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="green"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
            onClick={() => submitEditAdmin()}
          >
            ยืนยันการเเก้ไข
          </Button>
          <Button
            color="pink"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
            onClick={() => setOpenEdit(false)}
          >
            ยกเลิก
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
