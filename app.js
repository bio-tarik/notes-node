const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

console.log('###################');

const argv = yargs.argv;
let command = argv._[0];

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title already taken');
    }
}
else if (command === 'list') {
    notes.getAll();
}
else if (command === 'read') {
    let note = notes.getNote(argv.title);
   
    if (note) {
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
}
else if (command === 'delete') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = (noteRemoved ? "Note was removed" : "Note not found");
    console.log(message);
}
else {
    console.log('Command not recognized');
}