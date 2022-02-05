// LISTA REVIEWS
// Marcus && John && fredric was here
import createReviewForm from "./func/renderPostReview.js";
import changePage from "./func/fetchVerifiedReviews.js"; //change this to fetchAllApiReviews.js if you want un-verified reviews
import { renderSingleScreenings } from "./func/renderSingleScreenings.js";

if (window.location.pathname.match(/\/movies\/[0-9]+/gm || window.location.href.indexOf("movies/") > -1)) {
  const movieId = window.location.pathname.split("/");
  renderSingleScreenings(movieId[2]);
  changePage();
  createReviewForm();
};