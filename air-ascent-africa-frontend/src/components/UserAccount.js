import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, loginUser } from '../redux/actions';
import styles from './UserAccount.module.css';

const UserAccount = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const { userInfo, error } = useSelector(state => state.user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(loginUser({ email: formData.email, password: formData.password }));
    } else {
      dispatch(registerUser(formData));
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {!isLogin && (
          <>
            <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required className={styles.input} />
            <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required className={styles.input} />
          </>
        )}
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className={styles.input} />
        <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" required className={styles.input} />
        <button type="submit" className={styles.button}>{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)} className={styles.toggleButton}>{isLogin ? 'Switch to Register' : 'Switch to Login'}</button>
      {error && <div className={styles.error}>{error}</div>}
      {userInfo && <div className={styles.welcomeMessage}>Welcome, {userInfo.firstName}!</div>}
    </div>
  );
};

export default UserAccount;

