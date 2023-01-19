import { expectSaga } from "redux-saga-test-plan";
import { fetchLoginApiCall } from "../../../../api/login";
import { fetchLoginSaga } from "../sagas";
import { setLoginState } from "../slice";

jest.mock("../../../../api/Login", () => ({
  fetchLoginApiCall: jest.fn(),
}));

jest.mock("axios");

const mockfetchLoginApiCall = fetchLoginApiCall as jest.Mock;

describe("Login - sagas", () => {
  test("should successfully fetch Login data", () => {
    const data = { isAuth: true };
    mockfetchLoginApiCall.mockResolvedValue({ data });

    const action = {
      type: "",
      payload: {
        username: "Test user",
        password: "test password",
      },
    };

    return expectSaga(fetchLoginSaga, action)
      .put(setLoginState({ isAuth: false }))
      .call(fetchLoginApiCall, action.payload)
      .put(setLoginState({ isAuth: true }))
      .put(setLoginState({ isAuth: false }))
      .run();
  });
});
