import React, { useState, useEffect } from 'react';
import styles from '../index.module.css';
import { withRouter } from 'react-router-dom';
import Content from './Content';
import Header from './Header';
import Sidebar from './Sidebar';

function Details(props) {
  const [active, setActive] = useState(false);
  const {
    description,
    comment,
    comments,
    handleChangeInput,
    handleSaveDescription,
    handlePushingComment,
    match,
    getTagInformations,
    noteTitle,
    tagTitle,
    history,
    resetDescription,
    updateComment
  } = props;
  const [_noteId, _tagId] = match.params.id.split('-');

  useEffect(() => {
    getTagInformations(_noteId, _tagId);
  }, []);

  return (
    <div tabIndex={-1} className={styles.App}>
      <Header
        className={styles.AppHeader}
        tagTitle={tagTitle}
        noteTitle={noteTitle}
        history={history}
        resetDescription={resetDescription}
      />

      <Content
        handlePushingComment={handlePushingComment}
        handleSaveDescription={handleSaveDescription}
        handleChangeInput={handleChangeInput}
        commentsClassName={styles.AppComments}
        className={styles.AppContent}
        _noteId={_noteId}
        _tagId={_tagId}
        setActive={setActive}
        isUserFocusDescription={active}
        description={description}
        comment={comment}
        comments={comments}
        updateComment={updateComment}
      />

      {/* Sidebar */}
      {/* <Sidebar /> */}
    </div>
  );
}

export default withRouter(Details);