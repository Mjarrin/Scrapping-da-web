var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var NoteSchema = new Schema({





    text: {
    type: String,
    }
});


var Note = mongoose.model("note", NoteSchema);



module.exports = Note;