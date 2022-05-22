/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './CSS/Vision.scss';
import Marquee from 'react-fast-marquee';
import { purple } from '@mui/material/colors';

export default function Vision() {
  return (
    <div className="container1">
      {/* <div className="box-visions">
        <Image src={imagebox} rounded={false} raised={false} alt="Image" />{' '}
      </div> */}
      <Marquee
        style={{ color: purple[500], backgroundColor: purple[100], borderRadius: '15px' }}
        pauseOnHover
        speed="30"
        gradientColor={[249, 47, 242]}
        // gradientWidth={200}
      >
        | “🎊✨💰 มาแล้ว!!! เปิดให้บริการอย่างเป็นทางการแล้ววันนี้!!! 📍NBA EXpress ครบทุกขนส่ง📍
        เครือข่ายการขนส่งที่แข็งแกร่ง ที่ให้บริการขนส่งสินค้า
        รวมอยู่ในศูนย์บริการครบวงจรของเราทั้งหมดแล้ววันนี้ มีศูนย์บริการทั่วเมืองไทยกว่า 500 สาขา
        ครอบครุมจังหวัด 77 จังหวัด✨”|
      </Marquee>
    </div>
  );
}
