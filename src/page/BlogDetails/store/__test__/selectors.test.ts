import { getBlogDetails } from "../selectors";
import { initialState } from "../slice";
import { data } from "../../../../mocks/mockData";

describe("Blog Details - selectors", () => {
  test("getBlogDetails selector", () => {
    const blogsDetailsData = getBlogDetails.resultFunc({
      ...initialState,
      blogDetails: { data: data },
    });
    expect(blogsDetailsData).toEqual({
      data: data,
    });
  });
});
