import React from 'react';
import { render, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import { PostsCmp } from 'PostsModule/Posts.cmp.jsx';

configure({ adapter: new Adapter() });

describe('Posts test', function () {
	let store, wrapper;
	let posts = {
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
		]
	};

	it('should render 3 posts', function () {
		const wrapper = render(
			<PostsCmp posts={posts} />
		);
		let ulLi = wrapper.find('ul li');
		expect(ulLi.length).toEqual(3);
	});

}); 