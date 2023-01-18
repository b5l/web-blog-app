import { getBlogPosts } from "../selectors";
import { initialState } from "../slice";
import { BlogPostsMock } from "../../../../mocks/mockData";

describe("Login - selectors", () => {
  test("getLogin selector", () => {
    const blogsPostsData = getBlogPosts.resultFunc({
      ...initialState,
      blogPosts: { data: BlogPostsMock },
    });
    expect(blogsPostsData).toEqual({
      data: BlogPostsMock,
    });
  });
});
