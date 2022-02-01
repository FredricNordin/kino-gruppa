import createElement from "./createElements.js";

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
  renderReviewPageBtns(obj.meta);
}

function renderComments(data) {
  const commentSect = document.querySelector("#review-comment-section");
  commentSect.innerHTML = "";

  data.forEach((review) => {
    const article = createElement("article");
    commentSect.appendChild(article);

    /*text-elements*/
    //header
    const commenetHeader = createElement("div", null, ["review-commenet-header"]);
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

function renderReviewPageBtns(meta) {
  const btnSect = document.querySelector("#review-btn-section");
  btnSect.innerHTML = "";
  for (let pageNr = 1; pageNr <= Number(meta.totalPages); pageNr++) {
    const pageBtn = createElement("button", pageNr);
    pageBtn.addEventListener("click", () => changePage(pageNr));
    btnSect.appendChild(pageBtn);
  }
}
