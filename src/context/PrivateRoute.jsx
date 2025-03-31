// src/components/PrivateRoute.js
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Assuming you have AuthContext

const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext); // Check if the user is authenticated

  return (
    <Route
      {...rest}
      render={() => (isAuthenticated ? element : <Redirect to="/" />)} // Redirect if not authenticated
    />
  );
};

export default PrivateRoute;
