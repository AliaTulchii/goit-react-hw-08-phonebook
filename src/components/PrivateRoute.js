import { useSelector } from 'react-redux';
import { Navigate, useLocation} from 'react-router-dom';
import  authSelectors  from '../features/auth/auth-selectors';

/**
 * 1. Он должен повторять API Route
 *  2. Он должен рендерить Route
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на redirectTo
 */

export default function PrivateRoute({children}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const location = useLocation();
  return isLoggedIn ? children : <Navigate to="/login" state={location}/>;
}