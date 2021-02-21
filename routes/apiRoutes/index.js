const router = require('express').Router();
const unid = require('uniqid');
const fs = require('fs');
const path = require('path');
const notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes);
})

router.post('/notes', (req, res) => {
    let newNote = req.body;
    newNote.id = unid();
    notes.push(newNote);

    fs.writeFile("db/db.json", JSON.stringify(notes), err => {
        if (err) {
            throw err;
        } else {
            return true;
        }
    });

    res.json(notes);
});

module.exports = router;