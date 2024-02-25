import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.log("Passwords don't match");
      return;
    }

    console.log(formData);
  };

  return (
    <div className='sign'>
      <div className='logo'>
        <img src='11.png' alt="logo" />
      </div>
      <h2 style={{ color: 'blue' }}>Create a new customer account</h2>
      <form onSubmit={handleSubmit}>
        <div className='information'>
          <h3 style={{ color: 'black' }}>Personal Information:</h3>
          <div className='Name'>
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={{ backgroundColor: '#5573FF', color: 'white', width: '504px', height: '60px', padding: '10px' }}
            />
          </div>
          <div className='Name'>
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{ backgroundColor: '#5573FF', color: 'white', width: '504px', height: '60px', padding: '10px' }}
            />
          </div>
        </div>
        <div className='information'>
          <h4 style={{ color: 'black' }}>Address Information:</h4>
          <div className='Name'>
            <label htmlFor="address">Address *</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              style={{ backgroundColor: '#5573FF', color: 'white', width: '504px', height: '60px', padding: '10px' }}
            />
          </div>
          <div className='Name'>
            <label htmlFor="phoneNumber">Phone Number *</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              style={{ backgroundColor: '#5573FF', color: 'white', width: '504px', height: '60px', padding: '10px' }}
            />
          </div>
        </div>
        <div className='information'>
          <h5 style={{ color: 'black' }}>Login Information:</h5>
          <div className='Name'>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ backgroundColor: '#5573FF', color: 'white', width: '504px', height: '60px', padding: '10px' }}
            />
          </div>
          <div className='Name'>
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ backgroundColor: '#5573FF', color: 'white', width: '504px', height: '60px', padding: '10px' }}
            />
          </div>
          <div className='Name'>
            <label htmlFor="confirmPassword">Confirm Password **</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={{ backgroundColor: '#5573FF', color: 'white', width: '504px', height: '60px', padding: '10px' }}
            />
          </div>
        </div>
        <button type="submit" style={{ height: '70px' ,width: '500px', fontSize: '25px' }}>Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
