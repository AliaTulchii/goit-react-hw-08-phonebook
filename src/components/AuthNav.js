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
};

export default function AuthNav() {
  return (
    <div style={styles.auth}>
      <NavLink
        to="/register"
        exact
        style={styles.link}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={styles.link}
      >
        Login
      </NavLink>
    </div>
  );
}