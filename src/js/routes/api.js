import express from "express";
import { filterSingleScreenings } from "../modules/fetchData.js";
const apiRouter = express.Router();

apiRouter.get("/movies/:movieId/screenings", async (req, res) => {
  const screenings = await filterSingleScreenings(req.params.movieId);
  res.send(screenings);
});

export default apiRouter;
