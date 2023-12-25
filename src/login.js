import React, { useState } from 'react';
import Swal from 'sweetalert';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        if (userData.email === email && userData.password === password) {
          // Login successful
          Swal({
            icon: "success",
            title: "You have successfully logged in",
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          Swal({
            icon: "error",
            title: "You have entered wrong credentials",
            timer: 3500
          });
        }
      } else {
        alert('No user found. Please signup first.');
      }
    };
  
    return (
      <div>
        <h2>Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };


  export default Login;