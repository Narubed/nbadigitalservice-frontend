/* eslint-disable jsx-a11y/alt-text */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import './MainCard.scss';
// Material Kit 2 React components
import MKBox from '../../../components/MKBox';
import bgImage from '../../../assets/images/NBAService/background/Service.png';
import bgImage2 from '../../../assets/images/NBAService/background/CEO.png';

function BuiltByDevelopers() {
  // const bgImage =
  //   'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg';

  return (
    <Container>
      <MKBox display="flex" alignItems="center">
        <div className="img-hover-zoom--slowmo">
          <img
            className="ImageStructure"
            src={`${bgImage}?w=161&fit=crop&auto=format`}
            srcSet={`${bgImage}?w=161&fit=crop&auto=format&dpr=2 2x`}
            loading="lazy"
          />
        </div>
      </MKBox>
      <MKBox display="flex" alignItems="center">
        <div className="img-hover-zoom--slowmo">
          <img
            className="ImageStructure"
            src={`${bgImage2}?w=161&fit=crop&auto=format`}
            srcSet={`${bgImage2}?w=161&fit=crop&auto=format&dpr=2 2x`}
            loading="lazy"
          />
        </div>
      </MKBox>
    </Container>
  );
}

export default BuiltByDevelopers;
