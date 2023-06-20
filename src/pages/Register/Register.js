import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../features/auth/auth-operations';
import contact from '../../images/contact.png'
import { NavLink } from "react-router-dom";
import css from './Register.module.css'



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
  <div className={css.RegisterBox}>
    <div className={css.RegisterContainer}>
    <h1 className={css.RegisterTitle}>Registration</h1>

    
<form  className={css.RegisterForm} autoComplete="off"  onSubmit={handleSubmit}>
    <label className={css.RegisterLabel}>
        Username
      <input
        className={css.RegisterInput}
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
    />
    </label>

    <label className={css.RegisterLabel}>
      Email
      <input
        className={css.RegisterInput}
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
    </label>

    <label className={css.RegisterLabel}>
      Password
      <input
        className={css.RegisterInput}
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
    </label>

    <button className={css.RegisterButton} type="submit">Register</button>
    <p className={css.RegisterText}>
    Already registered? <NavLink to={'/login'} className={css.RegisterLink}>Sign in</NavLink>
    </p>
  </form>
    </div>
    
    <img src={contact} alt='' className={css.RegisterImg} />

    </div>
  );
}