import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center', 
    border: 'none',
  },

  h1: {
      color: 'white',
        margin: 35,
        marginRight: 178,
        fontSize: 36,
  },

  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    fontSize: 20,
    color: '#fff',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => {
  return <div>
    <nav style={styles.nav}>
      <h1 style={styles.h1}>Phonebook</h1>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
       Home
    </NavLink>

     <NavLink
      to="/contacts"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Contacts
    </NavLink>

    </nav>
    <main>
      <Outlet />
    </main>
  </div>

  
};

export default Navigation;