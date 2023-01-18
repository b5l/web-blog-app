import { expectSaga } from "redux-saga-test-plan";
import { fetchBlogDetailsApiCall } from "../../../../api/blogDetails";
import { data } from "../../../../mocks/mockData";
import { fetchBlogDetailsSaga } from "../sagas";

jest.mock("../../../../api/BlogDetails", () => ({
  fetchBlogDetailsApiCall: jest.fn(),
}));

jest.mock("axios");

const mockfetchBlogDetailsApiCall = fetchBlogDetailsApiCall as jest.Mock;

describe("Blog Details - sagas", () => {
  test("should successfully fetch Blog Details data", () => {
    mockfetchBlogDetailsApiCall.mockResolvedValue({ data });

    const action = {
      type: "",
      payload: {
        id: 1,
      },
    };

    return expectSaga(fetchBlogDetailsSaga, action)
      .call(fetchBlogDetailsApiCall, action.payload)
      .run();
  });
});
