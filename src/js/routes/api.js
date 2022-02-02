import express from "express";
import { filterSingleScreenings } from "../modules/filterScreenings.js";
import fetchFunc from "../modules/fetchData.js";
const apiRouter = express.Router();

apiRouter.get("/movies/:movieId/screenings", async (req, res) => {
  const screenings = await filterSingleScreenings(
    req.params.movieId,
    fetchFunc
  );
  res.send(screenings);
});

export default apiRouter;
