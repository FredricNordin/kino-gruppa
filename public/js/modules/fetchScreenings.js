export async function fetchSingleScreenings(id) {
  const response = await fetch(`/movies/${id}/screenings`);
  const data = response.json();
  console.log(data);

  return data;
}
