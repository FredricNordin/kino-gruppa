import { fetchNextScreenings } from "./fetchScreenings.js";

export async function renderNextScreenings() {
    let screenings = await fetchNextScreenings();
    document.querySelector("div.main-container").innerHTML = screenings.data.map(screening => `
        <div class="main-container-content-article-small screening" style="background-image: url('${screening.movie.image.url}');">
            <a title="${screening.movie.title}" href="./movies/${screening.movie.id}"><span>${screening.movie.title}</span></a>
        </div>
    `).join('');
}
