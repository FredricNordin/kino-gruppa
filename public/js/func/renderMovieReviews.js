import createElement from "./createElements.js"

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
  commentSect.innerHTML = '';
  
  data.forEach((review) => {
    const comment = createElement("p", review.attributes.comment);
    commentSect.appendChild(comment);
    const author = createElement("h3", review.attributes.author);
    commentSect.appendChild(author);
    const rating = createElement("i", review.attributes.rating);
    commentSect.appendChild(rating);
  });
}

function renderReviewPageBtns(meta) {
  const btnSect = document.querySelector("#review-btn-section");
  btnSect.innerHTML = '';
  for (let pageNr = 1; pageNr <= Number(meta.totalPages); pageNr++) {
    const pageBtn = createElement("button", pageNr);
    pageBtn.addEventListener('click', () => changePage(pageNr))
    btnSect.appendChild(pageBtn);
  }
}

