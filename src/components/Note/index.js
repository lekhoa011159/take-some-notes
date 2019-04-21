import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { HeaderNote } from './HeaderNote';
import { NoteTags } from './NoteTags';
import { FooterNote } from './FooterNote';
import styles from './index.module.css';

function Note({ note, dispatch, backgroundColor }) {
  const [title, setNewTitle] = useState(note.title);

  return (
    <div className={styles.App} style={{ backgroundColor }}>
      <HeaderNote
        baseTitle={note.title}
        modifiedTitle={title}
        onSetNewTitle={setNewTitle}
        dispatch={dispatch}
        _noteId={note._id}
      />
      <NoteTags
        tags={note.tags}
        dispatch={dispatch}
        _noteId={note._id}
        noteTitle={note.title}
        className={styles.AppTags}
        modifyOptionsClassName={styles.AppTagsModify}
      />
      <FooterNote
        whereId={note._id}
        dispatch={dispatch}
        className={styles.AppFooter}
      />
    </div>
  );
}

Note.propTypes = {
  note: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default Note;