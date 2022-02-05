import fetchFunc from "../modules/screenings/fetchMovieScreenings.js";

// This JS file has a function to fetch the upcoming screenings from API server and filtering them
export async function comingScreenings() {
  const now = new Date();
  const screenings = (await fetchFunc.fetchScreenings(`?populate=movie&pagination[pageSize]=1000`))
    .filter(obj => {
      const screeningTime = new Date(obj.attributes.start_time);
      return screeningTime > now; // filter condition for screenings of start time greater than now time
    })
    .slice(0, 10);


  // Restructing the filtered screenings
  return {
    data: screenings.map(obj => {
      return {
        time: obj.attributes.start_time,
        room: obj.attributes.room,
        movie: {
          id: obj.attributes.movie.data.id,
          title: obj.attributes.movie.data.attributes.title,
          image: {
            url: obj.attributes.movie.data.attributes.image.url,
          }
        }
      };
    }),
  };
}

export default comingScreenings;