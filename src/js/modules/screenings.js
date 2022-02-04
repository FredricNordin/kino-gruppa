import comingScreenings from "./screenings.js";

export async function comingScreenings(fetchFunc) {
  const now = new Date();
  console.log(now);
  const screenings = (await fetchFunc.fetchScreenings(`?populate=movie`))
    .filter(obj => {
      const screeningTime = new Date(obj.attributes.start_time);
      return screeningTime > now; // && screeningTime <= now.setDate(now.getDate()+2); //(now.setHours(-1))+5);
    })
    .slice(0, 10);
    now.setDate(now.getDate()+5);
    console.log(now);
  console.log(screenings);
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

