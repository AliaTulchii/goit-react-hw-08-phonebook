import { NavLink, Outlet } from 'react-router-dom';
import css from '../components/App.module.css'

export const Layout = () => {
    return <div>
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
    <main>
        <Outlet/>
    </main>
    </div>
}