import { client, checkError } from './client.js';

export function getUser() {
  return client.auth.session();
}

export async function signUpUser(email, password) {
  const { user, error } = await client.auth.signUp({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function signUpUserDetails(email, password, usersName, slackUser, linkedinUrl) {
  const { userDetail, error } = await client.from('users').insert([
    {
      email: email,
      password: password,
      name: usersName,
      slack_id: slackUser,
      linkedin_url: linkedinUrl,
    },
  ]);
  if (error) {
    throw error;
  }
  return userDetail;
}

export async function editUserDetails(id, { userName, slackUser, linkedinUrl }) {
  const { userDetail, error } = await client
    .from('users')
    .update({ userName, slackUser, linkedinUrl })
    .match({ id });
  if (error) {
    throw error;
  }
  return userDetail;
}

export async function signInUser(email, password) {
  const { user, error } = await client.auth.signIn({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function logout() {
  const response = await client.auth.signOut();
  return checkError(response);
}
