import _ from 'lodash';
import { ACTIONS } from './posts.actions';

const extractIdFromUrl = url => {
	let stringId = _.last(url.split('/'));
	return parseInt(stringId, 0);
};

const posts = (state = [], action) => {
	let result;
	switch (action.type) {
		case ACTIONS.GET_POSTS:
			result = action.payload.data;
			break;
		case ACTIONS.CREATE_POST:
			result = [...state, action.payload.data];
			break;
		case ACTIONS.DELETE_POST: {
			let id = extractIdFromUrl(action.payload.request.responseURL);
			result = [...state];
			_.remove(result, { id });
			break;
		}
		case ACTIONS.UPDATE_POST: {
			let id = action.payload.data.id;
			let index = state.findIndex(i => i.id === id);
			result = [
				...state.slice(0, index),
				action.payload.data,
				...state.slice(index + 1, state.length),
			];
			break;
		}
		default:
			result = state;
	}

	return result;
};

export { extractIdFromUrl };
export default posts;
