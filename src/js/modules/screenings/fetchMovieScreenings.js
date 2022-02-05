import fetch from "node-fetch";

export async function fetchScreenings(qs) {
  const response = await fetch(
    `https://lernia-kino-cms.herokuapp.com/api/screenings${qs}&pagination[limit]=100`
  );
  const data = await response.json();
  return data.data;
}

export default {
  fetchScreenings,
};
