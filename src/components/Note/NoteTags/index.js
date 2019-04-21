/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ModifyOptions } from './ModifyOptions';

export function NoteTags({ tags, dispatch, _noteId, className, modifyOptionsClassName, noteTitle }) {
  const [text, setText] = useState('');

  const toggleDisplay = (e, nodeType, displayType) => {
    let node = e.target;
    if (nodeType === 'parent') {
      node = node.parentNode;
    } else if (nodeType === 'next') {
      node = node.nextElementSibling;
    } else {
      node = e.target.parentNode.parentNode.parentNode;
    }
    node.style.display === 'none'
      ? node.style.display = displayType
      : node.style.display = 'none';
  }

  return (
    <ul className={className}>
      {tags.map((tag) =>
        <li key={tag._id}>
          {/* Legend */}
          <Link
            onClick={(e) => {
              if (e.target.type === 'submit' || e.target.type === 'text' || e.target.classList.value === 'notHidding') {
                e.preventDefault();
              }
            }}
            to={`comments/${noteTitle}/${_noteId}-${tag._id}`}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>{tag.text}</span>
              <ModifyOptions
                _noteId={_noteId}
                dispatch={dispatch}
                whichTag={tag}
                text={text}
                setText={setText}
                toggleDisplay={toggleDisplay}
                className={modifyOptionsClassName}
              />
            </div>

            {/* Views and Comments section */}
            <div>
              <span>
                <i className="far fa-eye" /> {tag.views}
              </span>
              <span>
                <i className="far fa-comments" /> {tag.comments.length}
              </span>
            </div>
          </Link>
        </li>
      )}
    </ul>
  );
}

NoteTags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape(
      {
        text: PropTypes.string.isRequired,
        views: PropTypes.number.isRequired,
        comments: PropTypes.arrayOf(
          PropTypes.shape(
            {
              content: PropTypes.string.isRequired,
              userName: PropTypes.string.isRequired
            }
          ).isRequired
        ).isRequired,
        ownName: PropTypes.string.isRequired
      }
    ).isRequired

  ).isRequired,

  dispatch: PropTypes.func.isRequired,
  _noteId: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  modifyOptionsClassName: PropTypes.string.isRequired,
};