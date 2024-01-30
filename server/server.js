const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



const movies = [
    { id: 1, title: "The Shawshank Redemption", year: 1994  },
    { id: 2, title: "The Godfather", year: 1972   },
    { id: 3, title: "The Godfather: Part II", year: 1974   },
    { id: 4, title: "The Dark Knight", year: 2008     },
    
];

app.get("/movie/allMovies", (req, res) => {
    
    res.json(movies);
});


app.get("/movie/:id", (req, res) => {
    console.log(req.params.id);
    const movie = movies.find(movie => movie.id === parseInt(req.params.id));
    res.json(movie);
});


app.post("/movie/newMovie", (req, res) => {
    movies.push(req.body);
    res.json({ msg: "ok"});
})

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
