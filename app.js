const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

console.log('###################');

const argv = yargs.argv;
let command = process.argv[2];

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
}
else if (command === 'list') {
    notes.getAll();
}
else if (command === 'read') {
    notes.getNote(argv.title);
}
else if (command === 'delete') {
    notes.removeNote(argv.title);
}
else {
    console.log('Command not recognized');
}