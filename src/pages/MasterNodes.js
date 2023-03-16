import { HiSignalSlash } from 'react-icons/hi2';
import { TfiSignal } from 'react-icons/tfi';

const masterNodes = [
  {
    id: 1,
    name: 'Master Node 1',
    status: 'connected',
    variant: 'success',
  },
  {
    id: 2,
    name: 'Master Node 2',
    status: 'disconnected',
    variant: 'danger',
  },
  {
    id: 3,
    name: 'Master Node 3',
    status: 'disconnected',
    variant: 'danger',
  },
  {
    id: 4,
    name: 'Master Node 4',
    status: 'connected',
    variant: 'success',
  },
];

const MasterNodes = () => {
  return (
    <section className="section">
      <div className="section-center">
        <div className="title">
          <h1 className="page-title">Master Nodes</h1>
          <div className="title-underline"></div>
        </div>

        {/* progress bars */}
        <div className="masternodes row" style={{ rowGap: '1rem' }}>
          {masterNodes.map((node) => {
            return (
              <div key={node.id} className="col-sm-6 mb-3 mb-sm-0">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">{node.name}</h3>
                    <p className="card-text">
                      <span className="icon">
                        {node.status === 'connected' ? (
                          <TfiSignal size={20} fill="green" />
                        ) : (
                          <HiSignalSlash size={20} fill="red" />
                        )}
                      </span>
                      &nbsp;{node.status}
                    </p>
                    <a
                      href={`/master-nodes/${node.id}`}
                      className="btn btn-primary"
                    >
                      See Details
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default MasterNodes;
