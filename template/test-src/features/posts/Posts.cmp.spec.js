import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import moxios from 'moxios';

import WrapperPostsCmp, { PostsCmp } from '@/features/posts/Posts.cmp';

describe('Posts.cmp', function() {
  let store;

  beforeEach(() => {
    moxios.install();
    store = configureStore()({
      posts: {
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
        dataLoading: false,
        crudLoading: false
      }
    });
  });

  it('should render proper HTML when data is provided and there is no loading atm', function() {
    moxios.stubRequest('/posts', {
      status: 200
    });

    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <WrapperPostsCmp />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render proper HTML when loading is performing atm', function() {
    const tree = renderer
      .create(
        <Router>
          <PostsCmp data={[]} dataLoading={true} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(function() {
    moxios.uninstall();
  });
});
