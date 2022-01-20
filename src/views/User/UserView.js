import React, { useEffect, useState } from 'react';
import { getUserById } from '../../services/users';

export default function UserView({ id }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      console.log(id);
      const resp = await getUserById(id);
      setUser(resp);
      setLoading(false);
    };
    fetchData();
  }, [id]);
  return loading ? (
    <h1>LOADING</h1>
  ) : (
    <>
      <div>User Profile View</div>;<div>{user.userName}</div>
    </>
  );
}
