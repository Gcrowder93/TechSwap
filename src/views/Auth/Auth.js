import React, { useState } from 'react';
import AuthForm from '../../components/Auth/AuthForm';
import { signInUser, signUpUser, signUpUserDetails } from '../../services/users';
import classnames from 'classnames';
import AuthReg from '../../components/Auth/AuthReg';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('Sign In');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [slackUser, setSlack] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [usersName, setUsersName] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'Sign In') {
        resp = await signInUser(email, password);
      } else {
        resp = await signUpUser(email, password);
        await signUpUserDetails(resp.id, email, slackUser, linkedinUrl, usersName);
      }
      setCurrentUser(resp);
    } catch {
      setErrorMessage('There was an error, please try again.');
    }
  };
  return (
    <div className="Link">
      <br></br>
      <br></br>
      <div classnames="Link">
        <h1
          onClick={() => {
            setType('Sign In');
          }}
          className={classnames({ active: type === 'Sign In' }, 'signInHeader')}
        >
          Sign In
        </h1>
        <h1
          onClick={() => {
            setType('Sign Up');
          }}
          className={classnames({ active: type === 'Sign Up' }, 'signUpHeader')}
        >
          Sign Up
        </h1>
      </div>
      <p> {type} </p>
      {type === 'Sign In' ? (
        <AuthForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          errorMessage={errorMessage}
        />
      ) : (
        <AuthReg
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          errorMessage={errorMessage}
          slackUser={slackUser}
          setSlack={setSlack}
          linkedinUrl={linkedinUrl}
          setLinkedinUrl={setLinkedinUrl}
          usersName={usersName}
          setUsersName={setUsersName}
        />
      )}
    </div>
  );
}
