import React, { useEffect, useState } from 'react';
import { getUserById } from '../../services/users';

export default function UserView({ currentUser }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      console.log(currentUser.user.id);
      const resp = await getUserById(currentUser.user.id);
      console.log(resp);
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
      <div>{user.userName}</div>
    </>
  );
}
