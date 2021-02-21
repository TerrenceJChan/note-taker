const router = require('express').Router();
const notes = require('../../db/db.json');
const { filterByQuery, createNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
})

module.exports = router;