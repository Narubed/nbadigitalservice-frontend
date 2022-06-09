/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion/dist/framer-motion';

import './pinto.scss';

import images from '../../assets/images/NBAService/pinto/BGDowload.jpg';

export default function DownloadApp() {
  return (
    <div>
      <Grid
        container
        item
        xs={12}
        lg={12}
        sx={{
          mx: 'auto'
        }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          <img
            style={{
              marginRight: 'auto',
              marginLeft: 'auto',
              width: '90%',
              alert: 'center'
            }}
            className="main-dowload-pinto"
            src={images}
          />
        </motion.div>
      </Grid>
    </div>
  );
}
