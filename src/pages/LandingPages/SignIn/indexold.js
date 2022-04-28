import { useState } from 'react';

// react-router-dom components
import { Link } from 'react-router-dom';
import axios from 'axios';
// @mui material components
import Card from '@mui/material/Card';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';

// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

// Material Kit 2 React components
import CardHeader from '@material-tailwind/react/CardHeader';
import H5 from '@material-tailwind/react/Heading5';
import MKBox from '../../../components/MKBox';
import MKTypography from '../../../components/MKTypography';
import MKInput from '../../../components/MKInput';
import MKButton from '../../../components/MKButton';
// Material Kit 2 React example components
import DefaultNavbar from '../../../examples/Navbars/DefaultNavbar';
import SimpleFooter from '../../../examples/Footers/SimpleFooter';

// Material Kit 2 React page layout routes
import routes from '../../../routes';

// Images
import bgImage from '../../../assets/images/bg-sign-in-basic.jpeg';

function SignInBasic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const handleSubmid = async () => {
    try {
      const data = {
        email,
        password
      };
      const url = 'http://localhost:8080/api/auth';
      const { data: res } = await axios.post(url, data);
      console.log(data);
      console.log(res);
      localStorage.setItem('token', res.token);
      window.location = '/';
    } catch (error) {
      console.log(error);
      console.log('ไม่มีค่าโว้ยยยย');
    }
  };
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: 'external',
          route: '/pages/landing-pages/contact',
          label: 'ติดต่อเรา',
          color: 'info'
        }}
        transparent
        light
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <CardHeader color="purple" size="lg">
                <H5 color="white">NBA Digital Service</H5>
              </CardHeader>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput
                      type="email"
                      label="Email"
                      fullWidth
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput
                      type="password"
                      label="Password"
                      fullWidth
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton
                      variant="gradient"
                      color="secondary"
                      fullWidth
                      onClick={(e) => handleSubmid(e)}
                    >
                      sign in
                    </MKButton>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default SignInBasic;
