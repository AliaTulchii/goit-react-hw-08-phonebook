import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contacts from "./pages/Contacts";
import { Layout } from './components/Layout';




const App = () => {
  
  return (      
  
    <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="register" element={<Register/>} />
          <Route path="login" element={<Login/>} />
          <Route path="contacts" element={<Contacts/>} />
        </Route>
      
        
    </Routes> 
  )
  }


export default App;







