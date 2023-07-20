import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, useWindowDimensions, Keyboard } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faHouse, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import Home from "../../screens/MainScreen/Home";
import Activities from "../../screens/MainScreen/Activities";
import Notifications from "../../screens/MainScreen/Notifications";
import Account from "../../screens/MainScreen/Account";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { colors, text } from "../../utils/colors";

const HomeRoute = () => <Home />;
const ActivitiesRoute = () => <Activities />;
const NotificationsRoute = () => <Notifications />;
const AccountRoute = () => <Account />;

const renderScene = SceneMap({
  Home: HomeRoute,
  Activities: ActivitiesRoute,
  Notifications: NotificationsRoute,
  Account: AccountRoute,
});

const getTabBarIcon = ({ route, focused }) => {
  let icon = null;
  switch (route.key) {
    case "Home":
      icon = faHouse;
      break;
    case "Activities":
      icon = faPenToSquare;
      break;
    case "Notifications":
      icon = faBell;
      break;
    case "Account":
      icon = faCircleUser;
      break;
    default:
      icon = null;
  }
  return <FontAwesomeIcon icon={icon} size={22} color={focused ? colors.primary_300 : text.color_300} />;
};

const renderTabBar = ({ isKeyboardVisible, ...props }) => (
  <View style={[styles.tabBar, isKeyboardVisible ? { display: "none" } : ""]}>
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: colors.primary_300 }}
      style={{ backgroundColor: "white" }}
      renderIcon={(props) => getTabBarIcon(props)}
      renderLabel={({ route, focused }) => (
        <Text style={{ color: focused ? colors.primary_300 : text.color_300, fontSize: 14, fontWeight: "bold" }}>
          {route.title}
        </Text>
      )}
    />
  </View>
);

const CustomTabView = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "Home", title: "Trang chủ" },
    { key: "Activities", title: "Hoạt động" },
    { key: "Notifications", title: "Thông báo" },
    { key: "Account", title: "Tài khoản" },
  ]);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });

    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        tabBarPosition="bottom"
        renderTabBar={(props) => renderTabBar({ isKeyboardVisible, ...props })}
        swipeEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    borderTopWidth: 0.5,
    borderTopColor: text.color_200,
  },
});

export default CustomTabView;
