const express = require("express");
const app = express();

app.use(express.json());

let movies = [
  { id: 1, name: "RRR" },
  { id: 2, name: "Pushpa" }
];

// GET
app.get("/movies", (req, res) => res.json(movies));

// POST
app.post("/movies", (req, res) => {
  movies.push({ id: movies.length + 1, name: req.body.name });
  res.json({ message: "Movie added" });
});

// PUT
app.put("/movies/:id", (req, res) => {
  let m = movies.find(x => x.id == req.params.id);
  if (m) m.name = req.body.name;
  res.json({ message: "Movie updated" });
});

// DELETE
app.delete("/movies/:id", (req, res) => {
  movies = movies.filter(x => x.id != req.params.id);
  res.json({ message: "Movie deleted" });
});

app.listen(3000, () => console.log("Server running"));