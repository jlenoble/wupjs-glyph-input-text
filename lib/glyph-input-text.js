'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlyphInputText = function GlyphInputText(_ref) {
  var glyph = _ref.glyph,
      placeholder = _ref.placeholder,
      autoFocus = _ref.autoFocus,
      autoClear = _ref.autoClear,
      defaultValue = _ref.defaultValue,
      exposeInputNode = _ref.exposeInputNode,
      onFocus = _ref.onFocus,
      onSubmit = _ref.onSubmit,
      groupBaseClass = _ref.groupBaseClass,
      groupAddClass = _ref.groupAddClass,
      groupButtonBaseClass = _ref.groupButtonBaseClass,
      groupButtonAddClass = _ref.groupButtonAddClass,
      inputBaseClass = _ref.inputBaseClass,
      inputAddClass = _ref.inputAddClass,
      buttonBaseClass = _ref.buttonBaseClass,
      buttonAddClass = _ref.buttonAddClass,
      glyphBaseClass = _ref.glyphBaseClass,
      glyphAddClass = _ref.glyphAddClass;

  var refs = {};
  var _onSubmit = autoClear ? function (e) {
    onSubmit(e);
    refs.inputNode.value = '';
  } : onSubmit;
  var _glyphBaseClass = glyphBaseClass && glyphBaseClass + '-' + glyph || 'fa fa-' + glyph;

  return _react2.default.createElement(
    'form',
    {
      className: (0, _classnames2.default)(groupBaseClass, groupAddClass),
      onFocus: onFocus,
      onSubmit: _onSubmit
    },
    _react2.default.createElement('input', {
      type: 'text',
      className: (0, _classnames2.default)(inputBaseClass, inputAddClass),
      placeholder: placeholder,
      autoFocus: autoFocus,
      defaultValue: defaultValue,
      ref: function ref(node) {
        exposeInputNode(node);
        refs.inputNode = node;
      }
    }),
    _react2.default.createElement(
      'span',
      { className: (0, _classnames2.default)(groupButtonBaseClass, groupButtonAddClass) },
      _react2.default.createElement(
        'button',
        {
          type: 'submit',
          className: (0, _classnames2.default)(buttonBaseClass, buttonAddClass)
        },
        _react2.default.createElement('i', { className: (0, _classnames2.default)(_glyphBaseClass, glyphAddClass) })
      )
    )
  );
};

GlyphInputText.propTypes = {
  glyph: _react.PropTypes.string.isRequired,
  exposeInputNode: _react.PropTypes.func.isRequired,
  onSubmit: _react.PropTypes.func.isRequired,
  onFocus: _react.PropTypes.func,
  placeholder: _react.PropTypes.string,
  autoFocus: _react.PropTypes.bool,
  autoClear: _react.PropTypes.bool,
  defaultValue: _react.PropTypes.string,
  groupBaseClass: _react.PropTypes.string,
  groupAddClass: _react.PropTypes.string,
  groupButtonBaseClass: _react.PropTypes.string,
  groupButtonAddClass: _react.PropTypes.string,
  inputBaseClass: _react.PropTypes.string,
  inputAddClass: _react.PropTypes.string,
  buttonBaseClass: _react.PropTypes.string,
  buttonAddClass: _react.PropTypes.string,
  glyphBaseClass: _react.PropTypes.string,
  glyphAddClass: _react.PropTypes.string
};

GlyphInputText.defaultProps = {
  groupBaseClass: 'input-group',
  inputBaseClass: 'form-control',
  groupButtonBaseClass: 'input-group-btn',
  buttonBaseClass: 'btn btn-secondary'
};

exports.default = GlyphInputText;
module.exports = exports['default'];