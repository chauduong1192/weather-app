import React from 'react';
import Skeleton from '../Skeleton';
import "./ForeCastLoader.scss";

const ForeCastLoader: React.FC = () => (
  <div className="forecast-box loader">
    {[...Array(5)].map((load, idx) => 
      <div key={idx} className="forecast">
        <Skeleton className="img" />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    )}
  </div>
);

export default ForeCastLoader;
