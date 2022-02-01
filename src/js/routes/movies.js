import express from "express";
import {
  fetchMovies,
  fetchMovie,
  filterSingleScreenings,
} from "../modules/fetchData.js";

const moviesRouter = express.Router();

moviesRouter.get("/", async (req, res) => {
  const movies = await fetchMovies();
  if (movies) {
    res.render("movies", { movies });
  } else {
    res.status(404).render("movies404");
  }
});

moviesRouter.get("/:movieId", async (req, res) => {
  const movie = await fetchMovie(req.params.movieId);
  if (movie) {
    res.render("movie", { movie });
  } else {
    res.status(404).render("movie404");
  }
});

moviesRouter.get("/:movieId/screenings", async (req, res) => {
  console.log("get screenings");
  const screenings = await filterSingleScreenings(req.params.movieId);
  res.send(screenings);
});

export default moviesRouter;
