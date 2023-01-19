import { expectSaga } from "redux-saga-test-plan";
import { fetchBlogCreateApiCall } from "../../../../api/blogCreate";
import { fetchBlogCreateSaga } from "../sagas";
import { setBlogCreateState } from "../slice";

jest.mock("../../../../api/blogCreate", () => ({
  fetchBlogCreateApiCall: jest.fn(),
}));

jest.mock("axios");

const mockfetchBlogCreateApiCall = fetchBlogCreateApiCall as jest.Mock;

describe("Blog Create - sagas", () => {
  test("should successfully fetch Blog Create data", () => {
    const data = { isSuccessful: true };
    mockfetchBlogCreateApiCall.mockResolvedValue({ data });

    const action = {
      type: "",
      payload: {
        title: "Test Title",
        type: "Test Type",
        description: "Test description",
      },
    };

    return expectSaga(fetchBlogCreateSaga, action)
      .put(setBlogCreateState({ isSuccessful: false }))
      .call(fetchBlogCreateApiCall, action.payload)
      .put(setBlogCreateState({ isSuccessful: true }))
      .put(setBlogCreateState({ isSuccessful: false }))
      .run();
  });
});
