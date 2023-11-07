const express=require("express")
const app=express()
const cors = require('cors');
app.use(express.json())
app.use(cors())
const axios = require("axios")

const port=8000

app.get('/movies', async (req, res) => {
  try {
    const page = req.query.page || 1;

    const response = await axios.get(`https://www.omdbapi.com/?s=war&type=movie&page=1&apikey=1daaa09d`);
    
    const movie=  res.json(response.data.Search)
    console.log(movie)
    res.send(movie)
      

  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching movies.' });
  }
});

app.get('/movies/:id', async (req, res) => {
  const movieId = req.params.id;

  try {
    const response = await axios.get(`https://www.omdbapi.com/?i=${movieId}&apikey=1daaa09d`);
    const movie = response.data;
    res.send(movie);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the movie by ID.' });
  }
});






app.listen(port, () => {
  console.log(`Proxy API server is running on port ${port}`);
});


