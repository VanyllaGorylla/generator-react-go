import React from 'react';
import { Index } from '@/features/index';

import renderer from 'react-test-renderer';

describe(`Index.cmp test`, function() {
  it(`should render propr HTML`, function() {
    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
