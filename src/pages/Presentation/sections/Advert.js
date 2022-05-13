import * as React from 'react';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import image1 from '../../../assets/images/NBAService/logo/nba.png';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
function Advert() {
  const [open, setOpen] = React.useState(true);
  const [Advert, setAdvert] = React.useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    const GETAdvert = await axios.get(`${process.env.REACT_APP_WEB_SERVICE}/advert`);
    setAdvert(GETAdvert.data.data);
  }, []);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {Advert.length !== 0 ? (
            <Image
              src={`${process.env.REACT_APP_DRIVE_SELECT_IMAGE}${Advert[0].advert_image}`}
              rounded={false}
              raised={false}
              alt="Image"
            />
          ) : null}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          color="red"
          buttonType="outline"
          size="regular"
          rounded={false}
          block={false}
          iconOnly={false}
          ripple="dark"
          onClick={handleClose}
        >
          ออก
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Advert;
