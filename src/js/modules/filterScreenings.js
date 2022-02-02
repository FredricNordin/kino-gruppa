export async function filterSingleScreenings(id, fetchFunc) {
  const today = new Date().toISOString();

  const obj = await fetchFunc.fetchScreenings(`?filters[movie]=${id}`);
  const filteredScreenings = [];

  obj.forEach((obj) => {
    if (obj.attributes.start_time >= today) filteredScreenings.push(obj);
  });

  const jsonScreenings = JSON.stringify(filteredScreenings);
  return jsonScreenings;
}
