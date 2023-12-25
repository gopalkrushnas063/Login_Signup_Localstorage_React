import React, { useState } from 'react';
import Swal from 'sweetalert';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    const userData = {
      name,
      email,
      phone,
      password,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    // You can add additional validation logic before storing the data
    Swal({
        icon: "success",
        title: "Signup Successfully Done",
        showConfirmButton: false,
        timer: 1500
      });
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};




export default Signup;