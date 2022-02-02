import { fetchMovieReviews } from "./fetchReviews.js";

export default async function reviewPageFilter(req, res) {
  const allReviews = await fetchMovieReviews(req.params.movieId);
  if (Object.keys(req.query).length === 0) return res.send(allReviews);

  //filter logic
  const pageNr = req.query.page;
  const pageLimit = 5;
  const pageStart = (pageNr - 1) * pageLimit; //- 1 to get index with base 0
  const pageEnd = pageStart + pageLimit;

  //filtration
  let filteredReviews = { data: [], meta: {} };
  allReviews.data.forEach((review) => {
    if (
      allReviews.data.indexOf(review) >= pageStart &&
      allReviews.data.indexOf(review) < pageEnd
    ) {
      filteredReviews.data.push(review);
    }
  });

  filteredReviews.meta = {
    totalPages: Math.ceil(allReviews.data.length / pageLimit),
  };

  res.status(200).send(filteredReviews);
}
