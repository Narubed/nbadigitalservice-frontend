import { Icon } from '@iconify/react';
// @mui icons
// import GitHubIcon from "@mui/icons-material/GitHub";
// import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
// Pages
import AboutUs from './layouts/pages/landing-pages/about-us';
import ContactUs from './layouts/pages/landing-pages/contact-us';
import Author from './layouts/pages/landing-pages/author';
import SignIn from './layouts/pages/authentication/sign-in';
import CheckParcel from './layouts/pages/landing-pages/check-parcel';
import Service from './layouts/pages/landing-pages/service';
import Investment from './layouts/pages/landing-pages/investment';
import InvestmentPlatform from './layouts/pages/landing-pages/platforminvestment';

import Blog from './layouts/pages/landing-pages/blog';
import Contact from './layouts/pages/landing-pages/contact';

import AreaZone from './layouts/pages/AreaZone';

// Shipping Company
import ShippingCompany from './layouts/pages/shipping-company';
// import Kerry from './layouts/pages/shipping-company/kerry';
// import EMS from './layouts/pages/shipping-company/ems';
// import Flash from './layouts/pages/shipping-company/flash';
// import NinjaVan from './layouts/pages/shipping-company/ninjavan';
// import DHL from './layouts/pages/shipping-company/dhl';
// import Best from './layouts/pages/shipping-company/best';
// import SCG from './layouts/pages/shipping-company/scg';
// import SCGCool from './layouts/pages/shipping-company/scgcool';
// import LazadaDOF from './layouts/pages/shipping-company/lazadadof';
// Sections
import PageHeaders from './layouts/sections/page-sections/page-headers';
import Features from './layouts/sections/page-sections/featuers';
import Navbars from './layouts/sections/navigation/navbars';
import NavTabs from './layouts/sections/navigation/nav-tabs';
import Pagination from './layouts/sections/navigation/pagination';
import Inputs from './layouts/sections/input-areas/inputs';
import Forms from './layouts/sections/input-areas/forms';
import Alerts from './layouts/sections/attention-catchers/alerts';
import Modals from './layouts/sections/attention-catchers/modals';
import TooltipsPopovers from './layouts/sections/attention-catchers/tooltips-popovers';
import Avatars from './layouts/sections/elements/avatars';
import Badges from './layouts/sections/elements/badges';
import BreadcrumbsEl from './layouts/sections/elements/breadcrumbs';
import Buttons from './layouts/sections/elements/buttons';
import Dropdowns from './layouts/sections/elements/dropdowns';
import ProgressBars from './layouts/sections/elements/progress-bars';
import Toggles from './layouts/sections/elements/toggles';
import Typography from './layouts/sections/elements/typography';

// Region
import RegionCentral from './layouts/pages/region/region-central';
import RegionNorthern from './layouts/pages/region/region-northern';
import RegionEastern from './layouts/pages/region/region-eastern';
import RegionSouthern from './layouts/pages/region/region-southern';
import RegionNorthEast from './layouts/pages/region/region-norteast';
import RegionWestern from './layouts/pages/region/region-western';

// News
import News from './layouts/pages/news';
import NewsDetail from './layouts/pages/news-detail';

// download
import Download from './layouts/pages/download';

// Book
import Books from './layouts/pages/book';

// HISHORY
import CompanyHistory from './layouts/pages/company-history';
import CompanyStructure from './layouts/pages/company-structure';

// Pinto
import PintoApp from './layouts/pages/pinto';
import Messenger from './layouts/pages/pinto/app-detail/messenger';
import Conditioner from './layouts/pages/pinto/app-detail/conditioner';
import CutHair from './layouts/pages/pinto/app-detail/cut-hair';
import Deposit from './layouts/pages/pinto/app-detail/deposit';
import HealthCenter from './layouts/pages/pinto/app-detail/health-center';
import Maid from './layouts/pages/pinto/app-detail/maid';
import Market from './layouts/pages/pinto/app-detail/market';
import Masseuse from './layouts/pages/pinto/app-detail/masseuse';
import NbaCar from './layouts/pages/pinto/app-detail/nba-car';
import Pharmacy from './layouts/pages/pinto/app-detail/pharmacy';
import Recap from './layouts/pages/pinto/app-detail/recap';
import Restaurant from './layouts/pages/pinto/app-detail/restaurant';
import Tutor from './layouts/pages/pinto/app-detail/tutor';
import WaterElectricity from './layouts/pages/pinto/app-detail/water-electricity';

const routes = [
  {
    route: '/pages/landing-pages/contact',
    component: <Contact />
  },
  {
    route: '/pages/news-detail',
    component: <NewsDetail />
  },
  {
    route: '/pages/authentication/sign-in',
    component: <SignIn />
  },
  {
    route: '/pages/pinto',
    component: <PintoApp />
  },
  {
    route: '/pages/pinto/Messenger',
    component: <Messenger />
  },
  {
    route: '/pages/pinto/Conditioner',
    component: <Conditioner />
  },
  {
    route: '/pages/pinto/CutHair',
    component: <CutHair />
  },
  {
    route: '/pages/pinto/Deposit',
    component: <Deposit />
  },
  {
    route: '/pages/pinto/HealthCenter',
    component: <HealthCenter />
  },
  {
    route: '/pages/pinto/Maid',
    component: <Maid />
  },
  {
    route: '/pages/pinto/Market',
    component: <Market />
  },
  {
    route: '/pages/pinto/Masseuse',
    component: <Masseuse />
  },
  {
    route: '/pages/pinto/NbaCar',
    component: <NbaCar />
  },
  {
    route: '/pages/pinto/Pharmacy',
    component: <Pharmacy />
  },
  {
    route: '/pages/pinto/Recap',
    component: <Recap />
  },
  {
    route: '/pages/pinto/Restaurant',
    component: <Restaurant />
  },
  {
    route: '/pages/pinto/Tutor',
    component: <Tutor />
  },
  {
    route: '/pages/pinto/WaterElectricity',
    component: <WaterElectricity />
  },

  {
    name: 'เช็คเลขพัสดุ',
    icon: <Icon icon="fluent:arrow-sync-checkmark-20-filled" />,
    route: '/pages/landing-pages/check-parcel',
    component: <CheckParcel />
  },
  {
    name: 'บริการ',
    icon: <HomeRepairServiceIcon />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        // name: 'Service',
        collapse: [
          {
            name: 'บริการของบริษัท',
            route: '/pages/landing-pages/service',
            component: <Service />
          },
          {
            name: 'บริการขนส่งของเรา',
            route: '/pages/shipping-company/',
            component: <ShippingCompany />
          },
          {
            name: 'รูปแบบการลงทุน (ทั่วไป)',
            route: '/pages/landing-pages/investment',
            component: <Investment />
          },
          {
            name: 'รูปแบบการลงทุน (platform)',
            route: '/pages/landing-pages/InvestmentPlatform',
            component: <InvestmentPlatform />
          },

          {
            name: 'การแบ่งเขตพื้นที่',
            route: '/pages/area-zone',
            component: <AreaZone />
          }
        ]
      }
    ]
  },
  {
    name: 'ศูนย์บริการของเรา',
    icon: <Icon icon="ci:window-check" />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        // name: 'ภูมิภาคต่าง ๆ',
        collapse: [
          {
            name: 'ภาคเหนือ',
            route: '/pages/region/northern',
            component: <RegionNorthern />
          },
          {
            name: 'ภาคตะวันออกเฉียงเหนือ',
            route: '/pages/region/northeast',
            component: <RegionNorthEast />
          },
          {
            name: 'ภาคตะวันตก',
            route: '/pages/region/western',
            component: <RegionWestern />
          },
          {
            name: 'ภาคกลาง',
            route: '/pages/region/central',
            component: <RegionCentral />
          },
          {
            name: 'ภาคตะวันออก',
            route: '/pages/region/eastern',
            component: <RegionEastern />
          },
          {
            name: 'ภาคใต้',
            route: '/pages/region/southern',
            component: <RegionSouthern />
          }
        ]
      }
    ]
  },
  {
    name: 'เกี่ยวกับเรา',
    // icon: <Icon icon="emojione:exclamation-question-mark" />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        // name: 'Company History',
        collapse: [
          {
            name: 'ประวัติบริษัท',
            route: '/pages/history',
            component: <CompanyHistory />
          },
          {
            name: 'โครงสร้างบริษัท',
            route: '/pages/structure',
            component: <CompanyStructure />
          }

          // {
          //   name: 'โครงสร้างองค์กร',
          //   route: '/pages/landing-pages/blog',
          //   component: <Blog />
          // }
        ]
      }
    ]
  },
  {
    name: 'ช่วยเหลือ',
    // icon: <Icon icon="emojione:exclamation-question-mark" />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        // name: 'Additional Services',
        collapse: [
          {
            name: 'คู่มือออนไลน์',
            route: '/pages/book',
            component: <Books />
          },
          {
            name: 'บล๊อกข่าวสาร',
            route: '/pages/news',
            component: <News />
          },
          {
            name: 'คำถามที่พบบ่อย',
            route: '/pages/landing-pages/blog',
            component: <Blog />
          },
          {
            name: 'Download',
            route: '/sections/download/teamview',
            component: <Download />
          }
        ]
      }
    ]
  }

  // {
  //   name: 'pages',
  //   icon: <Icon icon="ci:window-check" />,
  //   columns: 1,
  //   rowsPerColumn: 2,
  //   collapse: [
  //     {
  //       name: 'landing pages',
  //       collapse: [
  //         {
  //           name: 'about us',
  //           route: '/pages/landing-pages/about-us',
  //           component: <AboutUs />
  //         },
  //         {
  //           name: 'contact us',
  //           route: '/pages/landing-pages/contact-us',
  //           component: <ContactUs />
  //         },
  //         {
  //           name: 'author',
  //           route: '/pages/landing-pages/author',
  //           component: <Author />
  //         }
  //       ]
  //     },
  //     {
  //       name: 'account',
  //       collapse: [
  //         {
  //           name: 'sign in',
  //           route: '/pages/authentication/sign-in',
  //           component: <SignIn />
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   name: 'sections',
  //   icon: <Icon icon="ci:window-check" />,
  //   collapse: [
  //     {
  //       name: 'page sections',
  //       description: 'See all sections',
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: 'page headers',
  //           route: '/sections/page-sections/page-headers',
  //           component: <PageHeaders />
  //         },
  //         {
  //           name: 'features',
  //           route: '/sections/page-sections/features',
  //           component: <Features />
  //         }
  //       ]
  //     },
  //     {
  //       name: 'navigation',
  //       description: 'See all navigations',
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: 'navbars',
  //           route: '/sections/navigation/navbars',
  //           component: <Navbars />
  //         },
  //         {
  //           name: 'nav tabs',
  //           route: '/sections/navigation/nav-tabs',
  //           component: <NavTabs />
  //         },
  //         {
  //           name: 'pagination',
  //           route: '/sections/navigation/pagination',
  //           component: <Pagination />
  //         }
  //       ]
  //     },
  //     {
  //       name: 'input areas',
  //       description: 'See all input areas',
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: 'inputs',
  //           route: '/sections/input-areas/inputs',
  //           component: <Inputs />
  //         },
  //         {
  //           name: 'forms',
  //           route: '/sections/input-areas/forms',
  //           component: <Forms />
  //         }
  //       ]
  //     },
  //     {
  //       name: 'attention catchers',
  //       description: 'See all examples',
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: 'alerts',
  //           route: '/sections/attention-catchers/alerts',
  //           component: <Alerts />
  //         },
  //         {
  //           name: 'modals',
  //           route: '/sections/attention-catchers/modals',
  //           component: <Modals />
  //         },
  //         {
  //           name: 'tooltips & popovers',
  //           route: '/sections/attention-catchers/tooltips-popovers',
  //           component: <TooltipsPopovers />
  //         }
  //       ]
  //     },
  //     {
  //       name: 'elements',
  //       description: 'See all 32 examples',
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: 'avatars',
  //           route: '/sections/elements/avatars',
  //           component: <Avatars />
  //         },
  //         {
  //           name: 'badges',
  //           route: '/sections/elements/badges',
  //           component: <Badges />
  //         },
  //         {
  //           name: 'breadcrumbs',
  //           route: '/sections/elements/breadcrumbs',
  //           component: <BreadcrumbsEl />
  //         },
  //         {
  //           name: 'buttons',
  //           route: '/sections/elements/buttons',
  //           component: <Buttons />
  //         },
  //         {
  //           name: 'dropdowns',
  //           route: '/sections/elements/dropdowns',
  //           component: <Dropdowns />
  //         },
  //         {
  //           name: 'progress bars',
  //           route: '/sections/elements/progress-bars',
  //           component: <ProgressBars />
  //         },
  //         {
  //           name: 'toggles',
  //           route: '/sections/elements/toggles',
  //           component: <Toggles />
  //         },
  //         {
  //           name: 'typography',
  //           route: '/sections/elements/typography',
  //           component: <Typography />
  //         }
  //       ]
  //     }
  //   ]
  // }
  // {
  //   name: "docs",
  //   icon: <Icon icon="ci:window-check" />,
  //   collapse: [
  //     {
  //       name: "getting started",
  //       description: "All about overview, quick start, license and contents",
  //       href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
  //     },
  //     {
  //       name: "foundation",
  //       description: "See our colors, icons and typography",
  //       href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
  //     },
  //     {
  //       name: "components",
  //       description: "Explore our collection of fully designed components",
  //       href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
  //     },
  //     {
  //       name: "plugins",
  //       description: "Check how you can integrate our plugins",
  //       href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
  //     },
  //   ],
  // },
  // {
  //   name: "github",
  //   icon: <GitHubIcon />,
  //   href: "https://www.github.com/creativetimofficial/material-kit-react",
  // },
];

export default routes;
