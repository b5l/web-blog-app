import { getBlogEdit } from "../selectors";
import { initialState } from "../slice";
import { BlogEditMock } from "../../../../mocks/mockData";

describe("Blog Edit - selectors", () => {
  test("getBlogEdit selector", () => {
    const blogEditData = getBlogEdit.resultFunc({
      ...initialState,
      blogEdit: { data: BlogEditMock, isSuccessful: true, isEditing: false },
    });
    expect(blogEditData).toEqual({
      data: BlogEditMock,
      isSuccessful: true,
      isEditing: false,
    });
  });
});
