import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import MessageInput from '../lib/components/MessageInput';
// import ActionButtons from '..lib/components/ActionButtons';

describe('MessageInput', () => {

  const wrapper = shallow(<MessageInput />);

  it('renders as a <section>', () => {
    assert.equal(wrapper.type(), 'section');
  });

  it('should have an input for the message', () => {
    assert.lengthOf(wrapper.find('textarea'), 1);
  });

  it('should render two <ActionButtons /> components', () => {
    assert.lengthOf(wrapper.find(ActionButtons), 2);
  });

});
