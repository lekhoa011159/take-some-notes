import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from '../index.module.css';
import TitleHelper from './TitleHelper';
import { handleRemoveNote } from '../../../redux/actions/notes';

export function HeaderNote(props) {
  const ref = React.createRef();

  const confirmDeleteNode = (_noteId) => {
    if (window.confirm('Are you sure want to delete this note?'))
      props.dispatch(handleRemoveNote(_noteId));
  }

  useEffect(() => {
    ref.current.focus();
    ref.current.blur();
  }, []);

  return (
    <div className={styles.AppHeader}>
      <TitleHelper
        ref={ref}
        {...props}
      />
      <button onClick={() => confirmDeleteNode(props._noteId)}>X</button>
    </div>
  );
}

HeaderNote.propTypes = {
  dispatch: PropTypes.func.isRequired,
  _noteId: PropTypes.string.isRequired
};