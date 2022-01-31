import express from "express";
const apiRouter = express.Router();


apiRouter.post('/movies/:movieId/reviews', function (req, res) {
    console.log(req.body.data)
    res.end();
})





export default apiRouter;