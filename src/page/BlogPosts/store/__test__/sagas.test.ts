import { expectSaga } from "redux-saga-test-plan";
import { fetchBlogPostsApiCall } from "../../../../api/blogPosts";
import { BlogPostsMock } from "../../../../mocks/mockData";
import { fetchBlogPostsSaga } from "../sagas";

jest.mock("../../../../api/BlogPosts", () => ({
  fetchBlogPostsApiCall: jest.fn(),
}));

jest.mock("axios");

const mockfetchBlogPostsApiCall = fetchBlogPostsApiCall as jest.Mock;

describe("Blog Posts - sagas", () => {
  test("should successfully fetch Blog Posts data", () => {
    mockfetchBlogPostsApiCall.mockResolvedValue({ BlogPostsMock });

    const action = {
      type: "",
      payload: {},
    };

    return expectSaga(fetchBlogPostsSaga, action)
      .call(fetchBlogPostsApiCall)
      .run();
  });
});
