import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import renderer from "react-test-renderer";
import { store } from "../../store";
import BlogPosts from "./BlogPosts";

jest.mock(
  "react-native-vector-icons/MaterialCommunityIcons",
  () => "MaterialCommunityIcons"
);

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
    route: jest.fn(),
  },
  ...props,
});

describe("Blog Posts page", () => {
  let props: any;
  beforeEach(() => {
    props = createTestProps({});
  });
  test("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <NativeBaseProvider>
            <BlogPosts {...props} />
          </NativeBaseProvider>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
