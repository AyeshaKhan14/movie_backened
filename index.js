const express=require("express")
const mongoose=require("mongoose")
const app=express()
const cors = require('cors');
const MovieRouter = require("./route/movie.route");
app.use(express.json())
app.use(cors())



app.use("/",MovieRouter)



const PORT = 8000;
const MONGO_URI =
  "mongodb+srv://ayeshatravels9:movie@cluster0.ecnhyms.mongodb.net/Movie_db";


mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


 
  

  app.use((req, res) => {
      return res.status(400).send({ status: false, message: "End point is incorrect" })
  });


  
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


