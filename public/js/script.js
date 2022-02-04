// LISTA REVIEWS
// Marcus && John && fredric was here
import createReviewForm from "./func/renderPostReview.js";
import changePage from "./func/fetchVerifiedReviews.js"; //change this to fetchAllApiReviews.js if you want un-verified reviews
import { renderSingleScreenings } from "./modules/renderSingleScreenings.js";

if (window.location.pathname.match(/\/movies\/[0-9]+/gm || window.location.href.indexOf("movies/") > -1)) {
  const movieId = window.location.pathname.split("/");
  renderSingleScreenings(movieId[2]);
  changePage();
  createReviewForm();
  bajskorv();
};

function bajskorv() {
  fetch("https://lernia-kino-cms.herokuapp.com/api/reviews/", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: {
        author: "Bob",
        comment: "Very nice.",
        rating: "5",
        movie: "1",
      },
    }),
  });
};
