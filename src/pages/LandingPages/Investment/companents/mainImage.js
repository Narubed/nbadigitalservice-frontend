import React from 'react';
import Image from '@material-tailwind/react/Image';
import './mainImage.scss';
import Grid from '@mui/material/Grid';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

import { Masonry } from '@mui/lab';
import H5 from '@material-tailwind/react/Heading5';
import { Icon } from '@iconify/react';

import MKBox from '../../../../components/MKBox';
import MKTypography from '../../../../components/MKTypography';
// image
import bgImage from '../../../../assets/images/NBAService/nbashop4.png';

export default function mainImage() {
  const sizeIcon = 36;
  return (
    <>
      <Image className="image1" src={bgImage} rounded={false} raised={false} alt="Image" />
      <div className="cardbody">
        {/* <div className="red-color-text">123</div> */}

        <div className="display-flex">
          <Icon icon="emojione-v1:ballot-box-bold-check" width={sizeIcon} height={sizeIcon} />
          <div className="textcenter">ราคาส่งพัสดุเริ่มต้นเพียง 18 บาท ส่งด่วนทั่วไทย!</div>
        </div>
        <div className="display-flex">
          <Icon icon="emojione-v1:ballot-box-bold-check" width={sizeIcon} height={sizeIcon} />
          <div className="textcenter">รับส่งพัสดุได้สูงสุดถึง 50 กิโลกรัม !!</div>
        </div>
        <div className="display-flex">
          <Icon icon="emojione-v1:ballot-box-bold-check" width={sizeIcon} height={sizeIcon} />
          <div className="textcenter">บริการเก็บปลายทาง.</div>
        </div>
        <div className="display-flex">
          <Icon icon="emojione-v1:ballot-box-bold-check" width={sizeIcon} height={sizeIcon} />
          <div className="textcenter">
            รับสิทธิ์ใช้งานบริการเสริมที่สร้างรายได้เพิ่มเติมในอนาคต ฟรี ไม่มีค่าใช้จ่าย
          </div>
        </div>
        <div className="display-flex">
          <Icon icon="emojione-v1:ballot-box-bold-check" width={sizeIcon} height={sizeIcon} />
          <div className="textcenter">บริการออกแบบสื่อสิ่งพิมพ์( นามบัตร ป้าย สติ๊กเกอร์ ฯลฯ )</div>
        </div>
        <div className="display-flex">
          <Icon icon="emojione-v1:ballot-box-bold-check" width={sizeIcon} height={sizeIcon} />
          <div className="textcenter">
            บริการออกแบบเว็บไซต์( เขียนเว็บไซต์ ออกเเบบระบบ ดูแลเว็บไซต์ ฯลฯ )
          </div>
        </div>
        <div className="display-flex">
          <Icon icon="emojione-v1:ballot-box-bold-check" width={sizeIcon} height={sizeIcon} />
          <div className="textcenter">
            มีเปอร์เซ็นส่วนแบ่ง รายได้ จากการรับงานออกแบบสื่อสิ่งพิมพ์ เขียนเว็บไซต์ บัญชี มากถึง
            25%
          </div>
        </div>
        <div className="display-flex">
          <Icon icon="emojione-v1:ballot-box-bold-check" width={sizeIcon} height={sizeIcon} />
          <div className="textcenter">บริการเคาน์เตอร์เซอร์วิส ทุกประเภท</div>
        </div>
        <div className="display-flex">
          <Icon icon="emojione-v1:ballot-box-bold-check" width={sizeIcon} height={sizeIcon} />
          <div className="textcenter">
            มีอิสระในกำหนด ค่าธรรมเนียมเคาน์เตอร์เซอร์วิส ( รับเต็มไม่มีแบ่ง )
          </div>
        </div>
        <div className="display-flex">
          <Icon icon="emojione-v1:ballot-box-bold-check" width={sizeIcon} height={sizeIcon} />
          <div className="textcenter">Call Center ทุกแผนกเพื่อรองรับทุกปัญหาที่พบ</div>
        </div>
        <div className="display-flex">
          <Icon icon="emojione-v1:ballot-box-bold-check" width={sizeIcon} height={sizeIcon} />
          <div className="textcenter">
            ทางเรามีแอดมินคอยดูแลช่วยเหลือแก้ไขปัญหาในการใช้งาน ตลอด 24 ชั่วโมง
          </div>
        </div>
      </div>
    </>
  );
}
