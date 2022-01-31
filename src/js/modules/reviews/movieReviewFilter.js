import { fetchMovieReviews } from "./fetchReviews.js";

export default async function reviewPageFilter(req, res) {
  const allReviews = await fetchMovieReviews(req.params.movieId);
  if (Object.keys(req.query).length === 0) return res.send(allReviews.data);

  //filter logic
  const pageNr = req.query.page;
  const pageLimit = 5;
  const pageStart = (pageNr - 1) * pageLimit;
  const pageEnd = pageStart + pageLimit;

  //filtration
  let limitedReviews = [];
  allReviews.data.forEach((review) => {
    if (
      allReviews.data.indexOf(review) >= pageStart &&
      allReviews.data.indexOf(review) < pageEnd
    ) {
      limitedReviews.push(review);
    }
  });

  console.log({ totalPages: Math.ceil(allReviews.data.length / pageLimit) });
  console.log(limitedReviews);

  res.status(200).send(limitedReviews);
}
