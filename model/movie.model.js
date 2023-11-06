const mongoose=require("mongoose")

const movieSchema= new mongoose.Schema({
   title:String,
   image:String,
   rating:String
})

const MovieModel= mongoose.model("movie",movieSchema)

module.exports= {MovieModel}