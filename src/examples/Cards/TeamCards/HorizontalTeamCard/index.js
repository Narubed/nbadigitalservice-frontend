import PropTypes from 'prop-types';
import { motion } from 'framer-motion/dist/framer-motion';
import { styled } from '@mui/material/styles';

// @mui material components
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

// Material Kit 2 React components
import MKBox from '../../../../components/MKBox';
import MKTypography from '../../../../components/MKTypography';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[400]),
  backgroundColor: purple[400],
  '&:hover': {
    backgroundColor: purple[700]
  }
}));

function HorizontalTeamCard({ image, name, position, description, linkWeb }) {
  console.log(linkWeb);
  return (
    <Card sx={{ mt: 3 }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
          <MKBox width="100%" pt={2} pb={1} px={2}>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Box
                onClick={() => window.open(linkWeb, '_blank')}
                component="img"
                src={image}
                alt={name}
                width="100%"
                borderRadius="md"
                shadow="lg"
              />
            </motion.button>
          </MKBox>
        </Grid>
        <Grid item xs={12} md={6} lg={8} sx={{ my: 'auto' }}>
          <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
            <MKTypography variant="h5">{name}</MKTypography>
            <MKTypography variant="h6" color={position.color} mb={1}>
              {position.label}
            </MKTypography>
            <MKTypography variant="body2" color="text">
              {description}
            </MKTypography>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <ColorButton onClick={() => window.open(linkWeb, '_blank')}>
                ตรวจสอบสถานะพัสดุ
              </ColorButton>
            </motion.button>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the HorizontalTeamCard
HorizontalTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    color: PropTypes.oneOf([
      'primary',
      'secondary',
      'info',
      'success',
      'warning',
      'error',
      'dark',
      'light'
    ]),
    label: PropTypes.string.isRequired
  }).isRequired,
  description: PropTypes.string.isRequired
};

export default HorizontalTeamCard;
