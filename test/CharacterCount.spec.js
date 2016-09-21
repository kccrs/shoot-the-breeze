import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import CharacterCount from '../lib/components/CharacterCount';

describe('CharacterCount', () => {

  const wrapper = shallow(<CharacterCount />);

  it('renders as a <section>', () => {
    assert.equal(wrapper.type(), 'section');
  });

  it('has a default charactersLeft state of 140 characters', function() {
    assert.equal(wrapper.state('charactersLeft'), 140);
  });
});
