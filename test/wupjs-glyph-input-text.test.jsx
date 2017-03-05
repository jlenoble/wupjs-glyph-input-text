import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import WupjsGlyphInputText from '../src/wupjs-glyph-input-text';

describe('Testing <WupjsGlyphInputText/>', function () {
  it(`Component <WupjsGlyphInputText/> says 'Hello!'`, function () {
    const wrapper = shallow(
      <WupjsGlyphInputText/>
    );

    expect(wrapper.find('h1').text()).to.equal('Hello!');
  });
});
