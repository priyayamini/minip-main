import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = ({setIsLoggedInA}) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    // Check if the email and password match the admin credentials
    if (email === 'admin@gmail.com' && password === 'password') {
      // If credentials are correct, navigate to the home page
      setIsLoggedInA(true);
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'black' }}>
      <div className="card p-4" style={{ width: '400px', backgroundColor:"#00b894" }}>
        <h2 className="text-center mb-4">Admin Login</h2>
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
              placeholder="Enter admin email"
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
              placeholder="Enter admin password"
              required
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-success">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginAdmin;
