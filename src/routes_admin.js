import { Icon } from '@iconify/react';
// Pages
import AdminAboutUs from './layouts/pages/admin/adminabout-us';
import AdminLogout from './layouts/pages/admin/adminlogout';
import ChangeAdmin from './layouts/pages/admin/change-admin';
import AdminCreateRepresentative from './layouts/pages/admin/admin-create-representative';
import AdminEditRepresentativePage from './layouts/pages/admin/admin-edit-representative';
import CreateAdmin from './layouts/pages/admin/create-admin';
import AdminNews from './layouts/pages/admin/admin-news';
import AdminCreateNews from './layouts/pages/admin/admin-create-news';
import AdminAdvert from './layouts/pages/admin/admin-advert';
import AdminCountry from './layouts/pages/admin/admin-country';
import AdminFirstPage from './layouts/pages/admin/admin-first-page';

const routes = [
  {
    route: '/pages/admin/adminabout',
    component: <AdminAboutUs />
  },
  {
    route: '/pages/admin/admin-create-representative',
    component: <AdminCreateRepresentative />
  },
  {
    route: '/pages/admin/admin-edit-representative',
    component: <AdminEditRepresentativePage />
  },
  {
    route: '/pages/admin/create-admin',
    component: <CreateAdmin />
  },
  {
    route: '/pages/admin/create-news',
    component: <AdminCreateNews />
  },
  // {
  //   name: 'จัดการ api',
  //   icon: <Icon icon="fluent:arrow-sync-checkmark-20-filled" />,
  //   route: '/pages/admin/admin-AdminCountry',
  //   component: <AdminCountry />
  // },
  {
    name: 'จัดการหน้าหลัก',
    icon: <Icon icon="fluent:arrow-sync-checkmark-20-filled" />,
    route: '/pages/admin/first-page',
    component: <AdminFirstPage />
  },
  {
    name: 'โฆษณา',
    icon: <Icon icon="fluent:arrow-sync-checkmark-20-filled" />,
    route: '/pages/admin/admin-advert',
    component: <AdminAdvert />
  },
  {
    name: 'จัดการข่าวสาร',
    icon: <Icon icon="fluent:arrow-sync-checkmark-20-filled" />,
    route: '/pages/admin/admin-news',
    component: <AdminNews />
  },
  {
    name: 'จัดการผู้ดูแล',
    icon: <Icon icon="fluent:arrow-sync-checkmark-20-filled" />,
    route: '/pages/admin/change-admin',
    component: <ChangeAdmin />
  },
  {
    name: 'ออกจากระบบ',
    icon: <Icon icon="fluent:arrow-sync-checkmark-20-filled" />,
    route: '/pages/admin/adminblog',
    component: <AdminLogout />
  }
];

export default routes;
