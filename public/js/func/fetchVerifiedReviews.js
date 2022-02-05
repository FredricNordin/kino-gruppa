import { renderComments, renderReviewPageBtns } from "./renderMovieReviews.js";

async function fetchNodeReviewPage() {
  const movieId = window.location.pathname.split("/");
  const res = await fetch(`../api/movies/${movieId[2]}/reviews`);
  const payload = await res.json();
  return payload;
}

//filter out every verified review to an new array
export async function allVerifedReviews(data = fetchNodeReviewPage) {
  const allReviews = await data();

  let verfiedReviews = [];
  allReviews.data.forEach((review) => {
    if (review.attributes.verified !== true) return;
    verfiedReviews.push(review);
  });

  return verfiedReviews;
}

export default async function changePage(_pageNr = 1) {
  const verfiedReviews = await allVerifedReviews();

  //filter logic
  const pageLimit = 5;
  const pageNr = _pageNr; //getPageNr; //lös denna senare
  const pageStart = (pageNr - 1) * pageLimit; //- 1 to get index with base 0
  const pageEnd = pageStart + pageLimit;

  //filtration
  let filteredReviews = { data: [], meta: {} };
  verfiedReviews.forEach((review) => {
    if (
      verfiedReviews.indexOf(review) >= pageStart &&
      verfiedReviews.indexOf(review) < pageEnd
    ) {
      filteredReviews.data.push(review);
    }
  });

  filteredReviews.meta = {
    totalPages: Math.ceil(verfiedReviews.length / pageLimit),
  };

  renderComments(filteredReviews.data);
  renderReviewPageBtns(filteredReviews.meta.totalPages);
}
