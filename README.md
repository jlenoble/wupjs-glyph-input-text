# wupjs-glyph-input-text
Generic input[type="text"] using React

## Content

* [Usage](#usage)
* [Required properties](#required-properties)
  * [glyph](#glyph)
  * [onSubmit](#onsubmit)
* [Theming GlyphInputText](#theming-glyphinputtext)
* [Overriding GlyphInputText defaults](#overriding-glyphinputtext-defaults)
* [Special props](#special-props)

## Usage

A glyph input text is a purely representational React component. It consists of a text input node and a submit button which has as text a single symbol character. By default, we use [Bootstrap 4](http://getbootstrap.com/) and [Font Awesome](http://fontawesome.io/) classes to theme the component. But these settings can be overridden.

```js
import React from 'react';
import {render} from 'react-dom';
import GlyphInputText from './glyph-input-text';

render(<div>
  <h5>GlyphInputText</h5>
  <GlyphInputText
    glyph="save"
    onSubmit={e => {
      e.preventDefault();
      console.log(e.target.value);
    }}
    autoFocus
    autoClear
  />
</div>, document.getElementById('app'));
```

## Required properties

### `glyph`

By default, `glyph` is the name of a character as defined by [Font Awesome](http://fontawesome.io/icons/). You may use it in combination with property `glyphBaseClass` to use a totally different character set. See [Overriding `GlyphInputText` defaults](#overriding-glyphinputtext-defaults).

### `onSubmit`

`onSubmit` property must be a function which will be called whenever the input box content is submitted. As shown in the [Usage](#usage) example, it takes as input a 'submit' event. Internally, its `preventDefault` is called so that the component never provokes a page reload. Moreover the event is not exactly the event that is automatically generated on submit (which is related to the wrapping form) but a mixin of that event with `{target: inputNode}`, so that you can access the underlying data by using `e.target.value`.

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

## Special props

* `placeholder`: Placeholder text within the underlying text input
* `autoFocus`: Have the underlying input autofocus
* `autoClear`: Have the underlying input autoclear on submit
* `inhibitBlurOnSubmit`: As it says: Submitting always blurs *first* if not inhibited and this is probably unwanted behavior if bluring somehow destroys/detaches the widget
* `defaultValue`: Initial value to appear in the text input (not a placeholder, but an actual value that will be submitted by default)
* `onFocus`: A function called when the underlying input gets focus
* `onBlur`: A function called when the underlying input loses focus

## License

wupjs-glyph-input-text is [MIT licensed](./LICENSE).

© 2017 [Jason Lenoble](mailto:jason.lenoble@gmail.com)
