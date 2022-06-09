/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import { purple } from '@mui/material/colors';
// Material Kit 2 React components
// import MKBox from "components/MKBox";
// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
// import MuiLink from "@mui/material/Link";
// Material Kit 2 React examples
import RotatingCard from '../../../../examples/Cards/RotatingCard';
// import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// @mui material components
// import Icon from "@mui/material/Icon";
// import Box from "@mui/material/Box";

// Material Kit 2 React components
import MKBox from '../../../../components/MKBox';
import MKTypography from '../../../../components/MKTypography';
// import MKButton from "components/MKButton";
// import bgFront from "assets/images/rotating-card-bg-front.jpeg";
// import bgBack from "assets/images/rotating-card-bg-back.jpeg";
// , icon, title, description
function RotatingCardFront({ image, name }) {
  return <MKBox borderRadius="15%" component="img" src={image} alt={name} width="100%" my="auto" />;
}

function RotatingCardBack({ image, title, description }) {
  return (
    <MKBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="15%"
      position="absolute"
      width="100%"
      height="100%"
      top={0}
      left={0}
      zIndex={5}
      sx={{
        // borderRadius: '55px',
        backgroundImage: ({ functions: { linearGradient, rgba } }) =>
          `${linearGradient(rgba(purple[500], 0.15), rgba(purple[500], 0.95))}, url(${image})`,
        backgroundSize: 'cover',
        backfaceVisibility: 'hidden',
        transform: 'rotateY(180deg)'
      }}
    >
      <MKBox pt={12} pb={2} px={2} textAlign="center" lineHeight={1}>
        <MKTypography variant="h3" color="white" gutterBottom>
          {title}
        </MKTypography>
        <MKTypography variant="body2" color="white" opacity={1}>
          {description}
        </MKTypography>
      </MKBox>
    </MKBox>
  );
}

function Information({ image, name, detail }) {
  return (
    // <MKBox component="section" py={6} my={6}>
    <Container>
      <RotatingCard>
        <RotatingCardFront
          image={image}
          icon="touch_app"
          title={<>E-Branch</>}
          description="สำหรับตัวแทนศูนย์ชุมชน."
        />
        <RotatingCardBack
          image={require('../../../../assets/images/NBAService/NBA2.jpg').default}
          title={name}
          description={detail}
          action={{
            type: 'internal',
            route: 'https://e-branch2.nbadigitalworlds.com/',
            label: 'ไปยังเว็บ'
          }}
        />
      </RotatingCard>
    </Container>
    // </MKBox>
  );
}
Information.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string
};
export default Information;
