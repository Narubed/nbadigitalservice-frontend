import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Image from '@material-tailwind/react/Image';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';

import admin from '../../../../assets/images/NBAService/contect/21.png';
import account from '../../../../assets/images/NBAService/contect/22.png';
import graphics from '../../../../assets/images/NBAService/contect/23.png';
import IT from '../../../../assets/images/NBAService/contect/24.png';
import programmer from '../../../../assets/images/NBAService/contect/25.png';
import blogImage from '../../../../assets/images/NBAService/blog/blog1.png';

export default function BlogImage() {
  return (
    <>
      <Card sx={{ display: 'flex', alignItems: 'center', pb: 3, pt: 3 }}>
        <Image src={blogImage} rounded={false} raised={false} alt="Image" />
      </Card>
    </>
  );
}
