const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connection;

// require all routes
const notesRouter = require('./routes/notes');
const tagsRouter = require('./routes/tags');
const addsRouter = require('./routes/additionals');

// connect to database
mongoose.connect(
  'mongodb://localhost:27017/notesDB',
  { useNewUrlParser: true }
);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log(`Connected`);
});

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/notes', notesRouter);
app.use('/notes/modify/tags', tagsRouter);
app.use('/notes/modify/additionals', addsRouter);

app.listen(3030, () => {
  console.log(`Connected on port 3030`);
});