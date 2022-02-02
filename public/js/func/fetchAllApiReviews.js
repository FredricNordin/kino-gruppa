import { renderComments, renderReviewPageBtns } from "./renderMovieReviews.js"

async function fetchNodeReviewPage(reviewPageNr = 1) {
  const movieId = window.location.pathname.split("/");
  const res = await fetch(
    `../api/movies/${movieId[2]}/reviews?page=${reviewPageNr}`
  );
  const payload = await res.json();
  return payload;
}

export default async function changePage(pageNr = 1) {
  const obj = await fetchNodeReviewPage(pageNr);
  renderComments(obj.data);
  renderReviewPageBtns(obj.meta.totalPages);
}