import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const GlyphInputText = ({
  glyph, placeholder, autoFocus, autoClear, defaultValue,
  onFocus, onBlur, onSubmit, inhibitBlurOnSubmit,
  groupBaseClass, groupAddClass, groupButtonBaseClass, groupButtonAddClass,
  inputBaseClass, inputAddClass, buttonBaseClass, buttonAddClass,
  glyphBaseClass, glyphAddClass,
}) => {
  let inputRef;
  let mouseIsDown = false;
  let _onMouseDown;
  let _onMouseUp;
  let _onBlur = onBlur;

  const handleSubmit = e => {
    e.preventDefault();
    const _e = Object.assign({}, e, {
      target: inputRef,
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

  const _glyphBaseClass = (glyphBaseClass && (glyphBaseClass + '-' + glyph)) ||
    `fa fa-${glyph}`;

  return (
    <form
      className={classnames(groupBaseClass, groupAddClass)}
      onMouseDown={_onMouseDown}
      onMouseUp={_onMouseUp}
      onFocus={onFocus}
      onBlur={_onBlur}
      onSubmit={_onSubmit}
    >
      <input
        type="text"
        className={classnames(inputBaseClass, inputAddClass)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        ref={node => {
          inputRef = node;
        }}
      />
      <span className={classnames(groupButtonBaseClass, groupButtonAddClass)}>
        <button
          type="submit"
          className={classnames(buttonBaseClass, buttonAddClass)}
        >
          <i className={classnames(_glyphBaseClass, glyphAddClass)}></i>
        </button>
      </span>
    </form>
  );
};

GlyphInputText.propTypes = {
  glyph: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  autoClear: PropTypes.bool,
  defaultValue: PropTypes.string,
  groupBaseClass: PropTypes.string,
  groupAddClass: PropTypes.string,
  groupButtonBaseClass: PropTypes.string,
  groupButtonAddClass: PropTypes.string,
  inhibitBlurOnSubmit: PropTypes.bool,
  inputBaseClass: PropTypes.string,
  inputAddClass: PropTypes.string,
  buttonBaseClass: PropTypes.string,
  buttonAddClass: PropTypes.string,
  glyphBaseClass: PropTypes.string,
  glyphAddClass: PropTypes.string,
};

GlyphInputText.defaultProps = {
  groupBaseClass: 'input-group',
  inputBaseClass: 'form-control',
  groupButtonBaseClass: 'input-group-btn',
  buttonBaseClass: 'btn btn-secondary',
  inhibitBlurOnSubmit: false,
};

export default GlyphInputText;
