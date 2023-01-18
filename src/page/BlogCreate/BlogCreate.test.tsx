import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import renderer from "react-test-renderer";
import { store } from "../../store";
import BlogCreate from "./BlogCreate";

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
    route: jest.fn(),
  },
  ...props,
});

describe("Blog Create page", () => {
  let props: any;
  beforeEach(() => {
    props = createTestProps({});
  });
  test("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <NativeBaseProvider>
            <BlogCreate {...props} />
          </NativeBaseProvider>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
