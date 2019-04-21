const router = require('express').Router();
const Notes = require('../models/notes');

router.post('/description/add', (req, res, next) => {
  Notes.updateOne(
    { "tags._id": req.body._tagId },
    { $set: { "tags.$.description": req.body.description } },
    { upsert: true }
  )
    .exec();
});

router.post('/comment/add', (req, res, next) => {
  Notes.updateOne(
    { "tags._id": req.body._tagId },
    { $push: { "tags.$.comments": req.body.comment } },
  )
    .exec();
});

module.exports = router;