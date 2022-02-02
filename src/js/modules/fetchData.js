import fetch from "node-fetch";

export async function fetchMovies() {
  const response = await fetch(
    "https://lernia-kino-cms.herokuapp.com/api/movies"
  );
  const data = await response.json();
  return data.data;
}

export async function fetchMovie(id) {
  const response = await fetch(
    `https://lernia-kino-cms.herokuapp.com/api/movies/${id}`
  );
  const data = await response.json();
  return data.data;
}

export async function fetchScreenings(qs) {
  const response = await fetch(
    `https://lernia-kino-cms.herokuapp.com/api/screenings${qs}`
  );
  const data = await response.json();
  return data.data;
}

export async function filterSingleScreenings(id) {
  const today = new Date().toISOString();

  const obj = await fetchScreenings(`?filters[movie]=${id}`);
  const filteredScreenings = [];

  obj.forEach((obj) => {
    if (obj.attributes.start_time >= today) filteredScreenings.push(obj);
  });

  const jsonScreenings = JSON.stringify(filteredScreenings);
  return jsonScreenings;
}
