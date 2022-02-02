import { fetchMovieReviews } from "../src/js/modules/reviews/fetchReviews.js";

test("checks that that all of data objects from strapis api are fetched", async () => {
  const res = await fetchMovieReviews(4);
  const totalItems = await res.meta.pagination.total;
  const pageSize = await res.meta.pagination.pageSize;

  expect(totalItems).toEqual(pageSize);
});


test("check that fetch strapi data is not null or undefiend", async () => {
  const res = await fetchMovieReviews(4);
  const payload = await res.data;

  expect(payload).toEqual(expect.anything());
});
  
