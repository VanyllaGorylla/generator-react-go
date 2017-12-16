import _ from 'lodash';
import { ACTIONS } from './posts.actions';

const extractIdFromUrl = url => {
	let stringId = _.last(url.split('/'));
	return parseInt(stringId, 0);
};


const initialState = {
	dataLoading: false,
	data: [],
	crudLoading: false
};

const posts = (state = initialState, action) => {
	let result;
	switch (action.type) {
		case `${ACTIONS.GET_POSTS}_PENDING`:
			result = { ...state, data: [...state.data], dataLoading: true };
			break;
		case `${ACTIONS.GET_POSTS}_FULFILLED`:
			result = { ...state, dataLoading: false, data: action.payload.data };
			break;
		case `${ACTIONS.CREATE_POST}_PENDING`:
			result = { ...state, data: [...state.data], crudLoading: true };
			break;
		case `${ACTIONS.CREATE_POST}_FULFILLED`: {
			result = { ...state, data: [...state.data], crudLoading: false };
			result.data.push(action.payload.data);
			break;
		}
		case `${ACTIONS.DELETE_POST}_PENDING`:
			result = { ...state, data: [...state.data], crudLoading: true };
			break;
		case `${ACTIONS.DELETE_POST}_FULFILLED`: {
			let id = extractIdFromUrl(action.payload.request.responseURL);
			result = { ...state, data: [...state.data], crudLoading: false };
			_.remove(result.data, { id });
			break;
		}
		case `${ACTIONS.UPDATE_POST}_PENDING`:
			result = { ...state, data: [...state.data], crudLoading: true };
			break;
		case `${ACTIONS.UPDATE_POST}_FULFILLED`: {
			let id = action.payload.data.id;
			let index = state.data.findIndex(i => i.id === id);
			result = { ...state, data: [...state.data], crudLoading: false };
			result.data = [
				...state.data.slice(0, index),
				action.payload.data,
				...state.data.slice(index + 1, state.data.length),
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
