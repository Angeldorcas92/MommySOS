import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase'; // Assuming you have initialized Firebase

const Logout = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await auth.signOut(); 
      history.push('/login'); 
    } catch (error) {
      console.log('Error logging out:', error);
      
    }
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
