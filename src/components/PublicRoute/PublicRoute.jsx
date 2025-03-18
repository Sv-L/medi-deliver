import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {getToken} from '../../redux/auth/authSelectors';

const PublicRoute = ({ children, restricted = false, redirectTo }) => {
  const isLoggedIn = useSelector(getToken);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;