import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { editUserDetails, getUserById } from '../../services/users';
import EditUserComp from '../../components/Users/Users';

export default function EditUserView() {
  const [input, setInput] = useState({ userName: '', slackUser: '', linkedinUrl: '' });
  const [user, setUser] = useState({ userName: '', slackUser: '', linkedinUrl: '' });
  const [alert, setAlert] = useState('');
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    setInput(user);
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getUserById(id);
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
      history.push(`/profile/${resp[0].id}`);
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
    </div>
  );
}
