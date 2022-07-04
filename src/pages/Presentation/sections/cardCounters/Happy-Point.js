/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import Container from '@mui/material/Container';
import { purple } from '@mui/material/colors';
// Material Kit 2 React components
// import MKBox from "components/MKBox";
// react-router-dom components
import { Link } from 'react-router-dom';

// @mui material components
import MuiLink from '@mui/material/Link';
// Material Kit 2 React examples
import { Icon } from '@iconify/react';
import RotatingCard from '../../../../examples/Cards/RotatingCard';
// import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// @mui material components

// Material Kit 2 React components
import MKBox from '../../../../components/MKBox';
import MKTypography from '../../../../components/MKTypography';
import MKButton from '../../../../components/MKButton';
// import bgFront from "assets/images/rotating-card-bg-front.jpeg";
// import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function RotatingCardFront({ color, image, icon, title, description }) {
  return <MKBox borderRadius="5%" component="img" src={image} alt={title} width="100%" my="auto" />;
}

function RotatingCardBack({ color, image, title, description, action }) {
  return (
    <MKBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="lg"
      coloredShadow={color}
      position="absolute"
      width="100%"
      height="100%"
      top={0}
      left={0}
      zIndex={5}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba } }) =>
          `${linearGradient(rgba(purple[500], 0.85), rgba(purple[500], 0.85))}, url(${image})`,
        backgroundSize: 'cover',
        backfaceVisibility: 'hidden',
        transform: 'rotateY(180deg)'
      }}
    >
      <MKBox pt={12} pb={2} px={2} textAlign="center" lineHeight={1}>
        <MKTypography variant="h5" color="white" gutterBottom>
          {title}
        </MKTypography>
        <MKTypography variant="caption" color="white" opacity={0.8}>
          {description}
        </MKTypography>
        {action && (
          <MKBox width="50%" mt={2} mb={2} mx="auto">
            {action.type === 'external' ? (
              <MKButton
                onClick={() => window.open('https://happy-point.nbadigitalservice.com/', '_blank')}
                component={MuiLink}
                href={action.route}
                target="_blank"
                rel="noreferrer"
                color="white"
                size="small"
                fullWidth
              >
                <MKTypography variant="caption" opacity={0.8}>
                  {action.label}
                </MKTypography>
              </MKButton>
            ) : (
              <MKButton
                onClick={() => window.open('https://happy-point.nbadigitalservice.com/', '_blank')}
                component={Link}
                to={action.route}
                color="white"
                size="small"
                fullWidth
              >
                <MKTypography variant="caption" opacity={0.8}>
                  {action.label}
                </MKTypography>
              </MKButton>
            )}
          </MKBox>
        )}
      </MKBox>
    </MKBox>
  );
}

function Information() {
  return (
    // <MKBox component="section" py={6} my={6}>
    <Container>
      <RotatingCard>
        <RotatingCardFront
          image={require('../../../../assets/images/NBAService/logo/happy-point.png').default}
          icon="touch_app"
          title={<>FoodExpress</>}
          description="สำหรับการสั่งซื้อสินค้า."
        />
        <RotatingCardBack
          image={require('../../../../assets/images/NBAService/logo/happy-point.png').default}
          title="FoodExpress"
          description="โปรแกรม สั่งซื้อสินค้าหรืออาหาร."
          action={{
            type: 'internal',
            route: 'https://happy-point.nbadigitalservice.com/',
            label: 'เว็บไซต์'
          }}
        />
      </RotatingCard>
    </Container>
    // </MKBox>
  );
}

export default Information;
