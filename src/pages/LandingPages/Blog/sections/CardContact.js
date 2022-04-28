import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';

import admin from '../../../../assets/images/NBAService/contect/21.png';
import account from '../../../../assets/images/NBAService/contect/22.png';
import graphics from '../../../../assets/images/NBAService/contect/23.png';
import IT from '../../../../assets/images/NBAService/contect/24.png';
import programmer from '../../../../assets/images/NBAService/contect/25.png';

export default function CardContact() {
  return (
    <>
      <Card sx={{ display: 'flex', alignItems: 'center', pb: 3, pt: 3 }}>
        <Typography component="div" variant="h5">
          ติดต่อสอบถามด่วน
        </Typography>
        <br />
        <Card sx={{ display: 'flex' }}>
          <a href="tel:0800000000">
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  แอดมิน
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                  sx={{ pt: 1, display: 'flex' }}
                >
                  <Icon icon="flat-color-icons:callback" width="24" height="24" /> &nbsp;
                  080-000-0000
                </Typography>
              </CardContent>
              <CardMedia component="img" sx={{ width: 100 }} image={admin} alt="admin" />
            </Box>
          </a>
        </Card>
        <br />
        <Card sx={{ display: 'flex' }}>
          <a href="tel:0800000000">
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  บัญชี
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                  sx={{ pt: 1, display: 'flex' }}
                >
                  <Icon icon="flat-color-icons:callback" width="24" height="24" /> &nbsp;
                  080-000-0000
                </Typography>
              </CardContent>
              <CardMedia component="img" sx={{ width: 100 }} image={account} alt="account" />
            </Box>
          </a>
        </Card>
        <br />
        <Card sx={{ display: 'flex' }}>
          <a href="tel:0800000000">
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  กราฟิก
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                  sx={{ pt: 1, display: 'flex' }}
                >
                  <Icon icon="flat-color-icons:callback" width="24" height="24" /> &nbsp;
                  080-000-0000
                </Typography>
              </CardContent>
              <CardMedia component="img" sx={{ width: 100 }} image={graphics} alt="graphics" />
            </Box>
          </a>
        </Card>
        <br />
        <Card sx={{ display: 'flex' }}>
          <a href="tel:0800000000">
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  ไอที
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                  sx={{ pt: 1, display: 'flex' }}
                >
                  <Icon icon="flat-color-icons:callback" width="24" height="24" /> &nbsp;
                  080-000-0000
                </Typography>
              </CardContent>
              <CardMedia component="img" sx={{ width: 100 }} image={IT} alt="IT" />
            </Box>
          </a>
        </Card>
        <br />
        <Card sx={{ display: 'flex' }}>
          <a href="tel:0800000000">
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  โปรเเกรมเมอร์
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                  sx={{ pt: 1, display: 'flex' }}
                >
                  <Icon icon="flat-color-icons:callback" width="24" height="24" /> &nbsp;
                  080-000-0000
                </Typography>
              </CardContent>
              <CardMedia component="img" sx={{ width: 100 }} image={programmer} alt="programmer" />
            </Box>
          </a>
        </Card>
      </Card>
    </>
  );
}
