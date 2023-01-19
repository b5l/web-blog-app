import { getBlogPosts } from "../selectors";
import { initialState } from "../slice";
import { BlogPostsMock } from "../../../../mocks/mockData";

describe("Blog Posts - selectors", () => {
  test("getBlogPosts selector", () => {
    const blogsPostsData = getBlogPosts.resultFunc({
      ...initialState,
      blogPosts: { data: BlogPostsMock },
    });
    expect(blogsPostsData).toEqual({
      data: BlogPostsMock,
    });
  });
});
