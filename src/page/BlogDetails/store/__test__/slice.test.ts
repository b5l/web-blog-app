import { data } from "../../../../mocks/mockData";
import reducer, {
  fetchBlogDetailsAction,
  initialState,
  setBlogDetailsState,
} from "../slice";

describe("Blog Details - slices", () => {
  it("should fetch Blog Details data", () => {
    expect(reducer(initialState, fetchBlogDetailsAction({}))).toEqual({
      ...initialState,
      blogDetails: {
        ...initialState.blogDetails,
      },
    });
  });

  it("should correctly set the fetched data", () => {
    expect(initialState.blogDetails).toEqual({
      ...initialState.blogDetails,
    });
    expect(reducer(initialState, setBlogDetailsState(data))).toEqual({
      ...initialState,
      blogDetails: {
        data,
      },
    });
  });
});
