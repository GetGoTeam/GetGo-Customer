import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import ChooseDestination from "@screens/ChooseDestination";
import MainScreen from "@screens/MainScreen";

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
      <MainStack.Screen name="ChooseDestination" component={ChooseDestination} />
    </MainStack.Navigator>
  );
};

export { MainStackNavigator };
