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

    it('should have a default messages array that is empty', function() {
      expect(wrapper.state().messages).to.deep.equal([]);
    });

    it('should have a default filtered messages array that is empty', function() {
      expect(wrapper.state().filteredMessages).to.deep.equal([]);
    });

    it('should have a default listIsFiltered property that is false', function() {
      expect(wrapper.state().listIsFiltered).to.equal(false);
    });

    it('should have a default user state that is null', function() {
      expect(wrapper.state().user).to.deep.equal(null);
    });

  });
});
