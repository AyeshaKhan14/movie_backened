const {Router} = require("express")
const MovieController = require("../controller/movie.controller")

const MovieRouter = Router()

MovieRouter.post("/create", MovieController.MoviePost)
MovieRouter.get("/",MovieController.getMovie)
MovieRouter.get("/movie/:id",MovieController.getMovieById)
MovieRouter.delete("/delete/:id",MovieController.deleteMovie)

module.exports= MovieRouter