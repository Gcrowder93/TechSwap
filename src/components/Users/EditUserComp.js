import React from 'react';

export default function EditUserComp({
  label,
  userName,
  slackUser,
  linkedinUrl,
  onChange,
  onSubmit,
}) {
  return (
    <div>
      <div>EDIT</div>
      <div>{label || 'User Info'}</div>
      <form onSubmit={onSubmit}>
        <label htmlFor="userName">Name: </label>
        <input id="userName" name="userName" type="text" value={userName} onChange={onChange} />

        <label htmlFor="slackUser">Slack: </label>
        <input id="slackUser" name="slackUser" type="text" value={slackUser} onChange={onChange} />

        <label htmlFor="linkedinUrl">LinkedIn: </label>
        <input
          id="linkedinUrl"
          name="linkedinUrl"
          type="text"
          value={linkedinUrl}
          onChange={onChange}
        />
      </form>
    </div>
  );
}
