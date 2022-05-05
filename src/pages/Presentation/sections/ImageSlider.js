import { Carousel } from './lib';
import BGnba1 from '../../../assets/images/NBAService/backgroundslider/BGnba1.jpg';
import BGnba2 from '../../../assets/images/NBAService/backgroundslider/BGnba2.jpg';
import BGnba3 from '../../../assets/images/NBAService/backgroundslider/BGnba3.jpg';
import BGnba4 from '../../../assets/images/NBAService/backgroundslider/BGnba4.jpg';

function App() {
  const data = [
    {
      image: BGnba1
    },
    {
      image: BGnba2
    },
    {
      image: BGnba3
    },
    {
      image: BGnba4
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold'
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold'
  };
  return (
    <div className="App">
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            padding: '0 10px'
          }}
        >
          <Carousel
            data={data}
            time={5000}
            width="100%"
            height="100%"
            // width="850px"
            // height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic
            dots
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails
            thumbnailWidth="10px"
            showNavBtn
            style={{
              textAlign: 'center',
              maxWidth: '100%',
              // maxWidth: "850px",
              margin: '10px auto'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
