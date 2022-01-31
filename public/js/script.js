// LISTA REVIEWS
// Marcus skriver sitt här








// SKICKA IN REVIEW
// Fredric skriver sitt här

// Check if on index of /movies/
if (window.location.href.indexOf("movies") > -1) {
  createReviewForm();
}

function createReviewForm() {
  // Create post review form.
  const reviewForm = document.createElement("form");
  reviewForm.className = "main-container-reviewform";
  const mainContainer = document.querySelector(".main-container");
  mainContainer.appendChild(reviewForm);

  // Create a title.
  const reviewTitle = document.createElement("h1");
  reviewTitle.innerText = 'Review this movie! 🎬💫'
  reviewForm.appendChild(reviewTitle);

  // Create name input.
  const nameInput = document.createElement("input");
  nameInput.id = "name-input";
  nameInput.type = "text";
  nameInput.placeholder = "Your name:";
  nameInput.required = true;
  reviewForm.appendChild(nameInput);

  // Create rating selection.
  const ratingSelect = document.createElement("select");
  ratingSelect.id = "rating-select";
  reviewForm.appendChild(ratingSelect);

  // Create rating options. Min rating 0, Max rating 5.
  for (let i = 1; i <= 5; i++) {
    const optionRating = document.createElement("option");
    optionRating.textContent = [i] + '⭐'.repeat(i);
    ratingSelect.appendChild(optionRating);
  }

  // Create comment input.
  const commentInput = document.createElement("input");
  commentInput.id = "comment-input";
  commentInput.type = "text";
  commentInput.placeholder = "Comment your review";
  commentInput.required = true;
  reviewForm.appendChild(commentInput);

   // Create a submit button.
   const submitBtn = document.createElement("button");
   submitBtn.id = "submit-button";
   submitBtn.type = "submit";
   submitBtn.innerText = "Submit";
   reviewForm.appendChild(submitBtn);

  // Get movie ID
  const movieId = window.location.pathname.replace("/movies/", "");
  console.log("Review form created for movie with ID: " + movieId);

  // When the review form gets submitted.
  // TODO: Require all fields to be filled with data, confirm with API all data is submitted... Nu tar jag middagspaus.

};


// fetch('https://lernia-kino-cms.herokuapp.com/api/reviews', {
//     method: 'POST',
//     mode: 'cors',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         data: {
//             author: 'Greger',
//             comment: 'Bra film, frugan är nöjd också.',
//             rating: 55,
//             movie: 1,
//         }
//     }),
// });