export async function fetchSingleScreenings(id) {
  const response = await fetch(`/api/movies/${id}/screenings`);
  const data = response.json();
  return data;
}

export async function fetchNextScreenings() {
  let response = await fetch('/api/screenings');
  return response.ok ? await response.json() : [];
}