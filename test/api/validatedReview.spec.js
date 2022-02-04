import reviewApi from "../../src/js/modules/reviews/fetchPostReview.js"
import jest from "@jest/globals"

test("Check if review is validated correctly.", async () => {
    const spy = jest.spyOn(reviewApi, "postReview");
    spy.mockImplementation(() => {});



















  expect(spy).toBeCalledOnce();
})