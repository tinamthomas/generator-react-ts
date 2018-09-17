import * as React from 'react';
import Hello from '../../src/components/Hello';

import {shallow} from 'enzyme';


describe('Hello component', () => {
    it('should show greeting', () => {
        const wrapper = shallow(<Hello name='me'/>);

        expect(wrapper.text()).toBe('Hello me!');
    });
});

