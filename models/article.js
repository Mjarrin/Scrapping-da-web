var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var ArticleSchema = new Schema({

    title: {
        type: String,
        required: true,
        unique : true
    },

    link: {
        type: String,
        required: true

    },

    text: {
        type : String,
        // maximum : 400

    },


    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }


});


var Article = mongoose.model("Article", ArticleSchema);


module.exports = Article;