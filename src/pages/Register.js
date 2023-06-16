import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations  from '../features/auth/auth-operations';

import { NavLink } from "react-router-dom";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

return (
    <div>
    <h1>Registration</h1>

    
    <form  style={styles.form} autoComplete="off"  onSubmit={handleSubmit}>
        <label style={styles.label}>
            Username
        <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
        />
        </label>

        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Register</button>
        <p>
        Already registered? <NavLink to={'/login'}>Sign in</NavLink>
      </p>
      </form>
    </div>
  );
}