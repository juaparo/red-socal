const mongoose = require('mongoose');
const Note = require('../models/Note');

exports.notesForm = (req, res) => {
    res.render('notes/new-note')
}

exports.newNote = async (req , res) => {
   const  { title, description } = req.body;
   const errors = [];
   if (!title) {
       errors.push({text: 'Please write a title'})
   }
   if (!description) {
       errors.push({text: 'Please write a description'})
   }
   if (errors.length > 0) {
       res.render('notes/new-note', { errors, title, description })
   } else {

      const note = await (new Note({title,  decription})).save();
       console.log(note);
       res.send('ok');
   }
}