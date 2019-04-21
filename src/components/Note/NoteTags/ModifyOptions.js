/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import { handleRemoveTag, handleModifyTag } from '../../../redux/actions/tags';

export const ModifyOptions = (props) => {
  const {
    whichTag,
    _noteId,
    dispatch,
    toggleDisplay,
    text,
    setText,
    className
  } = props;

  return (
    <div className={className}>
      <button tabIndex="-1" onClick={(e) => toggleDisplay(e, 'next', 'flex')}>
        ...
      </button>
      <div style={{
        display: 'none',
        flexFlow: 'column wrap'
      }}>
        <button
          onClick={() => {
            if (window.confirm('Are you sure want to delete this tag?')) {
              dispatch(handleRemoveTag(_noteId, whichTag._id));
            }
          }}
        >
          Delete
        </button>
        <button>Modify:</button>

        <form>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder=" Input new text in here..."
          />
          <div className="notHidding">
            <button
              onClick={(e) => {
                if (text !== '') {
                  setText('');
                  dispatch(handleModifyTag(_noteId, whichTag._id, text));
                }
                toggleDisplay(e, 'parentNode.parentNode.parentNode', 'none')
              }}
            >
              Apply
            </button>
            <button onClick={(e) => toggleDisplay(e, 'parentNode.parentNode.parentNode', 'none')}>Cancel</button>
          </div>
        </form>
      </div>
    </div >
  );
}

ModifyOptions.propTypes = {
  whichTag: PropTypes.object.isRequired,
  _noteId: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  toggleDisplay: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
};