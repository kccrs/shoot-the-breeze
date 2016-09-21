import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import Application from '../lib/components/Application';
import UsersList from '../lib/components/UsersList';
require('locus');

import mockMessages from './helpers/mock-messages';

describe('Users List', () => {
    
    context('Shallow tests', () => {
        const wrapper = shallow(<UsersList 
                                  messages = { mockMessages } 
                                  handleFilterByUser={() => console.log('messages filtered') } /> )
        it('should render in a div', function() {
            assert.equal(wrapper.type(), 'article');
        });
    });

    context('Mounted tests', () => {
    const wrapper = mount(<UsersList 
                            messages={ mockMessages } 
                            handleFilterByUser={() => console.log('messages filtered')} />)
        it('should do the thing it was intended to do', () => {

        }); 

    });
});