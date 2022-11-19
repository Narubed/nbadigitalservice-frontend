import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from '@material-tailwind/react/Image';
import { Icon } from '@iconify/react';
// import Button from "@mui/material/Button";
// Material Kit 2 React components
import MKBox from '../../../../components/MKBox';
// import MKBadge from "components/MKBadge";
import MKTypography from '../../../../components/MKTypography';
import bgImage from '../../../../assets/images/NBAService/contect/contact4.png';
import MKButton from '../../../../components/MKButton';
// Presentation page components

// Data

function DesignBlocks() {
  return (
    <MKBox component="section" my={1} py={1}>
      <Container sx={{ mt: 6 }}>
        <Grid container spacing={3} sx={{ mb: 10 }}>
          <Grid item xs={12} lg={3}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKTypography variant="h4" fontWeight="bold" mb={1}>
                NBA Digital Service Center.
              </MKTypography>
              <MKTypography
                variant="body2"
                fontWeight="regular"
                color="secondary"
                mb={1}
                pr={2}
                display="flex"
              >
                <MKButton
                  onClick={() => window.open('tel:052-100-8929', '_blank')}
                  color="primary"
                  variant="link"
                  startIcon={<Icon icon="noto:telephone" color="red" width="26" height="26" />}
                >
                  052-089-009
                </MKButton>
              </MKTypography>
              <MKTypography
                variant="body2"
                fontWeight="regular"
                color="secondary"
                mb={1}
                pr={2}
                display="flex"
              >
                <MKButton
                  onClick={() => window.open('https://goo.gl/maps/a9ccsmUgF29aXGBy6', '_blank')}
                  color="primary"
                  variant="link"
                  startIcon={
                    <Icon icon="simple-icons:googlemaps" color="red" width="26" height="26" />
                  }
                >
                  298/1 หมู่ที่ 3 ตำบล สันผักหวาน อำเภอ หางดง จังหวัด เชียงใหม่ 50230
                </MKButton>
              </MKTypography>
              <MKTypography
                variant="body2"
                fontWeight="regular"
                color="secondary"
                mb={1}
                pr={2}
                display="flex"
              >
                <MKButton
                  onClick={() =>
                    window.open('https://www.facebook.com/NBADigitalBusinessCenter', '_blank')
                  }
                  color="primary"
                  variant="link"
                  startIcon={<Icon icon="logos:facebook" width="26" height="26" />}
                >
                  NBA Digital Service Center
                </MKButton>
              </MKTypography>
              <MKTypography
                variant="body2"
                fontWeight="regular"
                color="secondary"
                mb={1}
                pr={2}
                display="flex"
              >
                <MKButton
                  onClick={() => window.open('https://line.me/R/ti/p/%40041kqumi', '_blank')}
                  color="primary"
                  variant="link"
                  startIcon={<Icon icon="fa-brands:line" color="green" width="26" height="26" />}
                >
                  @NBA999
                </MKButton>
              </MKTypography>
              <MKTypography
                variant="body2"
                fontWeight="regular"
                color="secondary"
                mb={1}
                pr={2}
                display="flex"
              >
                <MKButton
                  onClick={() => window.open('mailto:info@nbadigitalservice.com', '_blank')}
                  color="primary"
                  variant="link"
                  startIcon={<Icon icon="noto-v1:e-mail" width="26" height="26" />}
                >
                  info@nbadigitalservice.com
                </MKButton>
                {/* <Button
                onClick={() => window.open("mailto:service@nbadigitalworlds.com", "_blank")}
                  color="lightBlue"
                  buttonType="link"
                  size="regular"
                  rounded={false}
                  block={false}
                  iconOnly={false}
                  ripple="dark"
                >
                  <p>&nbsp;&nbsp; service@nbadigitalworlds.com</p>
                </Button> */}
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} sx={{ mb: 12 }}>
                <div className="img-hover-zoom--slowmo">
                  <Image src={bgImage} rounded={false} raised alt="Raised Image" />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default DesignBlocks;
