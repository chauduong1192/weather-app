import "./NotFound.scss";

interface NotFoundProps {
  message: string
}
const DEFAULT_MESSAGE = "An error occurred";

const NotFound: React.FC<NotFoundProps> = ({ message = DEFAULT_MESSAGE }) => (
  <div className="not-found-text my-3 mw-100 text-center" role="alert">
    {message}
  </div>
);

export default NotFound;
