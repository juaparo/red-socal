const express = require('express');
const router = express.Router()
const notesController = require('../controllers/notesController');

router.get('/add/notes', notesController.notesForm);

router.post('/new/note', notesController.newNote);


module.exports = router;