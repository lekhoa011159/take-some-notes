import axios from 'axios';
import {
  removeTag,
  setNewTag,
  setNewTagName
} from './tags-creators';

export const handleAddNewTagToNote = (text, ownName, _whereId) => {
  return (dispatch) => {
    axios.put('/notes/modify/tags/add', {
      text,
      ownName,
      _whereId
    })
      .then(({ data }) => dispatch(setNewTag(data)))
      .catch((err) => console.error(err));
  }
}

export const handleRemoveTag = (_noteId, _tagId) => {
  return (dispatch) => {
    // remember: axios.delete muốn pass req.body 
    // thì cần wrapper bên ngoài là data object
    axios.delete('/notes/modify/tags/remove', {
      data: {
        _noteId,
        _tagId
      }
    })
      .then(({ data }) => dispatch(removeTag(data)))
      .catch((err) => console.error(err));
  }
}

export const handleModifyTag = (_noteId, _tagId, newTagText) => {
  return (dispatch) => {
    axios.put('/notes/modify/tags/rename', {
      _noteId,
      _tagId,
      newTagText
    })
      .then(({ data }) => dispatch(setNewTagName(data)))
      .catch((err) => console.error(err));
  }
}