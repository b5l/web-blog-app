import { getBlogDelete } from "../selectors";
import { initialState } from "../slice";

describe("Blog Delete - selectors", () => {
  test("getBlogDelete selector", () => {
    const blogDeleteData = getBlogDelete.resultFunc({
      ...initialState,
      blogDelete: { id: 1, isDeleted: true },
    });
    expect(blogDeleteData).toEqual({
      id: 1,
      isDeleted: true,
    });
  });
});
