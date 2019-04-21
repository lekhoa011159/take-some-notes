const router = require('express').Router();
const mongoose = require('mongoose');
const Notes = require('../models/notes');

router.put('/add', (req, res, next) => {
  const newTag = {
    _id: new mongoose.Types.ObjectId(),
    text: req.body.text,
    ownName: req.body.ownName,
    views: 0,
    comments: []
  }

  Notes
    .updateOne(
      { _id: req.body._whereId },
      { $push: { tags: newTag } })
    .exec();

  res.status(201).json({
    _whereId: req.body._whereId,
    newTag
  });
});

router.delete('/remove', (req, res, next) => {
  Notes
    .updateOne(
      { _id: req.body._noteId },
      { $pull: { tags: { _id: req.body._tagId } } })
    .exec();

  res.status(202).json({
    _noteId: req.body._noteId,
    _tagId: req.body._tagId
  });
});

router.put('/rename', (req, res, next) => {
  Notes
    .updateOne(
      { _id: req.body._noteId, 'tags._id': req.body._tagId },
      { $set: { 'tags.$.text': req.body.newTagText } })
    .exec();

  res.status(202).json({
    _noteId: req.body._noteId,
    _tagId: req.body._tagId,
    newTagText: req.body.newTagText
  });
});

module.exports = router;