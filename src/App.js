import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PublishJobs from './pages/PublishJobs';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import MasterNodes from './pages/MasterNodes';
import SingleMasterNode from './pages/SingleMasterNode';

function App() {
  return (
    <BrowserRouter>
      <main className="page">
        <SideNav />
        <div className="page-content">
          <header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/publish-jobs" element={<PublishJobs />} />
              <Route path="/master-nodes" element={<MasterNodes />} />\
              <Route path="/master-nodes/:id" element={<SingleMasterNode />} />
            </Routes>
          </header>
          <Footer />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
