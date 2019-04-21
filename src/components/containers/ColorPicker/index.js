import React from 'react';
import { SketchPicker } from 'react-color';
import Note from '../../Note';
import { handleChangeBackgroundColor } from '../../../redux/actions/notes';
import axios from 'axios';

class NoteWithColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: '#ccc',
  }

  componentDidMount() {
    // get initial background color of note
    axios.get(`/notes/${this.props.note._id}`)
      .then(({ data }) => this.setState({ color: data.backgroundColor }))
      .catch((err) => console.error(err));
  }

  handleChangeColor = ({ hex }) => {
    this.setState({
      color: hex.toString()
    }, () => {
      this.props.dispatch(handleChangeBackgroundColor(this.state.color, this.props.note._id));
    });
  }

  handleToggleModal = () => {
    this.setState((prevState) => ({
      displayColorPicker: !prevState.displayColorPicker
    }));
  }

  render() {
    const initialStyle = {
      color: {
        width: '120px',
        height: '20px',
        borderRadius: 3,
      },
      swatch: {
        background: this.state.color,
        borderRadius: 2,
        border: '5px solid #fff',
        display: 'inline-block',
        cursor: 'pointer',
        left: '50%',
        transform: 'translateX(calc(50% + 30px))'
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }
    }

    return (
      <React.Fragment>
        <div
          style={initialStyle.swatch}
          onClick={this.handleToggleModal}
        >
          <div style={initialStyle.color} />
        </div>
        {
          this.state.displayColorPicker
            ? (
              <div style={initialStyle.popover}>
                <div
                  style={initialStyle.cover}
                  onClick={this.handleToggleModal}
                />
                <SketchPicker
                  style={initialStyle}
                  color={this.state.color}
                  onChange={this.handleChangeColor}
                />
              </div>
            )
            : null
        }

        <Note
          {...this.props}
          backgroundColor={this.state.color}
        />
      </React.Fragment>
    );
  }
}

export default NoteWithColorPicker;