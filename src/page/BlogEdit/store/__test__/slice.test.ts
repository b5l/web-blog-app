import { BlogEditMock } from "../../../../mocks/mockData";
import reducer, {
  fetchBlogEditAction,
  initialState,
  setBlogEditState,
} from "../slice";

describe("Blog Edit - slices", () => {
  it("should fetch Blog Edit data", () => {
    expect(reducer(initialState, fetchBlogEditAction({}))).toEqual({
      ...initialState,
      blogEdit: {
        ...initialState.blogEdit,
        isSuccessful: false,
      },
    });
  });

  it("should correctly set the fetched data", () => {
    expect(initialState.blogEdit).toEqual({
      ...initialState.blogEdit,
      isSuccessful: false,
      isEditing: false,
    });
    expect(
      reducer(
        initialState,
        setBlogEditState({
          data: BlogEditMock,
          isSuccessful: true,
          isEditing: false,
        })
      )
    ).toEqual({
      ...initialState,
      blogEdit: {
        data: BlogEditMock,
        isSuccessful: true,
        isEditing: false,
      },
    });
  });
});
