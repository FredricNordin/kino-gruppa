import fetchFunc from "./fetchData.js";

// This JS file has a function to fetch the upcoming screenings from API server and filtering them
export async function comingScreenings() {
  const now = new Date();
  const screenings = (await fetchFunc.fetchScreenings(`?populate=movie&pagination[pageSize]=1000`))
    .filter(obj => {
      const screeningTime = new Date(obj.attributes.start_time);
      return screeningTime > now; // filter condition for screenings of start time greater than now time
    }).slice(0, 10);
  // screenings.filter(obj => {
  //   const screeningTime = new Date(obj.attributes.start_time);
  //   return screeningTime <= now.setDate(now.getDate() + 5);
  // });
  // screenings.slice(0, 20);

  // Restructing the filtered screenings
  return {
    data: screenings.map(obj => {
      return {
        time: obj.attributes.start_time,
        room: obj.attributes.room,
        movie: {
          id: obj.attributes.movie.data.id,
          title: obj.attributes.movie.data.attributes.title,
          image:{
            url: obj.attributes.movie.data.attributes.image.url,
          }
        }
      };
    }),
  };
  // console.log(screenings);
  // return screenings;
}



// export async function comingScreenings(fetchFunc) {
//   const today = new Date(); //.toISOString();
//   /*const now= new Date().getTime();
//   const fiveDays = now + 86400 * 5;*/


//   const obj = await fetchFunc.fetchScreenings(`?populate=movie`); //(`?filters[movie]=${id}`);
//   const filteredScreenings = [];

//   obj.forEach((obj) => {
//     if (obj.attributes.start_time > today && obj.attributes.start_time <= today.setDate(today.getDate(today.setHours(-1))+5)) filteredScreenings.push(obj);
//   });

//   const jsoncomingScreenings = JSON.stringify(filteredScreenings);
//   return jsoncomingScreenings;
// }

export default comingScreenings;