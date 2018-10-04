console.log("Staring note.js");

var fs = require('fs');
//To get the notes  from file

var fetchNotes = () =>{
    try{

        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
       
    }
    catch(e){
        return [];
    } 
};
//To save the notes
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
  
}
var addNote = (title, body) => {
   var notes = fetchNotes();
   var note = {
       title,
       body
    }
    
    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length ===0){

    // //Write note
    notes.push(note);
    saveNotes(notes);
    return note;
    }
};

var getAll = () =>{

    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var notefound = notes.filter((note) => note.title ===title);
   return notefound[0];
}

var removeNote = (title) =>{
  var notes = fetchNotes();
  var removingnote = notes.filter((note) => note.title !== title);
  saveNotes(removingnote);

  return notes.length !== removingnote.length; 
//   if(notes.length===removingnote.length){
//       console.log("No note is removed");
//   }
//   else{
//       console.log("Note is removed");
      
//   }
  
}
var lognote = (note) => {
    console.log("----");
    console.log(`Title : ${note.title}`);
    console.log(`Body : ${note.body}`);

}

module.exports  = {
    addNote,
    getAll,
    getNote,
    removeNote,
    lognote

};
