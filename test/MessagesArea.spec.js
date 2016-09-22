import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import MessagesArea from '../lib/components/MessagesArea';
import mockMessages from './helpers/mock-messages';

describe('Messages Area', function() {
    const wrapper = shallow(<MessagesArea messages={mockMessages} />)

    it('should be a UL', () => {
        assert.lengthOf(wrapper.find('ul'), 1);
    });
    it('should render messages when messages are passed in', () => {
        assert.lengthOf(wrapper.find('Message'), 11);
    });
});
