import Skeleton from '../Skeleton';
import "./ForeCastLoader.scss";

const Loader: React.FC = () => (
  <div className="forecast loader">
    <Skeleton className="img" />
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </div>
);

const ForeCastLoader: React.FC = () => (
  <div className="forecast-box">
    {[...Array(3)].map(load => <Loader key={load} />)}
  </div>
);

export default ForeCastLoader;
