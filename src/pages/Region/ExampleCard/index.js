/* eslint-disable global-require */
import React from 'react';
// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';
import Image from '@material-tailwind/react/Image';
// @mui material components
import Tooltip from '@mui/material/Tooltip';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';

// Material Kit 2 React components
import MKBox from '../../../components/MKBox';
import MKTypography from '../../../components/MKTypography';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

function ExampleCard({ image, name, count, pro, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const imageTemplate = (
    <MKBox
      onClick={handleClickOpen}
      bgColor="white"
      borderRadius="xl"
      shadow="lg"
      minHeight="10rem"
      sx={{
        overflow: 'hidden',
        transform: 'perspective(999px) rotateX(0deg) translate3d(0, 0, 0)',
        transformOrigin: '50% 0',
        backfaceVisibility: 'hidden',
        willChange: 'transform, box-shadow',
        transition: 'transform 200ms ease-out',

        '&:hover': {
          transform: 'perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)'
        }
      }}
      {...rest}
    >
      {pro && (
        <MKBox position="absolute" top={0} right={0} zIndex={2} p={1}>
          <Image
            width="24px"
            height="24px"
            src={require('../../../assets/images/NBAService/NBA2.jpg').default}
            rounded
            raised
            alt="Rounded Raised Image"
          />
        </MKBox>
      )}
      <MKBox component="img" src={image} alt={name} width="100%" my="auto" opacity={pro ? 1 : 1} />
    </MKBox>
  );

  return (
    <>
      <MKBox position="relative">
        {pro ? (
          <Tooltip title={name} placement="top">
            {imageTemplate}
          </Tooltip>
        ) : (
          imageTemplate
        )}
        {name || count > 0 ? (
          <MKBox mt={1} ml={1} lineHeight={1}>
            {name && (
              <MKTypography variant="h6" fontWeight="bold">
                {name}
              </MKTypography>
            )}
            {count > 0 && (
              <MKTypography variant="button" fontWeight="regular" color="secondary">
                {count}
              </MKTypography>
            )}
          </MKBox>
        ) : null}
      </MKBox>
      <Dialog
        fullWidth="fullWidth"
        maxWidth="md"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent sx={{ bgcolor: '#730099' }}>
          <DialogContentText id="alert-dialog-slide-description">
            <Image src={image} raised alt="Rounded Raised Image" />
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ bgcolor: '#730099' }}>
          <Button
            color="error"
            sx={{
              color: 'purple',
              // bgcolor: 'red',
              borderRadius: 50,
              '&:hover': {
                color: '#ffffff',
                bgcolor: 'red'
              }
            }}
            variant="contained"
            onClick={handleClose}
          >
            ออก
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

// Setting default props for the ExampleCard
ExampleCard.defaultProps = {
  name: '',
  count: 0,
  pro: false
};

// Typechecking props for the ExampleCard
ExampleCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  count: PropTypes.number,
  pro: PropTypes.bool
};

export default ExampleCard;
