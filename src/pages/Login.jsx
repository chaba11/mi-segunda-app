import React, { useState } from 'react';
import SessionController from '../networking/controllers/sessionController';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    SessionController.login(username, password).then((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  };
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
