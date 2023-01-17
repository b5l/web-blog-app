import { getSignUp } from "../selectors";
import { initialState } from "../slice";
import { SignUpMock } from "../../../../mocks/mockData";

describe("Sign Up - selectors", () => {
  test("getSignUp selector", () => {
    const signUpData = getSignUp.resultFunc({
      ...initialState,
      signUp: { user: SignUpMock, isSuccessful: true, userTaken: false },
    });
    expect(signUpData).toEqual({
      user: SignUpMock,
      isSuccessful: true,
      userTaken: false,
    });
  });
});
