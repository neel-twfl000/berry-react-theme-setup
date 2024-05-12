// assets
import { IconDashboard } from '@tabler/icons-react';

const icons = { IconDashboard };

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
  ]
};

export default dashboard;
