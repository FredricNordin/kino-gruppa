
export async function filterRating(id, fetchFunc, title) {
  const obj = await fetchFunc.fetchRating(`${id}`);
  let movieRating = 0;
  const filterCounter = 0;
  let i = 0;

  obj.forEach((obj) => {
    i++;
    filterCounter += obj.attributes.rating;
  });

  if (i < 5) {
    const response = await fetch(
      `http://www.omdbapi.com/?t=${title}&plot=full&apikey=fc35538d`
    );
    const data = await response.json();
    movieRating = data.imdbRating / 2;
  } else {
    movieRating = filterCounter / i;
  }
  console.log(movieRating);
  return movieRating;
}
