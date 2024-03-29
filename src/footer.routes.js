// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import YouTubeIcon from "@mui/icons-material/YouTube";
import { Icon } from '@iconify/react';

// Material Kit 2 React components
import MKTypography from './components/MKTypography';

// Images
import logoCT from './assets/images/NBAService/nbaonestopshop.png';

const date = new Date().getFullYear();

export default {
  brand: {
    name: 'NBA Digital Worlds',
    image: logoCT,
    route: '/'
  },
  socials: [
    {
      icon: <Icon icon="logos:facebook" width="26" height="26" />,
      link: 'https://www.facebook.com/NBADigitalBusinessCenter'
    },
    {
      icon: <Icon icon="logos:twitter" color="green" width="26" height="26" />,
      link: 'https://twitter.com/nbadigitalbusi1'
    },
    {
      icon: <Icon icon="fa-brands:line" color="green" width="26" height="26" />,
      link: 'https://line.me/R/ti/p/%40041kqumi'
    },
    {
      icon: <Icon icon="fa6-brands:instagram-square" color="purple" width="26" height="26" />,
      link: 'https://www.instagram.com/nba_digitalworld/'
    }
  ],
  menus: [
    {
      name: 'Pages',
      items: [
        { name: 'เช็คเลขพัสดุ', route: '/pages/landing-pages/check-parcel' },
        { name: 'บริการของเรา', route: '/pages/landing-pages/service' },
        { name: 'รูปแบบการลงทุน', route: '/pages/landing-pages/investment' },
        { name: 'ประวัติของบริษัท', route: '/pages/history' },
        { name: 'โครงสร้างบริษัท', route: '/pages/structure' },
        { name: 'ข่าวสาร', route: '/pages/news' },
        { name: 'คำถามที่พบบ่อย', route: '/pages/landing-pages/blog' }
      ]
    },
    {
      name: 'เว็บแนะนำ',
      items: [
        { name: 'E-Branch', href: 'https://e-branch2.nbadigitalworlds.com/' },
        { name: 'E-TRANFER', href: 'https://e-transfer.nbadigitalworlds.com/' },
        { name: 'NBA-Express', href: 'https://nba-express.nbadigitalworlds.com/' },
        { name: 'Happy-Point', href: 'https://happy-point.nbadigitalservice.com/' },
        { name: 'NBA-Platform', href: 'https://nba-platform.nbadigitalservice.com/' }
      ]
    },
    {
      name: 'ที่อยู่บริษัท',
      items: [
        {
          name: '298/1 หมู่ที่ 3 ตำบล สันผักหวาน อำเภอ หางดง จังหวัด เชียงใหม่ 50230',
          href: 'https://goo.gl/maps/a9ccsmUgF29aXGBy6'
        }
      ]
    },
    {
      name: 'ติดต่อด่วน',
      items: [{ name: 'ติดต่อเราโดยตรง', route: '/pages/landing-pages/contact' }]
    }
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      NBA Digital Service &copy; {date}
    </MKTypography>
  )
};
