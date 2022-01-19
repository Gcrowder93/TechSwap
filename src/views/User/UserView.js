import React, { useEffect, useState } from 'react';
import { getUserById } from '../../services/users';

export default function UserView({ currentUser }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getUserById(currentUser.user.id);
      setUser(resp);
      setLoading(false);
    };
    fetchData();
  }, [currentUser]);
  return loading ? (
    <h1>LOADING</h1>
  ) : (
    <>
      <div>User Profile View</div>
      <br></br>
      <div>{user.name}</div>
      <button to={`/profile/${user.id}/edit`}>Edit</button>
    </>
  );
}
