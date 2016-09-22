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
                                  handleFilterByUser={() => console.log('messages filtered') }
                                  user={'potato'}
                                /> )

        it('should render in an article', function() {
            assert.equal(wrapper.type(), 'article');
        });

        it('should contain li elements for the users passed in', () => {
            assert.lengthOf(wrapper.find('li'), 7)
        })


    });

    // context('Mounted tests', () => {
    // const wrapper = mount(<UsersList 
    //                         messages={ mockMessages } 
    //                         handleFilterByUser={() => console.log('messages filtered')}
    //                         user={'potato'} 
    //                     />)

    //     it('should contain li elements for each user', () => {


    //     }); 

    // });
});
