import React from 'react';
import './Users.css';

export default function EditUserComp({ label, name, onChange, slack_id, linkedin_url, onSubmit }) {
  return (
    <div>
      <div>EDIT</div>
      <div>{label || 'User Info'}</div>
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="name">Name: </label>
        <input id="name" name="name" type="text" value={name} onChange={(e) => onChange(e)} />
        <br />
        <label htmlFor="slack_id">Slack: </label>
        <input
          id="slack_id"
          name="slack_id"
          type="text"
          value={slack_id}
          onChange={(e) => onChange(e)}
        />
        <br />
        <label htmlFor="linkedin_url">LinkedIn: </label>
        <input
          id="linkedin_url"
          name="linkedin_url"
          type="text"
          value={linkedin_url}
          onChange={(e) => onChange(e)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
