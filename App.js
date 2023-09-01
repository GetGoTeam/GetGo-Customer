import { SafeAreaView, Alert } from "react-native";
import { MainStackNavigator } from "./src/navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./store";
import EStyleSheet from "react-native-extended-stylesheet";
import messaging from "@react-native-firebase/messaging";
import { useEffect } from "react";

EStyleSheet.build();

export default function App() {
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  }

  useEffect(() => {
    if (requestUserPermission()) {
      messaging()
        .getToken()
        .then((token) => {
          console.log(token);
        });
    } else {
      console.log("Failed token status", authStatus);
    }

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
        if (remoteMessage) {
          console.log("Notification caused app to open from quit state:", remoteMessage.notification);
        }
      });

    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp(async (remoteMessage) => {
      console.log("Notification caused app to open from background state:", remoteMessage.notification);
    });

    // Register background handler
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

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
