import React, {useState} from 'react';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
      console.log("logging in : ", { username, password });
  }

  const handleUsernameChange = (e) => {
      setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  }

  return (
      <div>
          <div>
              <label>Username</label>
              <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
          </div>
          <div>
              <label>Password</label>
              <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
          </div>

          <input type='submit' name="submit" onClick={handleLogin}/>
      </div>
  );
}

export default Login;
