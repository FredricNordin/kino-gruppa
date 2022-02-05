import fetch from "node-fetch";

// Post review sent from the browser.
export function postReview(review) {
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
      },
    }),
  });
  console.log(review);
};
export default { postReview };