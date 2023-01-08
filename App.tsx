import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import Navigation from "./src/components/navigation/navigation";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </Provider>
  );
}
