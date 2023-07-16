import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { colors } from "../utils/colors";

import Home from "../screens/Home";
import Notifications from "../screens/Notifications";
import Activities from "../screens/Activities";
import Account from "../screens/Account";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Activities" component={Activities} />
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
