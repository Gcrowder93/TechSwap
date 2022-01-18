import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { getUserById } from '../../services/users';

export default function EditUser() {
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
    };
  });

  return <div></div>;
}
