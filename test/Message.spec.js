import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert} from 'chai';
import moment from 'moment';
import mockMessages from './helpers/mock-messages';

import Message from '../lib/components/Message';

describe('Message', () => {

  const wrapper = shallow(<Message message={mockMessages[0]} user={mockMessages[0].user}/>);
  const message = mockMessages[0];

  it('renders as an <li>', () => {
    assert.equal(wrapper.type(), 'li');
  });

  it('should render a message date for the message', () => {
    assert.lengthOf(wrapper.find('.MessageDate'), 2);
    assert.lengthOf(wrapper.find('.FullDate'), 1);
    assert.lengthOf(wrapper.find('.MobileDate'), 1);
  });

  it('should render content for the message', () => {
    assert.lengthOf(wrapper.find('.MessageContent'), 1);
  });

});
