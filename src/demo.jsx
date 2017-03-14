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
    autoFocus
    autoClear
  />
</div>, document.getElementById('app'));
