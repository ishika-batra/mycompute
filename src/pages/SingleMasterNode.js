import { useParams } from 'react-router-dom';
import Payment from '../components/Payment';

const SingleMasterNode = () => {
  const params = useParams();

  return (
    <section className="section">
      <div className="section-center">
        <div className="title">
          <h1 className="page-title">Master Node {params.id}</h1>
          <div className="title-underline"></div>
        </div>

        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            pariatur voluptate, autem soluta aliquam cum veniam dicta omnis
            eaque voluptas quisquam ducimus nesciunt rerum dolores voluptatum,
            doloribus, possimus modi voluptatibus nemo sed odit minus libero
            laborum. Ad consectetur quidem ipsam aliquam explicabo numquam, vero
            qui eius, dolor repellendus perferendis obcaecati!
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            quisquam corrupti, enim sequi possimus vero nemo ea neque at sint
            fuga animi!
          </p>

          <hr />

          <div className="payment">
            <h3>Make Payment</h3>

            <Payment />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleMasterNode;
