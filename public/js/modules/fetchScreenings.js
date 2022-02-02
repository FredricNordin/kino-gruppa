export async function fetchSingleScreenings(id) {
  const response = await fetch(`/api/movies/${id}/screenings`);
  const data = response.json();
  return data;
}
