import {
  MdOutlineDashboard,
  MdPublishedWithChanges,
  MdConnectWithoutContact,
} from 'react-icons/md';

const SideNav = () => {
  return (
    <div className="side-navbar">
      <a href="/" className="nav-link" title={'Dashboard'}>
        <MdOutlineDashboard className="nav-icon" />
        <span className="nav-title">Dashboard</span>
      </a>
      <a href="/publish-jobs" className="nav-link" title={'Published Jobs'}>
        <MdPublishedWithChanges className="nav-icon" />
        <span className="nav-title">Published Jobs</span>
      </a>
      <a href="/connected-nodes" className="nav-link" title={'Connected Nodes'}>
        <MdConnectWithoutContact className="nav-icon" />
        <span className="nav-title">Connected Nodes</span>
      </a>
    </div>
  );
};

export default SideNav;
