// LISTA REVIEWS
// Marcus skriver sitt här
import changePage from "./func/renderMovieReviews.js"

if(window.location.pathname.match(/\/movies\/[0-9]+/gm)){
  changePage();
}

// SKICKA IN REVIEW
// Fredric skriver sitt här
