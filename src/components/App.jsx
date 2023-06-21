import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Contacts from "../pages/Contacts";
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import operations from 'features/auth/auth-operations';
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import authSelectors from 'features/auth/auth-selectors';





const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);
  
  return (
    !isFetchingCurrentUser  && (      
  
      <Container >
  
        <AppBar/>    
        
        
        <Routes>      
          <Route path='/' element={<Home />} />
          
          <Route path="/register" element={
            <PublicRoute>
            <Register/>
            </PublicRoute>}
          />
          
          <Route path="/login" element={
            <PublicRoute>
            <Login/>
            </PublicRoute>}
          />
          
          <Route path="/contacts" element={
            <PrivateRoute >
            <Contacts/>
            </PrivateRoute>}
          /> 
          
          
        </Routes>
      </Container>
      
    )
  )
  }


export default App;







