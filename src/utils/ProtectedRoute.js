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

export function ProtectedAuthRoute({
  currentUser,
  currentProduct,
  userId,
  path,
  children,
  ...rest
}) {
  console.log('ALSO HERE', currentUser);
  console.log('HERE', currentProduct);
  console.log('CURRENT USER', currentUser);
  console.log('CURRENT PRODUCT', currentProduct);
  console.log('CURRENT userID', userId);
  return (
    <div>
      <Route
        path={path}
        {...rest}
        render={() =>
          currentUser === currentProduct ? { ...children } : <Redirect to="/sign-in" />
        }
      />
    </div>
  );
}
// const user = getUserById(currentUser.id);
