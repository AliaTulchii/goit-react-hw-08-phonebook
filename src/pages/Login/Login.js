import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations  from '../../features/auth/auth-operations';
import css from './Login.module.css'
import contact from '../../images/contact.png'




export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(operations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.LoginBox}>
      <div className={css.LoginContainer}>
      <h1 className={css.LoginTitle}>Login page</h1>
          
          

          <form  className={css.LoginForm} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.LoginLabel}>
              Email
              <input
                className={css.LoginInput}
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </label>
    
            <label className={css.LoginLabel}>
              Password
              <input
                className={css.LoginInput}
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </label>
    
            <button className={css.LoginButton} type="submit">Enter</button>
          </form>
      </div>
      
      <img src={contact} alt='' className={css.LoginImg} />
      </div>
      
  );
}