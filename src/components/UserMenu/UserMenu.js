import { useDispatch, useSelector } from 'react-redux';
import operations from 'features/auth/auth-operations';
import jobs from '../../images/jobs.png';
import  authSelectors  from '../../features/auth/auth-selectors';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 24,
  },
    avatar: {
    borderRadius: 50,
    marginRight: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.537)'
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    fontSize: 20,
    color: '#fff',
    },
    button: {
        width: 100,
        height: 40,
        backgroundColor: 'rgba(240, 248, 255, 0.49)',
        border: '1px solid',
        borderRadius: 50,
        fontWeight: 700,
        fontSize: 16,
        color:'#fff'
  },
};

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    const avatar = jobs;

    return (
        <div style={styles.container}>
            <img src={avatar} alt="" width="32" style={styles.avatar} />
            <span style={styles.name}>Welcome, {name}</span>
            <button style={styles.button} type="button" onClick={() => dispatch(operations.logOut())}>
                Logout
            </button>
        </div>
    );
}