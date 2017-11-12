import axios from 'axios';


const ACTIONS = {
	'GET_POSTS': 'GET_POSTS',
	'CREATE_POST': 'CREATE_POST',
	'DELETE_POST': 'DELETE_POST',
	'UPDATE_POST': 'UPDATE_POST'
};

const URL = `${CONFIG.REST_SERVER.URL}/posts`;

const getPosts = () => ({
	type: ACTIONS.GET_POSTS,
	payload: axios.get(URL)
});

const createPosts = post => ({
	type: ACTIONS.CREATE_POST,
	payload: axios.post(URL, post)
});

const deletePost = id => ({
	type: ACTIONS.DELETE_POST,
	payload: axios.delete(`${URL}/${id}`)
});

const updatePost = post => ({
	type: ACTIONS.UPDATE_POST,
	payload: axios.put(`${URL}/${post.id}`, post)
});

export { ACTIONS, getPosts, createPosts, deletePost, updatePost };
