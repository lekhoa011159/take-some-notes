const router = require('express').Router();
const Notes = require('../models/notes');

router.get('/', (req, res, next) => {
  Notes.find({})
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => console.error(err));
});

router.get('/:id', (req, res, next) => {
  Notes.findOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => console.error(err));
});

router.post('/modify/add', (req, res, next) => {
  const newNote = new Notes({
    title: req.body.noteTitle,
    tags: [
      {
        text: 'Tag 1',
        views: 0,
        comments: [],
        ownName: 'Admin'
      }
    ],
  });
  newNote.save();

  res.status(201).json(newNote);
});

router.delete('/modify/remove', (req, res, next) => {
  Notes.deleteOne({ _id: req.body._noteId })
    .exec();

  res.status(202).json({
    _noteId: req.body._noteId
  });
});

router.post('/modify/title', (req, res, next) => {
  Notes
    .updateOne(
      { title: req.body.oldTitle },
      { $set: { title: req.body.newTitle } }
    )
    .exec();

  res.status(202).json({
    oldTitle: req.body.oldTitle,
    newTitle: req.body.newTitle
  });
});

router.put('/modify/color', (req, res, next) => {
  Notes
    .updateOne(
      { _id: req.body._noteId },
      { $set: { backgroundColor: req.body.color } },
    )
    .exec();

  res.status(201).json({
    color: req.body.color
  });
});

module.exports = router;