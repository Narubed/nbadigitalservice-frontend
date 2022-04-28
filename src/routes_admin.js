import { Icon } from '@iconify/react';
// Pages
import AdminAboutUs from './layouts/pages/admin/adminabout-us';
import AdminLogout from './layouts/pages/admin/adminlogout';
import AdminTranspot from './layouts/pages/admin/admin-transport';
import ChangeAdmin from './layouts/pages/admin/change-admin';
import AdminCreateRepresentative from './layouts/pages/admin/admin-create-representative';
import AdminEditRepresentativePage from './layouts/pages/admin/admin-edit-representative';
import CreateAdmin from './layouts/pages/admin/create-admin';

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
    name: 'ราคาขนส่ง',
    icon: <Icon icon="fluent:arrow-sync-checkmark-20-filled" />,
    route: '/pages/admin/admin-transpot',
    component: <AdminTranspot />
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
