import React, { useState } from 'react';

const SignIn = (props) => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const handleChange = (e) => {
    console.log(e);
    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        console.log('no Id');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log({
        email,
        password,
      });
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign In</h5>
      </form>
      <div className="input-field">
        <label htmlFor="email">Email</label>
        <input value={email} type="email" id="email" onChange={handleChange} />
      </div>
      <div className="input-field">
        <label htmlFor="password">Password</label>
        <input
          value={password}
          type="password"
          id="password"
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <button onClick={handleSubmit} className="btn pink lighten-1">
          Login
        </button>
      </div>
    </div>
  );
};

export default SignIn;
