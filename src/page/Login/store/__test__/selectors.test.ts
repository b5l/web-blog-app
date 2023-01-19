import { getLogin } from "../selectors";
import { initialState } from "../slice";
import { SignUpLoginMock } from "../../../../mocks/mockData";

describe("Login - selectors", () => {
  test("getLogin selector", () => {
    const loginData = getLogin.resultFunc({
      ...initialState,
      login: { user: SignUpLoginMock, isAuth: false },
    });
    expect(loginData).toEqual({
      user: SignUpLoginMock,
      isAuth: false,
    });
  });
});
