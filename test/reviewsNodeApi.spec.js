import app from "../src/js/app.js";
import request from "supertest";


test("check if api data for movieId Reviews is greather then 0", async ()=>{
  const response = await request(app).get("/api/movies/4/reviews").expect(200);
  expect(response.body.data.length).toBeGreaterThan(0);
});

test("check if api data for movieId Reviews?page=X is less then 5", async ()=>{
  const response = await request(app).get("/api/movies/4/reviews?page=1").expect(200);
  expect(response.body.data.length).toBeLessThanOrEqual(5);
});