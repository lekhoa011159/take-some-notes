import { TYPES } from './types';

export const setInitialNotes = (notes) => ({
  type: TYPES.FETCH_ALL_NOTES,
  notes
});

export const setNewNote = (note) => ({
  type: TYPES.ADD_NEW_NOTE,
  payload: {
    note
  }
});

export const removeNote = ({ _noteId }) => ({
  type: TYPES.REMOVE_NOTE,
  payload: {
    _noteId
  }
});

export const setNotesTitle = ({ oldTitle, newTitle }) => ({
  type: TYPES.CHANGE_NEW_TITLE,
  payload: {
    oldTitle,
    newTitle
  }
});

export const setBackgroundColor = ({ color }) => ({
  type: TYPES.SET_BACKGROUND_COLOR,
  payload: {
    color
  }
});