import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';
import mockMessages from './helpers/mock-messages';

import SortButtons from '../lib/components/SortButtons';

describe('SortButtons', () => {

    context('Shallow test', () => {
        const wrapper = shallow(<SortButtons messages={mockMessages} />)
        it('should render in an article', () => {
            assert.equal(wrapper.type(), 'article');
        });

        it('should have 2 buttons', () => {
            assert.lengthOf(wrapper.find('ActionButtons'), 2);
        });

    });

    context('Mount tests', () => {
        const wrapper = mount(<SortButtons />)

    });
});