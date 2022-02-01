import { fetchSingleScreenings } from "./fetchScreenings.js";

export async function renderSingleScreenings(id) {
  const screenings = await fetchSingleScreenings(id);
  const container = document.querySelector(".container-single-movie");

  screenings.forEach((screening) => {
    const newScreening = document.createElement("div");

    const newTime = document.createElement("h3");
    const newTimeNode = document.createTextNode(
      screening.attributes.start_time.split("T")
    );

    newTime.appendChild(newTimeNode);
    newScreening.appendChild(newTime);
    container.appendChild(newScreening);
  });
}
