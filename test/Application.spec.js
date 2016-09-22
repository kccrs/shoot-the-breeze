import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import { pick, map, extend, filter, _ } from 'lodash';

import Application from '../lib/components/Application';
import mockMessages from './helpers/mock-messages';


describe('Application', () => {
  context('shallow tests', () => {

    const wrapper = shallow(<Application />)
    
    it('renders as a <div>', () => {  
      assert.equal(wrapper.type(), 'div');
    });


  });

  context('Check for components', () => {
    const wrapper = mount(<Application />);
    
    it('has a message area component', () => {
      assert.lengthOf(wrapper.find('MessagesArea'), 1);
    });

    it('has a Users List component', () => {
      assert.lengthOf(wrapper.find('UsersList'), 1);
    });

    it('has a Filter Messages By Input component', () => {
      assert.lengthOf(wrapper.find('FilterMessagesByInput'), 1);
    });

    it('has a Sort Buttons component', () => {
      assert.lengthOf(wrapper.find('SortButtons'), 1);
    });

    it('has a Sign In component', () => {
      assert.lengthOf(wrapper.find('SignIn'), 1);
    });

    it('has a Message Input component', () => {
      assert.lengthOf(wrapper.find('MessageInput'), 1);
    });
  });

  context('Check for default state', () => {
    const wrapper = mount(<Application />);
      expect(wrapper.state().messages).to.deepEqual([]);
  });
});
