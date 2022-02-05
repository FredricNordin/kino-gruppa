import app from "../src/js/app.js";
import request from "supertest";

test("show landing page when requested", async () => {
  const response = await request(app).get("/").expect(200);

  expect(response.text.includes("<title>Kino Luleå</title>")).toBeTruthy();
  // test some upcoming screenings on the home page
  expect(response.text.includes('The Dark Knight')).toBeTruthy();
  expect(response.text.includes('12 Angry Men')).toBeTruthy();
});

// This test will fail if the API removes this specific movie
test("show movies page with movies when requested", async () => {
  const response = await request(app).get("/movies").expect(200);

  expect(response.text.includes("Idiocracy")).toBeTruthy();
});

// This test will fail if the API removes or changes the ID of this specific movie
// Also pass if any of the Godfather movies are that ID
test("show right name for movie on that movies page", async () => {
  const response = await request(app).get("/movies/2").expect(200);

  expect(response.text.includes("Godfather")).toBeTruthy();
});

// This test will fail if the API removes or changes the ID of this specific movie
test("show right name for movie on that movies page", async () => {
  const response = await request(app).get("/movies/4").expect(200);

  expect(response.text.includes("Batman")).toBeTruthy();
});
