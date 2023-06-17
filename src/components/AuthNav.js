import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  auth: {
    marginLeft: 'auto',
    marginRight: 24,
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

export default function AuthNav() {
  return (
    <div style={styles.auth}>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
}