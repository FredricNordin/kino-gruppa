import express from "express";
import reviewPageFilter from "../modules/reviews/movieReviewFilter.js";
const apiRouter = express.Router();


apiRouter.post("/movies/:movieId/reviews", function (req, res) {
  console.log(req.body.data);
  res.end();
});

apiRouter.get("/movies/:movieId/reviews", reviewPageFilter);

export default apiRouter;
