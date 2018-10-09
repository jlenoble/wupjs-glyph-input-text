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

const GlyphInputText = ({
  glyph, placeholder, autoFocus, autoClear, defaultValue,
  onFocus, onBlur, onSubmit, inhibitBlurOnSubmit,
  groupBaseClass, groupAddClass, groupButtonBaseClass, groupButtonAddClass,
  inputBaseClass, inputAddClass, buttonBaseClass, buttonAddClass,
  glyphBaseClass, glyphAddClass
}) => {
  let inputRef;
  let mouseIsDown = false;
  let _onMouseDown;
  let _onMouseUp;
  let _onBlur = onBlur;

  const handleSubmit = e => {
    e.preventDefault();
    const _e = Object.assign({}, e, {
      target: inputRef
    });
    onSubmit(_e);
  };

  if (onBlur && inhibitBlurOnSubmit) {
    _onMouseDown = () => {
      mouseIsDown = true;
    };

    _onMouseUp = () => {
      mouseIsDown = false;
    };

    _onBlur = e => {
      if (!mouseIsDown) {
        return onBlur(e);
      }
    };
  }

  const _onSubmit = autoClear ? e => {
    handleSubmit(e);
    inputRef.value = '';
  } : handleSubmit;

  const _glyphBaseClass = glyphBaseClass && glyphBaseClass + '-' + glyph || `fa fa-${glyph}`;

  return _react2.default.createElement(
    'form',
    {
      className: (0, _classnames2.default)(groupBaseClass, groupAddClass),
      onMouseDown: _onMouseDown,
      onMouseUp: _onMouseUp,
      onFocus: onFocus,
      onBlur: _onBlur,
      onSubmit: _onSubmit
    },
    _react2.default.createElement('input', {
      type: 'text',
      className: (0, _classnames2.default)(inputBaseClass, inputAddClass),
      placeholder: placeholder,
      autoFocus: autoFocus,
      defaultValue: defaultValue,
      ref: node => {
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
  inhibitBlurOnSubmit: _propTypes2.default.bool,
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
  buttonBaseClass: 'btn btn-secondary',
  inhibitBlurOnSubmit: false
};

exports.default = GlyphInputText;
module.exports = exports.default;