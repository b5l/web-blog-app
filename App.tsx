import { NativeBaseProvider } from "native-base";
import Navigation from "./src/components/navigation/navigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  );
}
