import { BlogPostsMock } from "../../../../mocks/mockData";
import reducer, {
  fetchBlogPostsAction,
  initialState,
  setBlogPostsState,
} from "../slice";

describe("Blog posts - slices", () => {
  it("should fetch blog posts data", () => {
    expect(reducer(initialState, fetchBlogPostsAction({}))).toEqual({
      ...initialState,
      blogPosts: {
        ...initialState.blogPosts,
      },
    });
  });

  it("should correctly set the fetched data", () => {
    expect(initialState.blogPosts).toEqual({
      ...initialState.blogPosts,
    });
    expect(
      reducer(
        initialState,
        setBlogPostsState({
          data: BlogPostsMock,
        })
      )
    ).toEqual({
      ...initialState,
      blogPosts: {
        data: BlogPostsMock,
      },
    });
  });
});
