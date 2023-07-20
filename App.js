import { MainStackNavigator } from "./src/navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import CustomTabView from "./src/components/CustomTabView";

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
