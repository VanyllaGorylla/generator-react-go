import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { PostsCmp } from '@/features/posts/Posts.cmp';

describe('Posts.cmp', function() {
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

  it('should render proper HTML', function() {
    const getPosts = jest.fn();
    const tree = renderer
      .create(
        <Router>
          <PostsCmp posts={posts} getPosts={getPosts} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
