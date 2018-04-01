import { ACTIONS } from '@/features/posts/posts.actions';

import posts from '@/features/posts/posts.rdcr';

describe('post reducer', function() {
  const initialState = {
    data: [
      {
        id: 1,
        title: 'First Post',
        content: 'Posts content'
      },
      {
        id: 2,
        title: 'Second Post',
        content: 'Posts content'
      },
      {
        id: 3,
        title: 'Third Post',
        content: 'Posts content'
      }
    ],
    crudLoading: false,
    loading: false
  };

  let state;

  beforeEach(function() {
    state = { ...initialState, data: [...initialState.data] };
    Object.freeze(initialState);
  });

  it('should add new item to the state', function() {
    let inputItem = { id: 4, title: 'Fourth post', content: 'Lorem ipsum...' };
    let expectedResult = {
      ...initialState,
      data: [...initialState.data, inputItem]
    };
    let result = posts(state, {
      type: `${ACTIONS.CREATE_POST}_FULFILLED`,
      payload: { data: inputItem }
    });
    expect(result.data.length).toEqual(4);
    expect(result).toEqual(expectedResult);
  });

  it('should update item within the state', function() {
    let updateItem = { id: 2, title: 'Fourth post', content: 'Lorem ipsum...' };
    let expectedResult = {
      ...initialState,
      data: [initialState.data[0], updateItem, initialState.data[2]]
    };
    let result = posts(state, {
      type: `${ACTIONS.UPDATE_POST}_FULFILLED`,
      payload: { data: updateItem }
    });
    expect(result).toEqual(expectedResult);
  });

  it('should delete item within the state', function() {
    let url = 'http://example.com/posts/1';
    let expectedResult = {
      ...initialState,
      data: [initialState.data[1], initialState.data[2]]
    };
    let result = posts(state, {
      type: `${ACTIONS.DELETE_POST}_FULFILLED`,
      payload: { request: { responseURL: url } }
    });
    expect(result).toEqual(expectedResult);
  });

  it('should get all posts', function() {
    let expectedResult = { ...initialState };
    let result = posts(state, {
      type: ACTIONS.GET_POSTS,
      payload: { data: [...initialState.data] }
    });
    expect(result).toEqual(expectedResult);
  });
});
