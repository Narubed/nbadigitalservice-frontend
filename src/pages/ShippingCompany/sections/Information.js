/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import './style.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from 'framer-motion/dist/framer-motion';
// import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';
import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
// Material Kit 2 React components
import MKBox from '../../../components/MKBox';

// Material Kit 2 React examples
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import Ninjavan from '../../../assets/images/NBAService/parcel/Ninjavan2.png';
import BestExpress from '../../../assets/images/NBAService/parcel/Best2.png';
import DHL from '../../../assets/images/NBAService/parcel/DHL2.png';
import EMS from '../../../assets/images/NBAService/parcel/EMS2.png';
import Flash from '../../../assets/images/NBAService/parcel/Flash2.png';
import Kerry from '../../../assets/images/NBAService/parcel/Kerry2.png';
import Lazada from '../../../assets/images/NBAService/parcel/Lazada2.png';
import SCG from '../../../assets/images/NBAService/parcel/SCG2.png';
import SCGCool from '../../../assets/images/NBAService/parcel/SCGCool2.png';

const data = [
  {
    link: 'https://www.thailandpost.co.th/',
    name: 'บริษัท ไปรษณีย์ไทย จำกัด (ปณท)',
    image: EMS
  },
  {
    link: 'https://th.kerryexpress.com/th/home',
    name: 'บริษัท เคอรี่ เอ็กซ์เพรส จำกัด (มหาชน)',
    image: Kerry
  },
  {
    link: 'https://www.flashexpress.co.th/',
    name: 'บริษัท แฟลช เอ็กซ์เพรส จำกัด',
    image: Flash
  },
  {
    link: 'https://www.best-inc.co.th/',
    name: 'บริษัท เบสท์ โลจิสติกส์ (ประเทศไทย) จำกัด',
    image: BestExpress
  },
  {
    link: 'https://www.dhl.com/th-th/',
    name: 'บริษัท ดีเอชแอล อีคอมเมิร์ซ โซลูชั่นส์ จำกัด',
    image: DHL
  },

  {
    link: 'https://www.scgexpress.co.th/',
    name: 'บริษัท เอสซีจี เอ็กซ์เพรส จำกัด',
    image: SCG
  },
  {
    link: 'https://www.scgexpress.co.th/',
    name: 'บริษัท เอสซีจี เอ็กซ์เพรส จำกัด',
    image: SCGCool
  },
  {
    link: 'https://www.ninjavan.co/',
    name: 'บริษัท นินจา โลจิสติกส์ (ประเทศไทย) จำกัด',
    image: Ninjavan
  },
  {
    link: 'https://university.lazada.co.th/course/detail?id=462&type=series',
    name: 'บริษัท ลาซาด้า จำกัด',
    image: Lazada
  }
];

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3}>
          {/* <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}> */}
          {data.map((value) => (
            <Grid item xs={12} lg={4}>
              <Grid
                className="hover-shipping"
                key={value.link}
                onClick={() => window.open(value.link, '_blank')}
              >
                <img className="image-shipping" src={value.image} />
                <a className="text-shipping">{value.name}</a>
              </Grid>
            </Grid>
          ))}

          {/* </motion.button> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
