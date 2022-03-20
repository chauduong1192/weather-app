import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import "./LazyImage.scss";

interface LazyImageProps {
  className?: string;
  src: string;
  alt?: string;
  aspectRatio?: number;
}

const LazyImage: React.FC<LazyImageProps> = ({
  className,
  src,
  alt,
  aspectRatio = 2 / 3,
}: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<any>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  const handleOnLoad = () => {
    setLoaded(true);
  };

  return (
    <div className={classNames("lazy-image", className)}>
      <div style={{ paddingBottom: `${100 / aspectRatio}%` }} />
      <div
        className="no-lqip"
        style={{ backgroundColor: loaded ? "transparent" : "#eee" }}
      />
      <img
        loading="lazy"
        src={src}
        alt={alt || "no alt"}
        ref={imgRef}
        onLoad={handleOnLoad}
        className={classNames("source", loaded && "loaded")}
      />
    </div>
  );
};

export default LazyImage;
