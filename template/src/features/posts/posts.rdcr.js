import _ from 'lodash';
import { ACTIONS } from './posts.actions';

const extractIdFromUrl = url => {
  let stringId = _.last(url.split('/'));
  return parseInt(stringId, 0);
};

const initialState = {
  dataLoading: false,
  data: [],
  crudLoading: false,
  error: null
};

const posts = (state = initialState, action) => {
  let result;
  switch (action.type) {
    case `${ACTIONS.GET_POSTS}_PENDING`:
      result = {
        ...state,
        data: [...state.data],
        dataLoading: true,
        error: null
      };
      break;
    case `${ACTIONS.GET_POSTS}_FULFILLED`:
      result = { ...state, dataLoading: false, data: action.payload.data };
      break;
    case `${ACTIONS.GET_POSTS}_REJECTED`:
      result = { ...state, dataLoading: false, error: action.payload };
      break;
    case `${ACTIONS.CREATE_POST}_PENDING`:
      result = {
        ...state,
        data: [...state.data],
        crudLoading: true,
        error: null
      };
      break;
    case `${ACTIONS.CREATE_POST}_FULFILLED`: {
      result = { ...state, data: [...state.data], crudLoading: false };
      result.data.push(action.payload.data);
      break;
    }
    case `${ACTIONS.CREATE_POST}_REJECTED`:
      result = { ...state, crudLoading: false, error: action.payload };
      break;
    case `${ACTIONS.DELETE_POST}_PENDING`:
      result = {
        ...state,
        data: [...state.data],
        crudLoading: true,
        error: null
      };
      break;
    case `${ACTIONS.DELETE_POST}_FULFILLED`: {
      let id = extractIdFromUrl(action.payload.request.responseURL);
      result = { ...state, data: [...state.data], crudLoading: false };
      _.remove(result.data, { id });
      break;
    }
    case `${ACTIONS.DELETE_POST}_REJECTED`:
      result = { ...state, crudLoading: false, error: action.payload };
      break;
    case `${ACTIONS.UPDATE_POST}_PENDING`:
      result = {
        ...state,
        data: [...state.data],
        crudLoading: true,
        error: null
      };
      break;
    case `${ACTIONS.UPDATE_POST}_FULFILLED`: {
      let id = action.payload.data.id;
      let index = state.data.findIndex(i => i.id === id);
      result = { ...state, data: [...state.data], crudLoading: false };
      result.data = [
        ...state.data.slice(0, index),
        action.payload.data,
        ...state.data.slice(index + 1, state.data.length)
      ];
      break;
    }
    case `${ACTIONS.UPDATE_POST}_REJECTED`:
      result = { ...state, crudLoading: false, error: action.payload };
      break;
    case `${ACTIONS.GET_POST_BY_ID}_PENDING`: {
      result = { ...state, crudLoading: true };
      break;
    }
    case `${ACTIONS.GET_POST_BY_ID}_FULFILLED`: {
      result = { ...state, crudLoading: false };
      break;
    }
    case `${ACTIONS.GET_POST_BY_ID}_REJECTED`: {
      result = { ...state, crudLoading: false, error: action.payload };
      break;
    }
    default:
      result = state;
  }

  return result;
};

export { extractIdFromUrl };
export default posts;
