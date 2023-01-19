import { BlogCreateMock } from "../../../../mocks/mockData";
import reducer, {
  fetchBlogCreateAction,
  initialState,
  setBlogCreateState,
} from "../slice";

describe("Blog Create - slices", () => {
  it("should fetch Blog Create data", () => {
    expect(reducer(initialState, fetchBlogCreateAction({}))).toEqual({
      ...initialState,
      blogCreate: {
        ...initialState.blogCreate,
        isSuccessful: false,
      },
    });
  });

  it("should correctly set the fetched data", () => {
    expect(initialState.blogCreate).toEqual({
      ...initialState.blogCreate,
      isSuccessful: false,
    });
    expect(
      reducer(
        initialState,
        setBlogCreateState({
          data: BlogCreateMock,
          isSuccessful: true,
        })
      )
    ).toEqual({
      ...initialState,
      blogCreate: {
        data: BlogCreateMock,
        isSuccessful: true,
      },
    });
  });
});
