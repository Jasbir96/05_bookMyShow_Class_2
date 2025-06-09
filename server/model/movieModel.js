

const mongoose = require("mongoose");


// movieName 
// description
// duration
// releaseDate
// genre,
// poster


const movieSchema = new mongoose.Schema({
movieName:{
    required:true,
    type:String,
}
,
description:{
    required:true,
    type:String,
},
duration:{
    required:true,
    type:Number
},
releaseDate:{
    required:true,
    type:Date
},
genre:{
    required:true,
    type:String
},
poster:{
    required:true,
    type:String
}
});

const MovieModel = mongoose.model("movies", movieSchema);
module.exports = MovieModel; 


// Questions 


