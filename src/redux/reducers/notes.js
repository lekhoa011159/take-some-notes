import { TYPES } from '../actions/types';

const notes = (state = [], action) => {
  switch (action.type) {
    // Notes
    case TYPES.FETCH_ALL_NOTES:
      return action.notes;
    case TYPES.ADD_NEW_NOTE:
      return [
        ...state,
        action.payload.note
      ];
    case TYPES.REMOVE_NOTE:
      return state.filter((note) => note._id !== action.payload._noteId);
    case TYPES.CHANGE_NEW_TITLE:
      return state;

    // Tags
    case TYPES.SET_NEW_TAG:
      return state.map((note) => {
        if (note._id === action.payload._whereId) {
          note.tags = note.tags.concat(action.payload.newTag);
        }
        return note;
      });
    case TYPES.REMOVE_TAG:
      return state.map((note) => {
        if (note._id === action.payload._noteId) {
          note.tags = note.tags.filter((tag) => tag._id !== action.payload._tagId);
        }
        return note;
      });
    case TYPES.SET_NEW_TAG_NAME:
      console.log(action);
      return state.map((note) => {
        if (note._id === action.payload._noteId) {
          note.tags = note.tags.map((tag) => {
            if (tag._id === action.payload._tagId) {
              tag.text = action.payload.newTagText;
            }
            return tag;
          });
        }
        return note;
      });

    // Additional Information:
    case TYPES.ADD_DESCRIPTION:
      return state;
    case TYPES.ADD_COMMENT:
      return state;

    default:
      return state;
  }
}

export default notes;