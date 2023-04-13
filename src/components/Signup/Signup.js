import React from 'react';
import '../../auth.css';
const Signup = () => {
  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
