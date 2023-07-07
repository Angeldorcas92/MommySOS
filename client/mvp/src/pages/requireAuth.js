
import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from './hooks/useAuth';

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation(); // Changed destructuring assignment to a single variable

  return  (
    auth?.user 
    ? <Outlet />
     : <Navigate to="/login" state={{ from: location }} replace /> // Replaced "Location" with "location"
  );
};

export default RequireAuth;


