import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import renderer from "react-test-renderer";
import { store } from "../../store";
import Login from "./Login";

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
    route: jest.fn(),
  },
  ...props,
});

describe("Login page", () => {
  let props: any;
  beforeEach(() => {
    props = createTestProps({});
  });
  test("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <NativeBaseProvider>
            <Login {...props} />
          </NativeBaseProvider>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
