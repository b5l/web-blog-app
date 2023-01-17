import { SignUpLoginMock } from "../../../../mocks/mockData";
import reducer, {
  fetchSignUpAction,
  initialState,
  setSignUpState,
} from "../slice";

describe("Sign Up - slices", () => {
  it("should fetch sign up data", () => {
    expect(reducer(initialState, fetchSignUpAction({}))).toEqual({
      ...initialState,
      signUp: {
        ...initialState.signUp,
        isSuccessful: false,
        userTaken: false,
      },
    });
  });

  it("should correctly set the fetched data", () => {
    expect(initialState.signUp).toEqual({
      ...initialState.signUp,
      userTaken: false,
      isSuccessful: false,
    });
    expect(
      reducer(
        initialState,
        setSignUpState({
          user: SignUpLoginMock,
          isSuccessful: true,
          userTaken: false,
        })
      )
    ).toEqual({
      ...initialState,
      signUp: {
        user: SignUpLoginMock,
        userTaken: false,
        isSuccessful: true,
      },
    });
  });
});
