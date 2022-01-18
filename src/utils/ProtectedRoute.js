import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function ProtectedRoute({ currentUser, path, children, ...rest }) {
  return (
    <div>
      <Route
        path={path}
        {...rest}
        render={() => (currentUser ? { ...children } : <Redirect to="/sign-in" />)}
      />
    </div>
  );
}
