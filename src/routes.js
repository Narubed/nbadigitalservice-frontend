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
import Blog from './layouts/pages/landing-pages/blog';
import Contact from './layouts/pages/landing-pages/contact';

// Shipping Company
import Kerry from './layouts/pages/shipping-company/kerry';
import EMS from './layouts/pages/shipping-company/ems';
import Flash from './layouts/pages/shipping-company/flash';
import NinjaVan from './layouts/pages/shipping-company/ninjavan';
import DHL from './layouts/pages/shipping-company/dhl';
import Best from './layouts/pages/shipping-company/best';
import SCG from './layouts/pages/shipping-company/scg';
import SCGCool from './layouts/pages/shipping-company/scgcool';
import LazadaDOF from './layouts/pages/shipping-company/lazadadof';
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

// News
import News from './layouts/pages/news';

// download
import Download from './layouts/pages/download';

const routes = [
  {
    route: '/pages/landing-pages/contact',
    component: <Contact />
  },
  {
    name: 'เช็คเลขพัสดุ',
    icon: <Icon icon="fluent:arrow-sync-checkmark-20-filled" />,
    route: '/pages/landing-pages/check-parcel',
    component: <CheckParcel />
  },
  {
    name: 'ขนส่ง',
    icon: <Icon icon="ci:window-check" />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: 'พันธมิตรของเรา',
        collapse: [
          {
            name: 'จุดให้บริการงานไปรษณีย์',
            route: '/pages/shipping-company/ems',
            component: <EMS />
          },
          {
            name: 'Kerry Express Thailand',
            route: '/pages/shipping-company/kerry',
            component: <Kerry />
          },
          {
            name: 'Flash Express Thailand',
            route: '/pages/shipping-company/flash',
            component: <Flash />
          },
          {
            name: 'Ninja Van Express',
            route: '/pages/shipping-company/ninjavan',
            component: <NinjaVan />
          },
          {
            name: 'DHL eCommerce Thailand',
            route: '/pages/shipping-company/dhl',
            component: <DHL />
          },
          {
            name: 'Best Express Thailand',
            route: '/pages/shipping-company/best',
            component: <Best />
          },
          {
            name: 'SCG Express Thailand',
            route: '/pages/shipping-company/scg',
            component: <SCG />
          },
          {
            name: 'SCG Express Cool Thailand',
            route: '/pages/shipping-company/scgcoll',
            component: <SCGCool />
          },
          {
            name: 'Drop Off Lazada Thailand',
            route: '/pages/shipping-company/lazadaDOF',
            component: <LazadaDOF />
          }
        ]
      }
    ]
  },
  {
    name: 'บริการ',
    icon: <HomeRepairServiceIcon />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: 'Service',
        collapse: [
          {
            name: 'บริการของบริษัท',
            route: '/pages/landing-pages/service',
            component: <Service />
          },
          {
            name: 'รูปแบบการลงทุน',
            route: '/pages/landing-pages/investment',
            component: <Investment />
          }
        ]
      }
    ]
  },
  {
    name: 'ตัวแทนศูนย์',
    icon: <Icon icon="ci:window-check" />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: 'ภูมิภาคต่าง ๆ',
        collapse: [
          {
            name: 'ภาคเหนือ',
            route: '/pages/region/northern',
            component: <RegionNorthern />
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
      },
      {
        name: 'account',
        collapse: [
          {
            name: 'sign in',
            route: '/pages/authentication/sign-in',
            component: <SignIn />
          }
        ]
      }
    ]
  },
  {
    name: 'ช่วยเหลือ',
    icon: <Icon icon="emojione:exclamation-question-mark" />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: 'Additional Services',
        collapse: [
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
