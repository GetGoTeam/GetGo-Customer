import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { colors } from "../utils/colors";

import ChoosePickUpLocation from "../screens/ChoosePickUpLocation";
import MainScreen from "../screens/MainScreen";

const MainStack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <MainStack.Screen name="MainScreen" component={MainScreen} />
      <MainStack.Screen name="ChoosePickUpLocation" component={ChoosePickUpLocation} />
    </MainStack.Navigator>
  );
};

export { MainStackNavigator };
