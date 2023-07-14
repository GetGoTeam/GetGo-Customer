import { StyleSheet, Text, View } from "react-native";
import NavBarItem from "./NavBarItem";
import { text } from "./../../utils/colors";
import { faBell, faHouse, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

const items = [
  {
    title: "Trang chủ",
    icon: faHouse,
  },
  {
    title: "Hoạt động",
    icon: faPenToSquare,
  },
  {
    title: "Thông báo",
    icon: faBell,
  },
  {
    title: "Tài khoản",
    icon: faCircleUser,
  },
];

export default function NavBar() {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <NavBarItem index={index} title={item.title} icon={item.icon} />
      ))}
    </View>
  );
}

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
