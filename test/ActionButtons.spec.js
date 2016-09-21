import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import ActionButtons from '../lib/components/ActionButtons';

describe('ActionButtons', () => {

  const button = shallow(<ActionButtons />);

  it('renders as a <button>', () => {
    assert.equal(button.type(), 'button');
  });

  it('should have props for id, disabled, handleClick, and text', function () {
    assert.isDefined(button.props('id'));
    assert.isDefined(button.props('disabled'));
    assert.isDefined(button.props('handleClick'));
    assert.isDefined(button.props('text'));
  });

});
