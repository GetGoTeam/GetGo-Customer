import { StyleSheet, Text, View, Button } from "react-native";
import NavBarItem from "./NavBarItem";
import { text } from "./../../utils/colors";
import { faBell, faHouse, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

const items = [
  {
    title: "Trang chủ",
    icon: faHouse,
    navigate: "Home",
  },
  {
    title: "Hoạt động",
    icon: faPenToSquare,
    navigate: "Activities",
  },
  {
    title: "Thông báo",
    icon: faBell,
    navigate: "Notifications",
  },
  {
    title: "Tài khoản",
    icon: faCircleUser,
    navigate: "Account",
  },
];

const Navbar = (props) => {
  const { activeIndex, navigation } = props;

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <NavBarItem
          key={index}
          title={item.title}
          icon={item.icon}
          navigation={navigation}
          active={activeIndex === index ? true : false}
          navigate={item.navigate}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    borderTopColor: text.color_400,
    borderTopWidth: 0.5,
  },
});

export default Navbar;
