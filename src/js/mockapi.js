import axios from 'axios';
axios.defaults.baseURL = 'https://683d54c2199a0039e9e4fc76.mockapi.io/';

//requst for the posts
export const getAllPosts = () => {
  return axios.get(`/posts`);
};

export const createNewPost = post => {
  const fetchOptions = {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${BASE_URL}/posts`, fetchOptions).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export const deletePostById = postId => {
  const fetchOptions = {
    method: 'DELETE',
  };
  return fetch(`${BASE_URL}/posts/${postId}`, fetchOptions).then(respons => {
    if (!respons.ok) {
      throw new Error(respons.status);
    }
    return respons.json();
  });
};
