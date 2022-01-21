import React from 'react';

export default function AuthReg({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  errorMessage,
  slackUser,
  setSlack,
  linkedinUrl,
  setLinkedinUrl,
  usersName,
  setUsersName,
}) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>{errorMessage}</h3>
      <div className="form-controls">
        <label>Email:</label>
        <input
          placeholder="Enter Valid Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-controls">
        <label>Password:</label>
        <input
          placeholder="Minimum 6 digits req."
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-controls">
        <label>Name:</label>
        <input
          placeholder="Name"
          type="text"
          value={usersName}
          onChange={(e) => setUsersName(e.target.value)}
        />
      </div>
      <div className="form-controls">
        <label>Slack:</label>
        <input
          placeholder="Slack User ID" 
          type="text"
          value={slackUser} 
          onChange={(e) => setSlack(e.target.value)}
        />
      </div>
      <div className="form-controls">
        <label>LinkedIn</label>
        <input
          placeholder="LinkedIn URL"
          type="text"
          value={linkedinUrl}
          onChange={(e) => setLinkedinUrl(e.target.value)}
        />
      </div>

      <input className="submit" type="submit" />
    </form>
  );
}
