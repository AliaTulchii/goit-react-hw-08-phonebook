import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import  authSelectors  from '../features/auth/auth-selectors';


const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { state } = useLocation();
  return !isLoggedIn ? children : <Navigate to={state ? state : '/contacts'} />;
};

export default PublicRoute;