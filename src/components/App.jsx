import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Contacts from "../pages/Contacts";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import operations from 'features/auth/auth-operations';
import Container from 'components/Container/Container';
import AppBar from 'components/AppBar';





const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);
  
  return (      
  
    <Container>
      <AppBar />    
      
      
      <Routes>      
          <Route path='/' element={<Home/>} />
          <Route path="register" element={<Register/>} />
          <Route path="login" element={<Login/>} />
          <Route path="contacts" element={<Contacts/>} />        
      </Routes>
    </Container>
    
  )
  }


export default App;







