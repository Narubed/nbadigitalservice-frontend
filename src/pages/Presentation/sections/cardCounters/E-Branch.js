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
// import { Icon } from '@iconify/react';
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
  return (
    <MKBox
      display="flex"
      justifyContent="center"
      alignContent="center"
      borderRadius="lg"
      coloredShadow={color}
      width="100%"
      position="relative"
      zIndex={2}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba } }) =>
          `${linearGradient(rgba(purple[500], 0.15), rgba(purple[500], 0.45))}, url(${image})`,
        backgroundSize: 'cover',
        backfaceVisibility: 'hidden'
      }}
    >
      <MKBox py={12} px={3} textAlign="center" lineHeight={1}>
        {icon && (
          <MKTypography variant="h2" color="white" my={2}>
            {/* <Icon icon="cil:touch-app" /> */}
          </MKTypography>
        )}
        <MKTypography variant="h3" color="white" gutterBottom>
          {title}
        </MKTypography>
        <MKTypography variant="body2" color="white" opacity={0.8}>
          {description}
        </MKTypography>
      </MKBox>
    </MKBox>
  );
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
        <MKTypography variant="h3" color="white" gutterBottom>
          {title}
        </MKTypography>
        <MKTypography variant="body2" color="white" opacity={0.8}>
          {description}
        </MKTypography>
        {action && (
          <MKBox width="50%" mt={4} mb={2} mx="auto">
            {action.type === 'external' ? (
              <MKButton
                onClick={() => window.open('https://e-branch2.nbadigitalworlds.com/', '_blank')}
                component={MuiLink}
                href={action.route}
                target="_blank"
                rel="noreferrer"
                color="white"
                size="small"
                fullWidth
              >
                {action.label}
              </MKButton>
            ) : (
              <MKButton
                onClick={() => window.open('https://e-branch2.nbadigitalworlds.com/', '_blank')}
                component={Link}
                to={action.route}
                color="white"
                size="small"
                fullWidth
              >
                {action.label}
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
          image={require('../../../../assets/images/NBAService/NBA2.jpg').default}
          icon="touch_app"
          title={<>E-Branch</>}
          description="สำหรับตัวแทนศูนย์ชุมชน."
        />
        <RotatingCardBack
          image={require('../../../../assets/images/NBAService/NBA2.jpg').default}
          title="E-Branch"
          description="สำหรับตัวเเทนศูนย์ เป็นโปรเเกรมที่บริษัทจัดทำขึ้นเพื่อศูนย์ตัวเเทน."
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

export default Information;
