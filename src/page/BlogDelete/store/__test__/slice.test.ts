import reducer, {
  fetchBlogDeleteAction,
  initialState,
  setBlogDeleteState,
} from "../slice";

describe("Blog Delete - slices", () => {
  it("should fetch Blog Delete data", () => {
    expect(reducer(initialState, fetchBlogDeleteAction({}))).toEqual({
      ...initialState,
      blogDelete: {
        ...initialState.blogDelete,
        isDeleted: false,
      },
    });
  });

  it("should correctly set the fetched data", () => {
    expect(initialState.blogDelete).toEqual({
      ...initialState.blogDelete,
      isDeleted: false,
    });
    expect(
      reducer(
        initialState,
        setBlogDeleteState({
          isDeleted: true,
        })
      )
    ).toEqual({
      ...initialState,
      blogDelete: {
        ...initialState.blogDelete,
        isDeleted: true,
      },
    });
  });
});
