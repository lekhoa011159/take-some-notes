import axios from 'axios';
import {
  setInitialNotes,
  setNotesTitle,
  setNewNote,
  removeNote,
  setBackgroundColor
} from './notes-creators';

export const fetchInitialNotes = () => {
  return (dispatch) => {
    axios.get('/notes')
      .then(({ data }) => {
        dispatch(setInitialNotes(data));
        return data;
      })
      .catch((err) => console.error(err));
  }
}

export const handleAddNewNote = (noteTitle) => {
  return (dispatch) => {
    axios.post('/notes/modify/add', {
      noteTitle
    })
      .then(({ data }) => dispatch(setNewNote(data)))
      .catch((err) => console.error(err));
  }
}

export const handleRemoveNote = (_noteId) => {
  return (dispatch) => {
    axios.delete('/notes/modify/remove', {
      data: {
        _noteId
      }
    })
      .then(({ data }) => dispatch(removeNote(data)))
      .catch((err) => console.error(err));
  }
}

export const handleModifyTitleToDatabase = (oldTitle, newTitle) => {
  return (dispatch) => {
    if (oldTitle !== newTitle) {
      axios.post('/notes/modify/title', {
        oldTitle,
        newTitle
      })
        .then(({ data }) => dispatch(setNotesTitle(data)))
        .catch((err) => console.error(err));
    }
  }
}

export const handleChangeBackgroundColor = (color, _noteId) => {
  return (dispatch) => {
    axios.put('/notes/modify/color', {
      color,
      _noteId
    })
      .then(({ data }) => dispatch(setBackgroundColor(data)))
      .catch((err) => console.error(err));
  }
}