import { Routes, Route, NavLink } from 'react-router-dom';
import css from '../components/App.module.css'
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Contacts from "../pages/Contacts";




const App = () => {
  
  return (
      
    <div>
      <nav className={css.Navbar}>
        <h1 className={css.ContactList__titleWhite}>Phonebook</h1>
        <ul className={css.NavbarItems}>
          <li >
            <NavLink to="/" end className={css.NavbarItemsHome}>Home</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          
          
          <li >
            <ul>
              <li><NavLink to="/register">Register</NavLink></li>
              <li> <NavLink to="/login">Login</NavLink></li>
            </ul>            
          </li>
          
        </ul>       

      </nav>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/contacts" element={<Contacts/>} />
        
    </Routes>
  </div>

    
  )
  }


export default App;







