import { getSignUp } from "../selectors";
import { initialState } from "../slice";
import { SignUpLoginMock } from "../../../../mocks/mockData";

describe("Sign Up - selectors", () => {
  test("getSignUp selector", () => {
    const signUpData = getSignUp.resultFunc({
      ...initialState,
      signUp: { user: SignUpLoginMock, isSuccessful: true, userTaken: false },
    });
    expect(signUpData).toEqual({
      user: SignUpLoginMock,
      isSuccessful: true,
      userTaken: false,
    });
  });
});
