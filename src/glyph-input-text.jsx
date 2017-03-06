import React, {PropTypes} from 'react';
import classnames from 'classnames';

const GlyphInputText = ({
  glyph, placeholder, autoFocus, autoClear, defaultValue,
  exposeInputNode, onFocus, onSubmit,
  groupBaseClass, groupAddClass, groupButtonBaseClass, groupButtonAddClass,
  inputBaseClass, inputAddClass, buttonBaseClass, buttonAddClass,
  glyphBaseClass, glyphAddClass,
}) => {
  const refs = {};
  const _onSubmit = autoClear ? e => {
    onSubmit(e);
    refs.inputNode.value = '';
  } : onSubmit;
  const _glyphBaseClass = (glyphBaseClass && (glyphBaseClass + '-' + glyph)) ||
    `fa fa-${glyph}`;

  return (
    <form
      className={classnames(groupBaseClass, groupAddClass)}
      onFocus={onFocus}
      onSubmit={_onSubmit}
    >
      <input
        type="text"
        className={classnames(inputBaseClass, inputAddClass)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        ref={node => {
          exposeInputNode(node);
          refs.inputNode = node;
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
  exposeInputNode: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
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
