import React from 'react';
import { mount, shallow, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import '../../../../../src/js/config/dev.config.js';
import Navigation from '../../../../../src/js/components/common/navigation/Navigation.cmp.jsx';

configure({ adapter: new Adapter() });

describe(`Navigation component`, function () {
	it(`should have 3 links`, function () {
		let wrapper = render(<Navigation />);
		let lis = wrapper.find('ul li');
		expect(lis.length).toBe(3);
	});
});
