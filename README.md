# wupjs-glyph-input-text
Generic input[type="text"] using React

## Content

* [Usage](#usage)
* [Required properties](#required-properties)
  * [glyph](#glyph)
  * [onSubmit](#onsubmit)
  * [exposeInputNode](#exposeinputnode)
* [Theming GlyphInputText](#theming-glyphinputtext)
* [Overriding GlyphInputText defaults](#overriding-glyphinputtext-defaults)

## Usage

A glyph input text is a purely representational React component. It consists of a text input node and a submit button which has as text a single symbol character. By default, we use [Bootstrap 4](http://getbootstrap.com/) and [Font Awesome](http://fontawesome.io/) classes to theme the component. But these settings can be overridden.

```js
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
```

## Required properties

### `glyph`

By default, `glyph` is the name of a character as defined by [Font Awesome](http://fontawesome.io/icons/). You may use it in combination with property `glyphBaseClass` to use a totally different character set. See [Overriding defaults](#overriding-glyphinputtext-defaults).

### `onSubmit`

`onSubmit` property must be a function which will be called whenever the input box content is submitted. As shown in the [Usage](#usage) example, it takes as input the 'submit' event, whose default must be generally inhibited to prevent from a page reload. To access the input text, you must first expose the input node using the third required prop:

### `exposeInputNode`

`exposeInputNode` is a callback that sets a reference to the input node, allowing the calling parent to work with its child data. See [Usage](#usage) for an example.

## Theming `GlyphInputText`

There are 5 props provided to help theme the component:

* `groupAddClass`: To theme the outtermost wrapper
* `groupButtonAddClass`: To theme the button group
* `inputAddClass`: To theme the input element
* `buttonAddClass`: To theme the button element
* `glyphAddClass`: To theme the symbol within the button.

But all come on top of the Bootstrap and Font Awesome defaults. See below to override them.

## Overriding `GlyphInputText` defaults

There are 5 props provided to override the theming of the component:

* `groupBaseClass`: Overrides Bootstrap4 for the outtermost wrapper
* `groupButtonBaseClass`: Overrides Bootstrap4 for the button group
* `inputBaseClass`: Overrides Bootstrap4 for the input element
* `buttonBaseClass`: Overrides Bootstrap4 for the button element
* `glyphBaseClass`: Overrides FontAwesome for the symbol within the button.

## License

wupjs-glyph-input-text is [MIT licensed](./LICENSE).

© 2017 [Jason Lenoble](mailto:jason.lenoble@gmail.com)
