import fetch from "node-fetch";

async function getTotalJsonLength(uri) {
  const data = await fetch(uri);
  const jsonData = await data.json();

  if (jsonData.data === null) {
    return console.log(
      `err: check if something is missing or wrong the the uri: ${uri} `
    );
  }

  return jsonData.meta.pagination.total;

  //test -> json datan for inte vara null/undefined
}

export async function fetchAllMovieReviews(movieID) {
  let uri = `https://lernia-kino-cms.herokuapp.com/api/reviews?filters[movie]=${movieID}`;
  const totalLength = await getTotalJsonLength(uri);
  uri += `&pagination[pageSize]=${totalLength}`;

  const reviewsFromRichardsApi = await fetch(uri);
  const movieReviewsObj = await reviewsFromRichardsApi.json();
  return movieReviewsObj;

  //test -> kolla så att pageSize i obj.data är lika med total i obj.meta.
  //test -> kolla så att movieReviewsObj !== null
}
