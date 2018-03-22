import React from 'react';
import {render} from 'react-dom';
import GlyphInputText from './glyph-input-text';

render(<div>
  <h5>GlyphInputText</h5>
  <GlyphInputText
    glyph="save"
    onSubmit={e => {
      console.log(e.target.value);
    }}
    onFocus={() => {
      console.log('Getting focus');
    }}
    onBlur={() => {
      console.log('Loosing focus');
    }}
    autoFocus
    autoClear
    inhibitBlurOnSubmit
  />
</div>, document.getElementById('app'));
