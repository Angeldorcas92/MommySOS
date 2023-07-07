import React, { createContext, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    // Perform login logic and update the authentication state upon successful login
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Perform logout logic and update the authentication state
    setIsLoggedIn(false);
  };

  // Provide the authentication state and methods to the consuming components
  const authContextValue = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
