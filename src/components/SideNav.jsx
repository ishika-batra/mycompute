import {
  MdOutlineDashboard,
  MdPublishedWithChanges,
  MdConnectWithoutContact,
} from 'react-icons/md';
import { useLocation } from 'react-router-dom';

const links = [
  {
    id: 1,
    path: '/',
    title: 'Dashboard',
    icon: <MdOutlineDashboard className="nav-icon" />,
  },
  {
    id: 2,
    path: '/publish-jobs',
    title: 'Publish Jobs',
    icon: <MdPublishedWithChanges className="nav-icon" />,
  },
  {
    id: 3,
    path: '/master-nodes',
    title: 'Master Nodes',
    icon: <MdConnectWithoutContact className="nav-icon" />,
  },
];

const SideNav = () => {
  const { pathname } = useLocation();

  return (
    <div className="side-navbar">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.path}
          className={`${pathname === link.path && 'active-nav-link'} nav-link`}
          title={link.title}
        >
          {link.icon}
          <span className="nav-title">{link.title}</span>
        </a>
      ))}
    </div>
  );
};

export default SideNav;
