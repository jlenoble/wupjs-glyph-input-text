'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlyphInputText = function GlyphInputText(_ref) {
  var glyph = _ref.glyph,
      placeholder = _ref.placeholder,
      autoFocus = _ref.autoFocus,
      autoClear = _ref.autoClear,
      defaultValue = _ref.defaultValue,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
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

  var inputRef = void 0;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var _e = Object.assign({}, e, {
      target: inputRef
    });
    onSubmit(_e);
  };

  var _onSubmit = autoClear ? function (e) {
    handleSubmit(e);
    inputRef.value = '';
  } : handleSubmit;

  var _glyphBaseClass = glyphBaseClass && glyphBaseClass + '-' + glyph || 'fa fa-' + glyph;

  return _react2.default.createElement(
    'form',
    {
      className: (0, _classnames2.default)(groupBaseClass, groupAddClass),
      onFocus: onFocus,
      onBlur: onBlur,
      onSubmit: _onSubmit
    },
    _react2.default.createElement('input', {
      type: 'text',
      className: (0, _classnames2.default)(inputBaseClass, inputAddClass),
      placeholder: placeholder,
      autoFocus: autoFocus,
      defaultValue: defaultValue,
      ref: function ref(node) {
        inputRef = node;
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
  glyph: _propTypes2.default.string.isRequired,
  onSubmit: _propTypes2.default.func.isRequired,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  placeholder: _propTypes2.default.string,
  autoFocus: _propTypes2.default.bool,
  autoClear: _propTypes2.default.bool,
  defaultValue: _propTypes2.default.string,
  groupBaseClass: _propTypes2.default.string,
  groupAddClass: _propTypes2.default.string,
  groupButtonBaseClass: _propTypes2.default.string,
  groupButtonAddClass: _propTypes2.default.string,
  inputBaseClass: _propTypes2.default.string,
  inputAddClass: _propTypes2.default.string,
  buttonBaseClass: _propTypes2.default.string,
  buttonAddClass: _propTypes2.default.string,
  glyphBaseClass: _propTypes2.default.string,
  glyphAddClass: _propTypes2.default.string
};

GlyphInputText.defaultProps = {
  groupBaseClass: 'input-group',
  inputBaseClass: 'form-control',
  groupButtonBaseClass: 'input-group-btn',
  buttonBaseClass: 'btn btn-secondary'
};

exports.default = GlyphInputText;
module.exports = exports['default'];