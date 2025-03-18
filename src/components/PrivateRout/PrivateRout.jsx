import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {getToken} from '../../redux/auth/authSelectors';

const PrivateRoute = ({ children, redirectTo }) => {
  const isLoggedIn = useSelector(getToken);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;