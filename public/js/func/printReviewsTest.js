export default function testScript(){
  async function fetchNodeReviewPage(movieId, reviewPageNr = 1) {
    const res = await fetch(
      `../api/moives/${movieId}/reviews?page=${reviewPageNr}`
    );
    const payload = await res.json();
    return payload;
  }
  
  
  async function getIdFromUri(pageNr) {
    const movieId = window.location.pathname.split("/");
    const obj = await fetchNodeReviewPage(movieId[2], pageNr);
    writeHtml(obj);
  }
  
  getIdFromUri();
  
  
  function writeHtml(obj) {
    console.log(obj.data, obj.meta)
    const section = document.querySelector("#review-comment-section");
    let output = "";
    obj.data.forEach((review) => {
      output += `
      <article>
        <p>${review.attributes.comment}</p>
        <p><strong>${review.attributes.author}</strong></p>
        <p> ratring: <italic>${review.attributes.rating}</italic></p>
      </article>
      `;
    });
  
    for(let i = 1; i <= Number(obj.meta.totalPages); i++){
      output += `
      <button>
        ${i}
      </button>
      `;
      console.log(i);
    };
  
    section.innerHTML = output;
  
  } 
}

