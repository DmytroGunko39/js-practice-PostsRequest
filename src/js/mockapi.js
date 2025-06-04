import axios from 'axios';
axios.defaults.baseURL = 'https://683d54c2199a0039e9e4fc76.mockapi.io/';

//requst for the posts
export const getAllPosts = () => axios.get(`/posts`);

export const createNewPost = post => axios.post(`/posts`, post);

export const deletePostById = postId => axios.delete(`/posts/${postId}`);
