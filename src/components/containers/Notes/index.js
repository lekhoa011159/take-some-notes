import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './index.module.css';
import NoteWithColorPicker from '../ColorPicker';

import { fetchInitialNotes, handleAddNewNote } from '../../../redux/actions/notes';
import NoNoteFound from '../../Layout/NoNoteFound';
import DetailsRoute from '../DetailsRoute';

class Notes extends React.Component {
  state = {
    noteText: '',
    displayTextbox: false,
  };

  componentDidMount() {
    this.props.dispatch(fetchInitialNotes());
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      displayTextbox: false,
      noteText: ''
    });

    if (this.state.displayTextbox) {
      this.props.dispatch(handleAddNewNote(this.state.noteText));
    }
  }

  handleSubmitByButton = () => {
    this.setState((prevState) => ({
      displayTextbox: !prevState.displayTextbox
    }));
    if (this.state.noteText) {
      if (this.state.displayTextbox) {
        this.props.dispatch(handleAddNewNote(this.state.noteText));
      }
    }
  }

  render() {
    return (
      <div className={styles.App} style={
        this.props.notes.length === 0 ? { flexFlow: 'column wrap', height: '100vh' } : {}
      }>
        <DetailsRoute dispatch={this.props.dispatch} />

        {
          this.props.notes.length > 0
            ? this.props.notes.map((note) => (
              <div key={note._id} style={{ flexBasis: 320 }}>
                <NoteWithColorPicker
                  dispatch={this.props.dispatch}
                  note={note}
                >
                </NoteWithColorPicker>
              </div>
            ))
            : <NoNoteFound />

        }

        <div style={this.props.notes.length === 0 ? { margin: '0 auto' } : {}}>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Your note title in here..."
              value={this.state.noteText}
              onChange={(e) => this.setState({ noteText: e.target.value })}
              style={{ display: this.state.displayTextbox ? 'block' : 'none' }}
            />
          </form>

          <button type="submit" onClick={this.handleSubmitByButton}>
            {
              this.props.notes.length === 0
                ? '+ Add your First Note'
                : '+ Add new Note'
            }
          </button>
        </div>

      </div>
    );
  }
}

Notes.propTypes = {
  dispatch: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(
          PropTypes.object.isRequired
        ).isRequired
      }
    ).isRequired
  ).isRequired
};

const mapStateToProps = (state) => ({
  notes: state.notes
});

export default connect(
  mapStateToProps,
)(Notes);