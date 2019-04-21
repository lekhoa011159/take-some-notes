import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Details from './DetailsView';
import { handleAddNewDescription, handleAddNewComment } from '../../../redux/actions/additionals';

class DetailsRoute extends React.Component {
  state = {
    comments: [],
    noteTitle: '',
    tagTitle: '',
  };

  getTagInformations = (_noteId, _tagId) => {
    axios.get('/notes/' + _noteId)
      .then(({ data }) => {
        this.setState({
          noteTitle: data.title
        });
        data.tags.map((tag) => {
          if (tag._id === _tagId) {
            this.setState({
              tagTitle: tag.text,
              description: tag.description,
              comments: tag.comments
            });
          }
          return tag;
        });
      })
      .catch((err) => console.error(err));
  }

  handleChangeInput = (e, type) => {
    type === 'description'
      ? this.setState({
        description: e ? e.target.value : ""
      })
      : this.setState({
        comment: e ? e.target.value : ""
      })
  }

  handleSaveDescription = (e, _tagId, desc) => {
    e.preventDefault();
    this.props.dispatch(handleAddNewDescription(_tagId, desc));
  }

  handlePushingComment = (e, _tagId, comment) => {
    e.preventDefault();
    this.props.dispatch(handleAddNewComment(_tagId, comment))
  }

  resetDescription = () => {
    this.setState({ description: "" });
  }

  updateComment = (newComment) => {
    this.setState((prevState) => ({
      comments: prevState.comments.concat(newComment)
    }));
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/comments/:title/:id" render={() =>
            <Details
              handleChangeInput={this.handleChangeInput}
              comment={this.state.comment}
              comments={this.state.comments}
              handlePushingComment={this.handlePushingComment}
              description={this.state.description}
              handleSaveDescription={this.handleSaveDescription}
              resetDescription={this.resetDescription}
              noteTitle={this.state.noteTitle}
              tagTitle={this.state.tagTitle}
              getTagInformations={this.getTagInformations}
              updateComment={this.updateComment}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default DetailsRoute;