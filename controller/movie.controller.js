const {MovieModel} = require("../model/movie.model")

//movie post
const MoviePost= async (req,res)=>{
    const data=req.body;
    try{
        const product= await MovieModel.findOne(data)

        if(product){
            return res.send({mssg:"Movie Already Exists"})
        }
        else{
            const prod= new MovieModel(data)
            await prod.save()
            console.log(prod)
            res.send({ mssg: "Movie Added Successful", data: prod });
        }

    }catch(err){
        console.log(err.message);
        res.status(500).send("Internal Server Error");
    }
}

//get Product
const getMovie = async(req,res)=>{
    try{
        const produt= await MovieModel.find({})
        //check product is present in db or not
        if(produt.length===0){
            return res.status(404).json({ success: false, message: "No data found" });
        }
           return res.status(200).json({ status: true, data: produt });

    }catch(err){
        return res.status(500).json({ success: false, message: err.message });
    }
}

// Get a single movie by ID
const getMovieById = async (req, res) => {
    const movieId = req.params.id;
  
    try {
      const movie = await MovieModel.findById(movieId);
  
      if (!movie) {
        return res.status(404).json({ success: false, message: "Movie not found" });
      }
  
      return res.status(200).json({ success: true, data: movie });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }


//delete movie;
const deleteMovie = async (req, res) => {
    const productId = req.params.id; 
  
    try {
      const deletedProduct = await MovieModel.findByIdAndDelete(productId);
  
      if (!deletedProduct) {
        return res.status(404).json({ success: false, message: "Movie not found" });
      }
  
      return res.status(200).json({ success: true, message: "Movie deleted successfully" });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  };
  



const MovieController = {MoviePost , getMovie, deleteMovie,getMovieById}
module.exports= MovieController