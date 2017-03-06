import React from 'react';
import {render} from 'react-dom';
import GlyphInputText from './glyph-input-text';

let inputNode;

render(<div>
  <h5>GlyphInputText</h5>
  <GlyphInputText
    glyph="save"
    onSubmit={e => {
      e.preventDefault();
      console.log(inputNode.value);
    }}
    exposeInputNode={node => {
      inputNode = node;
    }}
    autoFocus
    autoClear
  />
</div>, document.getElementById('app'));
