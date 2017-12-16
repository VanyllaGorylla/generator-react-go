import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Index from '../../../../../src/js/components/features/index/Index.cmp.jsx';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe(`index.cmp test`, function () {
    it(`should have proper label`, function () {
        const wrapper = render(<Index />);
        let text = wrapper.find('h3').text();
        expect(text).toEqual(`Hello my friend!!`);
    });

});
