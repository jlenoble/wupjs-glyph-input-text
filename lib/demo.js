'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _glyphInputText = require('./glyph-input-text');

var _glyphInputText2 = _interopRequireDefault(_glyphInputText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    'h5',
    null,
    'GlyphInputText'
  ),
  _react2.default.createElement(_glyphInputText2.default, {
    glyph: 'save',
    onSubmit: e => {
      console.log(e.target.value);
    },
    onFocus: () => {
      console.log('Getting focus');
    },
    onBlur: () => {
      console.log('Loosing focus');
    },
    autoFocus: true,
    autoClear: true,
    inhibitBlurOnSubmit: true
  })
), document.getElementById('app'));