import axios from 'axios';
import { toast } from 'react-toastify';

const ACTIONS = {
  GET_POSTS: 'GET_POSTS',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
  UPDATE_POST: 'UPDATE_POST',
  GET_POST_BY_ID: 'GET_POST_BY_ID'
};

const URL = `${__CONFIG__.REST_SERVER.URL}/posts`;

const getPosts = () => ({
  type: ACTIONS.GET_POSTS,
  payload: axios.get(URL),
  meta: { loading: true }
});

const getPostById = id => ({
  type: ACTIONS.GET_POST_BY_ID,
  payload: axios.get(`${URL}/${id}`),
  meta: { loading: true }
});

const createPosts = post => {
  let promise = axios.post(URL, post);

  promise.then(
    () => {
      toast.info('Post has been created successfully.');
    },
    () => {
      toast.error('Post has not been created.');
    }
  );

  return {
    type: ACTIONS.CREATE_POST,
    payload: promise,
    meta: { loading: true }
  };
};

const deletePost = id => {
  let promise = axios.delete(`${URL}/${id}`);

  promise.then(
    () => {
      toast.info('Post has been deleted successfully.');
    },
    () => {
      toast.error('Post has not been deleted.');
    }
  );

  return {
    type: ACTIONS.DELETE_POST,
    payload: promise,
    meta: { loading: true }
  };
};

const updatePost = post => {
  let promise = axios.put(`${URL}/${post.id}`, post);

  promise.then(
    () => {
      toast.info('Post has been updated successfully.');
    },
    () => {
      toast.error('Post has not been updated.');
    }
  );

  return {
    type: ACTIONS.UPDATE_POST,
    payload: promise,
    meta: { loading: true }
  };
};

export { ACTIONS, getPosts, createPosts, deletePost, updatePost, getPostById };
