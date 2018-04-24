// let obj = { name: 'bio-tarik' };
// let stringObj = JSON.stringify(obj);
// console.log('stringObj type:', typeof stringObj);
// console.log('Printing the string:', stringObj);

// let personString = '{"name": "bio-tarik", "age": 28}';
// let person = JSON.parse(personString);
// console.log('personString type:', typeof person);
// console.log('Printing the string:', person);

const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body: 'Some body'
};

let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);

console.log('note type:', typeof note);
console.log('Printing the note title:', note.title);
