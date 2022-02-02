import fetch from "node-fetch";
import { fetchMovieReviews } from "./fetchReviews.js";

// Post review sent from the browser.
export default function postReview(review) {
  fetch("https://lernia-kino-cms.herokuapp.com/api/reviews/", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: {
        author: review.author,
        comment: review.comment,
        rating: review.rating,
        movie: review.movie,
        verified: review.verified,
      },
    }),
  });
  // Re:fetch all reviews after post.
  const movieID = review.movie;
  return fetchMovieReviews(movieID);
};