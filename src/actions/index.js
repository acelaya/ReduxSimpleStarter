import * as axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'adidas_training_ac_123';

export const FETCH_POSTS = 'adidas/FETCH_POSTS';

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
};
