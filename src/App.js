import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PublishJobs from './pages/PublishJobs';
import ConnectedNodes from './pages/ConnectedNodes';
import SideNav from './components/SideNav';
import Footer from './components/Footer';

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
              <Route path="/connected-nodes" element={<ConnectedNodes />} />
            </Routes>
          </header>
          <Footer />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
