import React, { useState } from 'react';
import axios from 'axios';

function Login() {
	  const [username, setUsername] = useState('');
	  const [password, setPassword] = useState('');

	  const handleLogin = async () => {
		      try {
			            const response = await axios.post('http://localhost:3000/api/auth/login', {
					            username,
					            password,
					          });
			            localStorage.setItem('token', response.data.token);
			          } catch (error) {
					        console.error('Error logging in', error);
					      }
		    };

	  return (
		      <div>
		        <input
		          type="text"
		          value={username}
		          onChange={(e) => setUsername(e.target.value)}
		          placeholder="Username"
		        />
		        <input
		          type="password"
		          value={password}
		          onChange={(e) => setPassword(e.target.value)}
		          placeholder="Password"
		        />
		        <button onClick={handleLogin}>Login</button>
		      </div>
		    );
}

export default Login;

