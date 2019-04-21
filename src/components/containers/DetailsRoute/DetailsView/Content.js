import React from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';

function Content(props) {
  const {
    handleSaveDescription,
    handlePushingComment,
    handleChangeInput,
    className,
    commentsClassName,
    _tagId,
    setActive,
    isUserFocusDescription,
    description,
    comment,
    comments,
    updateComment
  } = props;


  return (
    <div className={className}>
      <form onSubmit={(e) => handleSaveDescription(e, _tagId, description)}>
        <label>
          <i className="far fa-file-alt" />
          Description:
            <textarea
            onClick={() => setActive(true)}
            onBlur={() => isUserFocusDescription ? setActive(false) : ""}
            className={!isUserFocusDescription ? "inactive" : ""}
            spellCheck={false}
            value={description}
            onChange={(e) => handleChangeInput(e, 'description')}
            placeholder="Write your descriptions about this tag so that everyone else could know how this tag works..."
          />
          {description && <p>*Remember to save what you have written.</p>}
        </label>

        <div>
          <button type="submit">Save</button>
          <button onClick={() => {
            if (window.confirm('Are you sure want to remove this description?')) handleChangeInput("", 'description');
          }}>
            <i className="fas fa-times" />
          </button>
        </div>
      </form>

      <form onSubmit={(e) => {
        const newComment = {
          content: comment,
          userName: 'Admin'
        };
        handlePushingComment(e, _tagId, newComment);
        updateComment(newComment);
      }}>
        <label>
          <i className="far fa-comment-alt" />
          Comment:
            <textarea
            spellCheck={false}
            value={comment}
            onChange={(e) => handleChangeInput(e, 'comment')}
            placeholder="Anything else that you wan't to note down for this tag, please write it into this section..."
          />
        </label>

        <div>
          <button style={{ marginRight: 8 }} type="submit">Send</button>
          <button></button>
        </div>
      </form>
      {/* {comments.length > 0
        ? <Comments
          commentsClassName={commentsClassName}
          comments={comments}
        />
        : ""
      } */}
    </div>
  );
}

Content.propTypes = {
  handleSaveDescription: PropTypes.func.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  _noteId: PropTypes.string.isRequired,
  _tagId: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
  isUserFocusDescription: PropTypes.bool.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, undefined]).isRequired,
  comment: PropTypes.string.isRequired
};

export default Content;