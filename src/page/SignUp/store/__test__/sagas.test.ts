import { expectSaga } from "redux-saga-test-plan";
import { fetchSignUpApiCall } from "../../../../api/signUp";
import { fetchSignUpSaga } from "../sagas";
import { setSignUpState } from "../slice";

jest.mock("../../../../api/signUp", () => ({
  fetchSignUpApiCall: jest.fn(),
}));

jest.mock("axios");

const mockfetchSignUpApiCall = fetchSignUpApiCall as jest.Mock;

describe("Sign Up - sagas", () => {
  test("should successfully fetch Sign Up data", () => {
    const data = { isSuccessful: true };
    mockfetchSignUpApiCall.mockResolvedValue({ data });

    const action = {
      type: "",
      payload: {
        username: "Test user",
        password: "test password",
      },
    };

    return expectSaga(fetchSignUpSaga, action)
      .put(setSignUpState({ isSuccessful: false, userTaken: false }))
      .call(fetchSignUpApiCall, action.payload)
      .put(setSignUpState({ isSuccessful: true }))
      .put(setSignUpState({ isSuccessful: false, userTaken: false }))
      .run();
  });
});
