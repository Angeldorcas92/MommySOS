import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    // Perform any necessary cleanup or session data clearing
    
    // Redirect the user to the login page
    window.location.href = '/login';
  };

  return (
    <div className="logout-container">
      <h1 className="logout-heading">Logout</h1>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;


