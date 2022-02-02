import { filterSingleScreenings } from "../../src/js/modules/filterScreenings.js";

// Mock fetchScreenings
const fetchFunc = {
  async fetchScreenings() {
    return [
      {
        id: 5,
        attributes: {
          start_time: "2022-01-25T12:00:00.000Z",
          room: "Stora salongen",
          createdAt: "2022-01-23T10:32:00.822Z",
          updatedAt: "2022-01-23T10:32:00.822Z",
        },
      },
      {
        id: 6,
        attributes: {
          start_time: "2022-01-25T17:00:00.000Z",
          room: "Stora salongen",
          createdAt: "2022-01-23T10:32:01.366Z",
          updatedAt: "2022-01-23T10:32:01.366Z",
        },
      },
      {
        id: 10,
        attributes: {
          start_time: "2022-01-26T17:00:00.000Z",
          room: "Stora salongen",
          createdAt: "2022-01-23T10:32:03.768Z",
          updatedAt: "2022-01-23T10:32:03.768Z",
        },
      },
      {
        id: 27,
        attributes: {
          start_time: "2022-02-03T19:00:00.000Z",
          room: "Stora salongen",
          createdAt: "2022-01-23T10:32:13.489Z",
          updatedAt: "2022-01-23T10:32:13.489Z",
        },
      },
      {
        id: 35,
        attributes: {
          start_time: "2022-03-15T19:00:00.000Z",
          room: "Stora salongen",
          createdAt: "2022-01-23T10:32:18.516Z",
          updatedAt: "2022-01-23T10:32:18.516Z",
        },
      },
      {
        id: 44,
        attributes: {
          start_time: "2025-10-03T21:00:00.000Z",
          room: "Stora salongen",
          createdAt: "2022-01-23T10:32:23.740Z",
          updatedAt: "2022-01-23T10:32:23.740Z",
        },
      },
    ];
  },
};

// Test filter
test("filter for coming screenings", async () => {
  const payload = await filterSingleScreenings(3, fetchFunc);
  const response = JSON.parse(payload);
  const foreverNow = new Date();

  response.forEach((screening) => {
    const date = new Date(screening.attributes.start_time);
    expect(date > foreverNow).toBeTruthy();
  });
});
