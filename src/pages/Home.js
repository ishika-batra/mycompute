import ProgressBar from 'react-bootstrap/ProgressBar';

const runningNodes = [
  {
    id: 1,
    name: 'Node 1',
    status: 'Completed',
    percentage: 100,
    variant: 'success',
  },
  {
    id: 2,
    name: 'Node 2',
    status: 'Running',
    percentage: 12,
    variant: 'info',
  },
  {
    id: 3,
    name: 'Node 3',
    status: 'Running',
    percentage: 90,
    variant: 'warning',
  },
  {
    id: 4,
    name: 'Node 4',
    status: 'Running',
    percentage: 33,
    variant: 'danger',
  },
  {
    id: 5,
    name: 'Node 5',
    status: 'Running',
    percentage: 55,
    variant: 'success',
  },
  {
    id: 6,
    name: 'Node 6',
    status: 'Completed',
    percentage: 100,
    variant: 'info',
  },
  {
    id: 7,
    name: 'Node 7',
    status: 'Running',
    percentage: 78,
    variant: 'warning',
  },
  {
    id: 8,
    name: 'Node 8',
    status: 'Running',
    percentage: 45,
    variant: 'danger',
  },
];

const Home = () => {
  return (
    <section className="section">
      <div className="section-center">
        <div className="title">
          <h1 className="page-title">See Results</h1>
          <div className="title-underline"></div>
        </div>

        {/* progress bars */}
        <div className="progress-bars">
          {runningNodes.map((node) => {
            return (
              <div className="progress-bar" key={node.id}>
                <h3>{node.name}</h3>
                <ProgressBar
                  animated={node.status === 'Running' && 'true'}
                  variant={node.variant}
                  now={node.percentage}
                />
                <div className="checkbox">
                  <label className="container">Verified by Network</label>
                  <input
                    readOnly
                    type="checkbox"
                    checked={node.status === 'Completed' && 'checked'}
                  />
                </div>
                <div className="checkbox">
                  <label className="container">Verified by Master Node</label>
                  <input
                    type="checkbox"
                    readOnly
                    checked={node.status === 'Completed' && 'checked'}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
