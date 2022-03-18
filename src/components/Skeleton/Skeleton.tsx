import React from 'react';
import "./Skeleton.scss";

type SkeletonProps = {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  className, children
}) => (
  <div className={`skeleton ${className || ''}`}>
    {children}
  </div>
);

export default Skeleton;
