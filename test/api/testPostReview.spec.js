import reviewApi from "../../src/js/modules/reviews/fetchPostReview.js"
import { jest, expect, test } from '@jest/globals'
import request from 'supertest';
import app from "../../src/js/app.js";

test("Test if the posted review gets validated. Will respond Status 200 if OK.", async () => {
  const spy = jest.spyOn(reviewApi, "postReview");
  spy.mockImplementation(() => { });

  const response = await request(app)
    .post("/api/movies/1/reviews")
    .send({
      data: {
        author: "Bob",
        comment: "I liked the movie.",
        rating: 5,
        movie: 1,
      }
    })
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .expect(200)
  expect(spy).toHaveBeenCalledTimes(1);
})

test("Test if the posted review DONT get validated. Will respond Status 400 Bad request.", async () => {
  const spy = jest.spyOn(reviewApi, "postReview");
  spy.mockImplementation(() => { });

  const response = await request(app)
    .post("/api/movies/1/reviews")
    .send({
      data: {
        author: null,
        comment: "I liked the movie.",
        rating: 5,
        movie: "1",
      }
    })
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .expect(400)
  expect(spy).toHaveBeenCalledTimes(1);
})