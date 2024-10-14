import AgentsIcon from '@components/Icons/AgentsIcon';
import CollegeIcon from '@components/Icons/CollgeIcon';
import DashboardIcon from '@components/Icons/DashboardIcon';
import EmptyHeartIcon from '@components/Icons/EmptyHeartIcon';
import FamiliesIcon from '@components/Icons/FamiliesIcon';
import PeopleIcon from '@components/Icons/PeopleIcon';
import SearchIcon from '@components/Icons/SearchIcon';
import SpellIcon from '@components/Icons/SpellIcon';
import UserIcon from '@components/Icons/UserIcon';
import WallerIcon from '@components/Icons/WalletIcon';

interface Route {
  id: string;
  name: string;
  to: string;
  icon: JSX.Element;
  type?: string;
  options?: {
    icon: Function;
    name: string;
    href: string;
  }[];
}

export const adminHeaderRoutes: Route[] = [
  {
    id: '1',
    name: 'Dashboard',
    to: '/admin/dashboard',
    icon: <DashboardIcon />,
  },
  {
    id: '2',
    name: 'Families',
    to: '/admin/families',
    icon: <FamiliesIcon />,
  },
  {
    id: '3',
    name: 'Admission',
    to: '/admin/admission-professionals',
    icon: <PeopleIcon />,
  },
  { id: '4', name: 'Agents', to: '/admin/agents', icon: <AgentsIcon /> },
];

export const familyHeaderRoutes: Route[] = [
  {
    id: 'Profile',
    name: 'Profile',
    to: '/family/profile',
    icon: <UserIcon />,
  },
  { id: 'FederalSai', name: 'SAI Number', to: '/family/federal-sai', icon: <WallerIcon /> },
  {
    id: 'SearchColleges',
    type: 'dropdown',
    options: [
      {
        icon: SearchIcon,
        name: 'Search Colleges',
        href: '/family/college/search',
      },
      {
        icon: EmptyHeartIcon,
        name: 'Favorites',
        href: '/family/college-favorites',
      },
      // {
      //   icon: CompareIcon,
      //   name: 'Comparison',
      //   href: '/family/college-compare',
      // },
      // {
      //   icon: BookmarkIcon,
      //   name: 'Saved Searches',
      //   href: '/family/college-saved-searches',
      // },
    ],
    name: 'Colleges',
    to: '/family/college',
    icon: <CollegeIcon />,
  },
  { id: '4', name: 'Resources', to: '/family/resources', icon: <SpellIcon />, type: 'link' },
];

export const admissionProfessionalUserDropdownRoutes = [
  { id: '1', name: 'Profile', to: '/admission-professional/profile', icon: <UserIcon /> },
];
export const adminUserDropdownRoutes = [
  { id: '1', name: 'Profile', to: '/admin/profile', icon: <UserIcon /> },
];
export const agentUserDropdownRoutes = [
  { id: '1', name: 'Profile', to: '/agent/profile', icon: <UserIcon /> },
];
