import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import FilterMessagesByInput from '../lib/components/FilterMessagesByInput';
import mockMessages from './helpers/mock-messages';

describe('Filter Messages By Input', () => {
    const wrapper = shallow(<FilterMessagesByInput />);

    it('renders as an article', () => {
        assert.equal(wrapper.type(), 'article');
    });

    it('renders an input', () => {
        assert.lengthOf(wrapper.find('input'), 1);
    });
});