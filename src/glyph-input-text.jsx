import React, {PropTypes} from 'react';
import classnames from 'classnames';

const GlyphInputText = ({
  glyph, placeholder, autoFocus, autoClear, defaultValue,
  onFocus, onBlur, onSubmit,
  groupBaseClass, groupAddClass, groupButtonBaseClass, groupButtonAddClass,
  inputBaseClass, inputAddClass, buttonBaseClass, buttonAddClass,
  glyphBaseClass, glyphAddClass,
}) => {
  let inputRef;

  const handleSubmit = e => {
    e.preventDefault();
    const _e = Object.assign({}, e, {
      target: inputRef,
    });
    onSubmit(_e);
  };

  const _onSubmit = autoClear ? e => {
    handleSubmit(e);
    inputRef.value = '';
  } : handleSubmit;

  const _glyphBaseClass = (glyphBaseClass && (glyphBaseClass + '-' + glyph)) ||
    `fa fa-${glyph}`;

  return (
    <form
      className={classnames(groupBaseClass, groupAddClass)}
      onFocus={onFocus}
      onBlur={onBlur}
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
};

export default GlyphInputText;
