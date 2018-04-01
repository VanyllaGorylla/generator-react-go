import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from '@/components/main/Navigation.cmp';

import renderer from 'react-test-renderer';
describe(`Navigation.cmp test`, function() {
  it(`should proper HTML`, function() {
    const tree = renderer
      .create(
        <Router>
          <Navigation />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
