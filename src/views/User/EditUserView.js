import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import EditUserComp from '../../components/Users/EditUserComp';
import { editUserDetails, getUserById } from '../../services/users';

export default function EditUserView({ currentUser }) {
  // const [input, setInput] = useState({ userName: '', slackUser: '', linkedinUrl: '' });
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
      const resp = await editUserDetails(user.id, {
        userName: user.name,
        slackUser: user.slack_id,
        linkedinUrl: user.linkedin_url,
      });
      history.push(`/profile/${user.id}`);
      setUser(resp);
    } catch (e) {
      setAlert(e.message ? e.message : 'WRONG');
    }
  };

  console.log(user);

  if (loading) return <h1>LOADING</h1>;

  return (
    <div>
      <div>Edit</div>
      <p>{alert}</p>
      <EditUserComp
        label="Edit User Info"
        userName={user.name}
        slackUser={user.slack_id}
        linkedinUrl={user.linkedin_url}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}
