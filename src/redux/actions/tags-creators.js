import { TYPES } from './types';

export const setNewTag = ({ newTag, _whereId }) => ({
  type: TYPES.SET_NEW_TAG,
  payload: {
    newTag,
    _whereId
  }
});

export const removeTag = ({ _noteId, _tagId }) => ({
  type: TYPES.REMOVE_TAG,
  payload: {
    _noteId,
    _tagId
  }
});

export const setNewTagName = ({ _noteId, _tagId, newTagText }) => ({
  type: TYPES.SET_NEW_TAG_NAME,
  payload: {
    _noteId,
    _tagId,
    newTagText
  }
});