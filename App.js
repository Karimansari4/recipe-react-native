import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import Main from "./src/Main";

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Main />
      </PaperProvider>
    </NavigationContainer>
  );
}