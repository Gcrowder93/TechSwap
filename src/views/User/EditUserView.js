import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import EditUserComp from '../../components/Users/EditUserComp';
import { editUserDetails, getUserById } from '../../services/users';

export default function EditUserView({ currentUser }) {
  const [user, setUser] = useState({ name: '', slack_id: '', linkedin_url: '' });
  const [alert, setAlert] = useState('');
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const id = currentUser.user.id;

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getUserById(id);
      setUser(resp);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const onChange = ({ target }) => {
    setUser((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await editUserDetails(user.id, {
        name: user.name,
        slack_id: user.slack_id,
        linkedin_url: user.linkedin_url,
      });
      history.push(`/profile/${user.id}`);
    } catch (err) {
      setAlert(err.message ? err.message : 'WRONG');
    }
  };

  if (loading) return <h1>LOADING</h1>;

  return (
    <div>
      <p>{alert}</p>
      <EditUserComp
        label="Edit User Info"
        name={user.name}
        slack_id={user.slack_id}
        linkedin_url={user.linkedin_url}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
