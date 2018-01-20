console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

console.log('###################');

console.log('Result:', notes.addNote(1,2));


// var user = os.userInfo();

// fs.truncate('greetings.txt', 0, function(){
//     fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, (err) => {
//         if (err) {
//             console.log('Unable to write to file');
//         }
//     });
// })