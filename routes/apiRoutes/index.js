const router = require('express').Router();
const unid = require('uniqid');
const fs = require('fs');
const path = require('path');
let notes = require('../../db/db.json');

// Get request to populate the UI with information from the db.json file.
router.get('/notes', (req, res) => {
    res.json(notes);
})

// Saves a new note with a unique ID thanks to the uniqid package. It pushes the new note as an object into the db.json array.
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

// Filters for the ID associated with the note to be deleted. Creates a new array without it, and saves it into the db.json file.
router.delete('/notes/:id', (req, res) => {
    let result = notes.filter(note => note.id !== req.params.id);

    fs.writeFile("db/db.json", JSON.stringify(result), err => {
        if (err) {
            throw err;
        } else {
            return true;
        }
    });

    notes = result;
    res.json(notes);
})

module.exports = router;