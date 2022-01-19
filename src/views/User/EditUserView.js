import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import EditUserComp from '../../components/Users/EditUserComp';
import { editUserDetails, getUserById } from '../../services/users';

export default function EditUserView({ currentUser }) {
  const [input, setInput] = useState({ userName: '', slackUser: '', linkedinUrl: '' });
  const [user, setUser] = useState({ userName: '', slackUser: '', linkedinUrl: '' });
  const [alert, setAlert] = useState('');
  const history = useHistory();
  const id = currentUser.user.id;

  useEffect(() => {
    setInput(user);
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getUserById(id);
      console.log(resp);
      setUser(resp);
    };
    fetchData();
  }, [id]);

  const onChange = ({ target }) => {
    setInput((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await editUserDetails(user.id, {
        userName: input.userName,
        slackUser: input.slackUser,
        linkedinUrl: input.linkedinUrl,
      });
      history.push(`/profile/${user.id}`);
      setUser(resp);
    } catch (e) {
      setAlert(e.message ? e.message : 'WRONG');
    }
  };

  return (
    <div>
      <div>Edit</div>
      <p>{alert}</p>
      <EditUserComp
        label="Edit User Info"
        userName={input.userName}
        slackUser={input.slackUser}
        linkedinUrl={input.linkedinUrl}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}
