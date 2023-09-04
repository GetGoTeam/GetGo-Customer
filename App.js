import { StyleSheet, SafeAreaView } from "react-native";
import { MainStackNavigator } from "./src/navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./store";
import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
});
