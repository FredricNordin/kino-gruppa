import express from "express";
const apiRouter = express.Router();

// Listen for a post containing review data.
apiRouter.post("/movies/:movieId/reviews", function (req, res) {
  // Check if request data fields are filled in correctly to verify the author.
  if (
    req.body.data.author != null &&
    typeof req.body.data.rating === "number" &&
    typeof req.body.data.movie === "number"
  ) {
    const userVerified = true;
    const data = {
      author: req.body.data.author,
      comment: req.body.data.comment,
      rating: req.body.data.rating,
      movie: req.body.data.movie,
      verified: userVerified,
    };
    console.log(data);
    res.end();
  } else {
    console.log("Author not verified. Skipping post!");
    res.end();
  }
});

export default apiRouter;