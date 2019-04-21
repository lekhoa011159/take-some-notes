import React from 'react';
import PropTypes from 'prop-types';

const Comments = ({ comments, commentsClassName }) => {
  return (
    <ul className={commentsClassName}>
      {comments.map((comment) => (
        <li key={comment._id}>
          <div>
            <p>{comment.content}</p>
            <p>- {comment.userName}</p>
          </div>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default Comments;