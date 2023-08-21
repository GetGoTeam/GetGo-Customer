import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import ChooseDestination from "~screens/ChooseDestination";
import ChooseDestinationOnMap from "~screens/ChooseDestination/ChooseDestinationOnMap/index";
import MainScreen from "~screens/MainScreen";
import ChooseOrigin from "~screens/ChooseOrigin";
import BookVehicle from "~screens/BookVehicle";
import SignIn from "~screens/SignIn";
import SignUp from "~screens/SignUp";

const MainStack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <MainStack.Screen name="SignIn" component={SignIn} />
      <MainStack.Screen name="SignUp" component={SignUp} />
      <MainStack.Screen name="MainScreen" component={MainScreen} />
      <MainStack.Screen name="ChooseDestination" component={ChooseDestination} />
      <MainStack.Screen name="ChooseDestinationOnMap" component={ChooseDestinationOnMap} />
      <MainStack.Screen name="ChooseOrigin" component={ChooseOrigin} />
      <MainStack.Screen name="BookVehicle" component={BookVehicle} />
    </MainStack.Navigator>
  );
};

export { MainStackNavigator };
