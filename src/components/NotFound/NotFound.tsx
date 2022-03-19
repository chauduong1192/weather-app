import React from "react";
import "./NotFound.scss";

interface NotFoundProps {
  message?: string;
}
const DEFAULT_MESSAGE = "An error occurred";

const NotFound: React.FC<NotFoundProps> = ({ message }) => (
  <div className="not-found-text" role="alert">
    {message || DEFAULT_MESSAGE}
  </div>
);

export default NotFound;
