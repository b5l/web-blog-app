import { expectSaga } from "redux-saga-test-plan";
import { fetchBlogEditApiCall } from "../../../../api/blogEdit";
import { fetchBlogEditSaga } from "../sagas";
import { setBlogEditState } from "../slice";

jest.mock("../../../../api/blogEdit", () => ({
  fetchBlogEditApiCall: jest.fn(),
}));

jest.mock("axios");

const mockfetchBlogEditApiCall = fetchBlogEditApiCall as jest.Mock;

describe("Blog Edit - sagas", () => {
  test("should successfully fetch Blog Edit data", () => {
    const data = { isSuccessful: true };
    mockfetchBlogEditApiCall.mockResolvedValue({ data });

    const action = {
      type: "",
      payload: {
        id: 1,
        title: "Test Title",
        type: "Test Type",
        description: "Test description",
      },
    };

    return expectSaga(fetchBlogEditSaga, action)
      .put(setBlogEditState({ isSuccessful: false }))
      .call(fetchBlogEditApiCall, action.payload)
      .put(setBlogEditState({ isSuccessful: true }))
      .put(setBlogEditState({ isSuccessful: false, isEditing: false }))
      .run();
  });
});
