import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';

import CharacterCount from '../lib/components/CharacterCount';

describe('CharacterCount', () => {

  const wrapper = shallow(<CharacterCount />);

  it('renders as a <section>', () => {
    assert.equal(wrapper.type(), 'section');
  });

  it('has a default charactersLeft state of 140 characters', function() {
    assert.equal(wrapper.state('charactersLeft'), 140);
  });

  it('allows us to set state', () => {
    const wrapper = mount(<CharacterCount />);
    assert.equal(wrapper.state('charactersLeft'), 140);
    wrapper.setState({ charactersLeft: 20 });
    assert.equal(wrapper.state('charactersLeft'), 20);
  });
});
