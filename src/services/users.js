import { client, checkError } from './client.js';

export function getUser() {
  return client.auth.session();
}

export async function getUserById(user_id) {
  const resp = await client.from('users').select('*').match({ user_id }).single();
  return checkError(resp);
}

export async function fetchUsers() {
  const resp = await client.from('users').select('*');
  return checkError(resp);
}

export async function signUpUser(email, password) {
  const { user, error } = await client.auth.signUp({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function signUpUserDetails(user_id, email, usersName, slackUser, linkedinUrl) {
  const { userDetail, error } = await client.from('users').insert([
    {
      user_id: user_id,
      email: email,
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
