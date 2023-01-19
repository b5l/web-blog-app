import { expectSaga } from "redux-saga-test-plan";
import { fetchBlogDeleteApiCall } from "../../../../api/blogDelete";
import { fetchBlogDeleteSaga } from "../sagas";
import { setBlogDeleteState } from "../slice";

jest.mock("../../../../api/blogDelete", () => ({
  fetchBlogDeleteApiCall: jest.fn(),
}));

jest.mock("axios");

const mockfetchBlogDeleteApiCall = fetchBlogDeleteApiCall as jest.Mock;

describe("Blog Delete - sagas", () => {
  test("should successfully fetch Blog Delete data", () => {
    const data = { isDeleted: true };
    mockfetchBlogDeleteApiCall.mockResolvedValue({ data });

    const action = {
      type: "",
      payload: {
        id: 1,
      },
    };

    return expectSaga(fetchBlogDeleteSaga, action)
      .put(setBlogDeleteState({ isDeleted: false }))
      .call(fetchBlogDeleteApiCall, action.payload)
      .put(setBlogDeleteState({ isDeleted: true }))
      .put(setBlogDeleteState({ isDeleted: false }))
      .run();
  });
});
