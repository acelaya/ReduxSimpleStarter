import * as axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'adidas_training_ac_123';

export const FETCH_POSTS = 'adidas/FETCH_POSTS';
export const FETCH_POST = 'adidas/FETCH_POST';
export const DELETE_POST = 'adidas/DELETE_POST';

export class PostActions {
  constructor(axios) {
    this.axios = axios;
    this.fetchPosts = this.fetchPosts.bind(this);
    this.createPost = this.createPost.bind(this);
    this.fetchPost = this.fetchPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  fetchPosts() {
    const request = this.axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);

    return {
      type: FETCH_POSTS,
      payload: request
    }
  }

  createPost(post, callback) {
    const request = this.axios.post(`${ROOT_URL}/posts?key=${API_KEY}`, post);
    request.then(callback);

    return {
      type: FETCH_POSTS,
      payload: request
    }
  }

  fetchPost(postId) {
    const request = this.axios.get(`${ROOT_URL}/posts/${postId}?key=${API_KEY}`);

    return {
      type: FETCH_POST,
      payload: request
    }
  }

  deletePost(postId, callback) {
    this.axios.delete(`${ROOT_URL}/posts/${postId}?key=${API_KEY}`).then(callback);

    return {
      type: DELETE_POST,
      payload: postId
    }
  }
}

export default new PostActions(axios);
