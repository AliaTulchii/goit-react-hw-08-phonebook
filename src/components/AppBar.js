import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav';
import  authSelectors  from '../features/auth/auth-selectors';



const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid rgb(8, 209, 223)',
    backgroundColor: 'rgb(0, 204, 255)',
    // display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // borderBottom: '1px solid #2A363B',
  },
};

const  AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header style={styles.header}>
    
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;