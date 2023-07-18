import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./src/navigation/StackNavigator";
import CustomTabView from "./src/components/CustomTabView";

export default function App() {
  return (
    <NavigationContainer>
      {/* <MainStackNavigator /> */}
      <CustomTabView />
    </NavigationContainer>
  );
}
