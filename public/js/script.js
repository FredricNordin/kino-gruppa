// LISTA REVIEWS
// Marcus skriver sitt här
import createReviewForm from "./func/renderPostReview.js";
import changePage from "./func/fetchVerifiedReviews.js"; //change this to fetchAllApiReviews.js if you want un-verified reviews

if (window.location.pathname.match(/\/movies\/[0-9]+/gm)) {
  changePage();
};

// SKICKA IN REVIEW
// Fredric skriver sitt här
if (window.location.href.indexOf("movies/") > -1) {
  createReviewForm();
};