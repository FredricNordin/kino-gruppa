import createElement from "./createElements.js";
import changePage from "./fetchVerifiedReviews.js"; //change this to fetchAllApiReviews.js if you want un-verified reviews

export function renderComments(data) {
  const commentSect = document.querySelector("#review-comment-section");
  commentSect.innerHTML = "";

  data.forEach((review) => {
    const article = createElement("article");
    commentSect.appendChild(article);

    /*text-elements*/
    //header
    const commenetHeader = createElement("div", null, [
      "review-commenet-header",
    ]);
    article.appendChild(commenetHeader);
    const author = createElement("b", review.attributes.author);
    commenetHeader.appendChild(author);
    const rating = createElement("i", review.attributes.rating);
    commenetHeader.appendChild(rating);
    //comment
    const comment = createElement("p", review.attributes.comment);
    article.appendChild(comment);
  });
}

export function renderReviewPageBtns(totalPages) {
  const btnSect = document.querySelector("#review-btn-section");
  btnSect.innerHTML = "";
  for (let pageNr = 1; pageNr <= Number(totalPages); pageNr++) {
    const pageBtn = createElement("button", pageNr);
    pageBtn.addEventListener("click", () => changePage(pageNr)); //här har vi ett problem
    btnSect.appendChild(pageBtn);
  }
}

/* ========= old render reveiew btns =============== */

// export function renderReviewPageBtns(meta) {
//   const btnSect = document.querySelector("#review-btn-section");
//   btnSect.innerHTML = "";
//   for (let pageNr = 1; pageNr <= Number(meta.totalPages); pageNr++) {
//     const pageBtn = createElement("button", pageNr);
//     pageBtn.addEventListener("click", () => changePage(pageNr));
//     btnSect.appendChild(pageBtn);
//   }
// }
