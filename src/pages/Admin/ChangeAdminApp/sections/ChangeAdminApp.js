import * as React from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Stack, Typography, Button } from '@mui/material';
// import Button from '@material-tailwind/react/Button';
import DataTable from '../components/DataTable';

export default function ChangeAdminApp() {
  const [User, setUser] = React.useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    const GETUsers = await axios.get(`${process.env.REACT_APP_WEB_SERVICE}/users`);
    console.log(GETUsers);
    setUser(GETUsers.data.data);
  }, []);
  return (
    <Grid
      item
      xs={12}
      md={12}
      // key={value._id}
      sx={{ ml: 'auto', mr: 'auto', pt: '1%', pl: '1%', pr: '1%' }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" gutterBottom>
          ผู้ดูแลทั้งหมดที่อยู่ในระบบ
        </Typography>
        <Button
          color="success"
          variant="contained"
          component={RouterLink}
          to="/pages/admin/create-admin"
          startIcon={<Icon icon="ooui:ellipsis" />}
        >
          เพิ่มผู้ดูแลใหม่
        </Button>
      </Stack>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="w-full">
            <div className="p-8 border-b border-gray-200 shadow">
              <table className="divide-y divide-gray-300" id="dataTable">
                <thead className="bg-black">
                  <tr>
                    <th className="px-6 py-2 text-xs text-white">ชื่อ</th>
                    <th className="px-6 py-2 text-xs text-white">นามสกุล</th>
                    <th className="px-6 py-2 text-xs text-white">Email</th>
                    <th className="px-6 py-2 text-xs text-white">Edit</th>
                    <th className="px-6 py-2 text-xs text-white">Delete</th>
                    <th className="px-6 py-2 text-xs text-white">เปลี่ยนรหัสผ่าน</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-300">
                  {User.map((value) => (
                    // eslint-disable-next-line react/jsx-key
                    <DataTable value={value} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}
