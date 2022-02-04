import express from "express";
import reviewApi from "../modules/reviews/fetchPostReview.js"
import reviewPageFilter from "../modules/reviews/movieReviewFilter.js";
import { filterSingleScreenings } from "../modules/filterScreenings.js";
import fetchFunc from "../modules/fetchData.js";

const apiRouter = express.Router();

apiRouter.post("/movies/:movieId/reviews", function (req, res) {
  // Check if request data fields are filled in correctly to verify the author.
  if (
    req.body.data.author != null &&
    typeof req.body.data.rating === "number" &&
    typeof req.body.data.movie === "number"
  ) {
    const review = {
      author: req.body.data.author,
      comment: req.body.data.comment,
      rating: req.body.data.rating,
      movie: req.body.data.movie,
    };
    reviewApi.postReview(review);
    res.end();
  } else {
    res.status(400);
    res.end();
  }
});

apiRouter.get("/movies/:movieId/reviews", reviewPageFilter);

apiRouter.get("/movies/:movieId/screenings", async (req, res) => {
  const screenings = await filterSingleScreenings(
    req.params.movieId,
    fetchFunc
  );
  res.send(screenings);
});

export default apiRouter;

