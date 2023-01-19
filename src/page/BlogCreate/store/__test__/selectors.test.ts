import { getBlogCreate } from "../selectors";
import { initialState } from "../slice";
import { BlogCreateMock } from "../../../../mocks/mockData";

describe("Blog Create - selectors", () => {
  test("getBlogCreate selector", () => {
    const blogCreateData = getBlogCreate.resultFunc({
      ...initialState,
      blogCreate: { data: BlogCreateMock, isSuccessful: true },
    });
    expect(blogCreateData).toEqual({
      data: BlogCreateMock,
      isSuccessful: true,
    });
  });
});
