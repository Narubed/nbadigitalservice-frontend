/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import axios from 'axios';
import { motion } from 'framer-motion/dist/framer-motion';
// import CardMedia from "@mui/material/CardMedia";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from '@material-tailwind/react/Image';
import MKBox from '../../../../components/MKBox';

const nameTransport = 'scgcool';
function Transport() {
  const [Transports, setTransports] = React.useState([]);
  React.useEffect(async () => {
    const getTransports = await axios.get(`${process.env.REACT_APP_WEB_SERVICE}/transports`);
    const filterName = getTransports.data.data.filter(
      (value) => value.transport_name === nameTransport
    );
    setTransports(filterName);
  }, []);

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3}>
          <Grid sx={{ ml: 'auto', mr: 'auto' }}>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Grid container justifyContent="flex-start">
                <Image
                  src={
                    Transports[0] && Transports[0].transport_image
                      ? `${process.env.REACT_APP_DRIVE_SELECT_IMAGE}${Transports[0].transport_image}`
                      : null
                  }
                  rounded={false}
                  raised={false}
                  alt="Image"
                />
              </Grid>
            </motion.button>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Transport;
