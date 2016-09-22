import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';
import { pick, map, extend, filter, _ } from 'lodash';

import Application from '../lib/components/Application';
import mockMessages from './'


describe('Application', () => {
  context('shallow tests', () => {

    const wrapper = shallow(<Application />)
    
    it('renders as a <div>', () => {  
      assert.equal(wrapper.type(), 'div');
    });

    it('has a message area component', () => {
      assert.lengthOf(wrapper.find('MessageArea'), 1);
    });
  });

  context('mount tests', function() {
    const wrapper = mount(<Application />);

    it('should have a state', () => {

    });
  });
});
