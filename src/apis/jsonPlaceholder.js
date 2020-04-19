import axios from 'axios';

const USERS_API_PATH = '/users';
const POSTS_API_PATH = 'posts';
const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getUsers = () => httpClient.get(USERS_API_PATH);

export const getUserPosts = (userId) => httpClient.get(
  POSTS_API_PATH,
  {
    params: { userId },
  },
);

export const getPost = (postId) => httpClient.get(
  `${POSTS_API_PATH}/${postId}`,
);

export const createPost = (post) => httpClient.post(
  `${POSTS_API_PATH}`,
  post,
);

export const deletePost = (postId) => httpClient.delete(
  `${POSTS_API_PATH}/${postId}`,
);

export const getPostComments = (postId) => httpClient.get(
  `${POSTS_API_PATH}/${postId}/comments`,
);

