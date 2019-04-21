import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleModifyTitleToDatabase } from '../../../redux/actions/notes';

function autoExpandTextarea(e) {
  e.target.value.toString().trim();
  e.target.style.height = '1px';
  e.target.style.height = (2 + e.target.scrollHeight) + 'px';
}

const TitleHelper = React.forwardRef((props, ref) => (
  <textarea
    ref={ref}
    type="text"
    placeholder="Your Note title in here..."
    spellCheck={false}
    value={props.modifiedTitle}
    onKeyPress={(e) => {
      const charCode = typeof e.which === 'number' ? e.which : e.keyCode;
      if (charCode === 13) ref.current.blur();
    }}
    onFocus={(e) => autoExpandTextarea(e)}
    onKeyUp={(e) => autoExpandTextarea(e)}
    onChange={(e) => props.onSetNewTitle(e.target.value)}
    onBlur={(e) => props.dispatch(handleModifyTitleToDatabase(props.baseTitle, e.target.value))}
  />
));

TitleHelper.propTypes = {
  modifiedTitle: PropTypes.string.isRequired,
  onSetNewTitle: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  baseTitle: PropTypes.string.isRequired,
};

export default connect(null, null, null, { forwardRef: true })(TitleHelper);