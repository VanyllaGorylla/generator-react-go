import { ACTIONS } from '../../../../../src/js/components/features/posts/posts.actions';

import posts from '../../../../../src/js/components/features/posts/posts.rdcr';


describe('post reducer', function () {

	let initialState = [
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
	];

	let state;

	beforeEach(function () {
		state = [...initialState];
	});

	it('should add new item to the state', function () {
		let inputItem = { id: 4, title: 'Fourth post', content: 'Lorem ipsum...' };
		let expectedResult = [...initialState, inputItem];
		let result = posts(state, { type: ACTIONS.CREATE_POST, payload: { data: inputItem } });
		expect(result.length).toEqual(4);
		expect(result).toEqual(expectedResult);
	});

	it('should update item within the state', function () {
		let updateItem = { id: 2, title: 'Fourth post', content: 'Lorem ipsum...' };
		let expectedResult = [initialState[0], updateItem, initialState[2]];
		let result = posts(state, { type: ACTIONS.UPDATE_POST, payload: { data: updateItem } });
		expect(result).toEqual(expectedResult);
	});

	it('should delete item within the state', function () {
		let url = 'http://example.com/posts/1';
		let expectedResult = [initialState[1], initialState[2]];
		let result = posts(state, { type: ACTIONS.DELETE_POST, payload: { request: { responseURL: url } } });
		expect(result).toEqual(expectedResult);
	});

	it('should get all posts', function () {
		let expectedResult = [...initialState];
		let result = posts([], { type: ACTIONS.GET_POSTS, payload: { data: [...initialState] } });
		expect(result).toEqual(expectedResult);
	});

});