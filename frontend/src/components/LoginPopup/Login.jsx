import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [currState, setCurrState] = useState('Login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('https://minip-backend-hxj0.onrender.com/api/user/login', loginData)
      .then(response => {
        if (response.data.success) {
          setIsLoggedIn(true);
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          alert(response.data.message);
        }
      })
      .catch(err => console.error(err));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post('https://minip-backend-hxj0.onrender.com/api/user/register', signupData)
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => console.error(err));
  };

  const handleTabChange = (tab) => {
    setCurrState(tab);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'black' }}>
      <div className="card p-4" style={{ width: '400px' , backgroundColor:"InactiveCaption"}}>
        <h2 className="text-center mb-4">{currState === 'Login' ? 'Login' : 'Signup'}</h2>
        {currState === 'Login' && (
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{ fontWeight: 'bold' }}>Email</label>
              <input
                name='email'
                type="email"
                className="form-control"
                id="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{ fontWeight: 'bold' }}>Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-success">Login</button>
            </div>
          </form>
        )}

        {currState === 'Signup' && (
          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label" style={{ fontWeight: 'bold' }}>Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={signupData.name}
                onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{ fontWeight: 'bold' }}>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={signupData.email}
                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{ fontWeight: 'bold' }}>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={signupData.password}
                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                placeholder="Create a password"
                required
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-success">Signup</button>
            </div>
          </form>
        )}

        <p className="text-center mt-3">
          {currState === 'Login' ? (
            <>
              Don’t have an account? <button className="btn-link" onClick={() => handleTabChange('Signup')} style={{ color: '#00b894', cursor: 'pointer' }}>Signup</button>
            </>
          ) : (
            <>
              Already have an account? <button className="btn-link" onClick={() => handleTabChange('Login')} style={{ color: '#00b894', cursor: 'pointer' }}>Login</button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default Login;
