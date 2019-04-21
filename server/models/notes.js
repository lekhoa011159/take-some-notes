const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NotesSchema = new Schema({
  // each note
  backgroundColor: {
    type: String,
    default: '#ccc',
  },
  title: String,
  tags: [
    // each tag
    {
      text: String,
      views: Number,
      comments: [
        {
          content: String,
          userName: String
        }
      ],
      ownName: String,
      description: String
    }
  ],
}, {
    versionKey: false,
    strict: false
  });

const Notes = mongoose.model('Notes', NotesSchema);

module.exports = Notes;