import axios from 'axios';
import { setNewDescription, setNewComment } from './additionals-creators';

export const handleAddNewDescription = (_tagId, description) => {
  return (dispatch) => {
    axios.post('/notes/modify/additionals/description/add', {
      _tagId,
      description
    })
      .then(() => dispatch(setNewDescription()))
      .catch((err) => console.error(err));
  }
}

export const handleAddNewComment = (_tagId, comment) => {
  return (dispatch) => {
    axios.post('/notes/modify/additionals/comment/add', {
      _tagId,
      comment
    })
      .then(() => dispatch(setNewComment()))
      .catch((err) => console.error(err));
  }
}