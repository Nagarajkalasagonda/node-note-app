console.log("Staring app.js");
//Inbulit module
const fs = require('fs');
//Third Party module
const _ = require('lodash');
const yargs = require('yargs');
//user defined modules
const notes = require('./notes.js');

var argv = yargs.argv;
var command = argv._[0];
console.log('Command ', command);
console.log("Process ", process.argv);
console.log("Yargs ",argv)


if(command === 'add'){

var note = notes.addNote(argv.title, argv.body);

if(note){
    console.log("Note Created");
    notes.lognote(note);    }
else{
    console.log("Title taken");
}
}
else if(command === 'list'){
 var allnotes =   notes.getAll();
 console.log(`Printing ${allnotes.length} note(s).`)

 allnotes.forEach((note)=>notes.lognote(note));
}
else if (command === 'read'){
   var note = notes.getNote(argv.title);
   if(note){
       console.log("Note found");
       notes.lognote(note);  
    }
   else{
       console.log("Note Not Found");
   }
}
else if(command === 'remove'){
    var noteremoved = notes.removeNote(argv.title);
    var message = noteremoved ? "Note is removed" : "Note not found";
    console.log(message);
}
else {
    console.log("command not recognaised");
}