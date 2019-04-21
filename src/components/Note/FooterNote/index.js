import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { handleAddNewTagToNote } from '../../../redux/actions/tags';

export function FooterNote({ dispatch, whereId, className }) {
  const [display, setDisplay] = useState(false);
  const [newTagText, setNewTagText] = useState('');

  const handleAddTag = () => {
    if (newTagText !== '') {
      dispatch(handleAddNewTagToNote(newTagText, 'Admin', whereId));
      setNewTagText('');
      setDisplay(!display);
    } else {
      alert('You need to input something!!!');
    }
  }

  const toggleDisplay = () => {
    setDisplay(!display);
  }

  return (
    <div>
      {
        display

          ? (
            <div className={className}>
              <input
                type="text"
                placeholder="New tag name"
                value={newTagText}
                onChange={(e) => setNewTagText(e.target.value)}
              />

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
                <button onClick={handleAddTag}>Apply</button>
                <button onClick={toggleDisplay}>Cancel</button>
              </div>
            </div>
          )

          : (
            <button className={className} onClick={toggleDisplay}>
              + Add new Tag
            </button>
          )
      }
    </div>
  );
}

FooterNote.propTypes = {
  dispatch: PropTypes.func.isRequired,
  whereId: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}