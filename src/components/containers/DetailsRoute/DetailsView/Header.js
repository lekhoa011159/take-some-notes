import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ className, resetDescription, tagTitle, noteTitle, history }) => {
  return (
    <div className={className}>
      <div>
        <h1>
          <i className="far fa-sticky-note" />
          {tagTitle}
        </h1>
        <h2> - from "{noteTitle}" Note</h2>
      </div>
      <button onClick={() => {
        history.goBack();
        resetDescription();
      }}>
        <i className="fas fa-times" />
      </button>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string.isRequired,
  tagTitle: PropTypes.string.isRequired,
  noteTitle: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
}

export default Header;