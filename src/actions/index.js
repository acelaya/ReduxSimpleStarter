import * as axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'adidas_training_ac_123';

export const FETCH_POSTS = 'adidas/FETCH_POSTS';
export const CREATE_POSTS = 'adidas/CREATE_POSTS';
export const FETCH_POST = 'adidas/FETCH_POST';
export const DELETE_POST = 'adidas/DELETE_POST';

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
};

export const createPost = (post, callback) => {
  const request = axios.post(`${ROOT_URL}/posts?key=${API_KEY}`, post);
  request.then(callback);

  return {
    type: FETCH_POSTS,
    payload: request
  }
};

export const fetchPost = (postId) => {
  const request = axios.get(`${ROOT_URL}/posts/${postId}?key=${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
};

export const deletePost = (postId, callback) => {
  axios.delete(`${ROOT_URL}/posts/${postId}?key=${API_KEY}`).then(callback);

  return {
    type: DELETE_POST,
    payload: postId
  }
};
