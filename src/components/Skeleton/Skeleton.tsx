import "./Skeleton.scss";

type SekeltonProps = {
  style?: any;
  className?: string;
  pulseColor?: string;
}

const Sekelton: React.FC<SekeltonProps> = ({
  style, className, children
}) => (
  <div
    style={style}
    className={`skeleton ${className || ''}`}
  >
    {children}
  </div>
);

export default Sekelton;
