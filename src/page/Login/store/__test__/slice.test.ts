import { SignUpLoginMock } from "../../../../mocks/mockData";
import reducer, {
  fetchLoginAction,
  initialState,
  setLoginState,
} from "../slice";

describe("Login - slices", () => {
  it("should fetch Login data", () => {
    expect(reducer(initialState, fetchLoginAction({}))).toEqual({
      ...initialState,
      login: {
        ...initialState.login,
        isAuth: false,
      },
    });
  });

  it("should correctly set the fetched data", () => {
    expect(initialState.login).toEqual({
      ...initialState.login,
      isAuth: false,
    });
    expect(
      reducer(
        initialState,
        setLoginState({
          user: SignUpLoginMock,
          isAuth: true,
        })
      )
    ).toEqual({
      ...initialState,
      login: {
        user: SignUpLoginMock,
        isAuth: true,
      },
    });
  });
});
