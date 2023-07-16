import { StyleSheet, Text, View, Button, Image } from "react-native";
import NavBar from "../../components/NavBar";
import { colors, text } from "../../utils/colors";
import SearchBar from "../../components/SearchBar";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.text1}>Ứng dụng</Text>
            <Text style={styles.text2}>Đa dịch vụ</Text>
          </View>
          <Image style={styles.headerImage} source={require("../../../assets/header.png")} />
        </View>

        <View style={styles.body}>
          <View style={styles.searchBar}>
            <SearchBar icon={faMagnifyingGlass} hint="Nhập điểm đến" />
          </View>
        </View>
      </View>
      <NavBar navigation={navigation} activeIndex={0} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_50,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  header: {
    backgroundColor: colors.primary_200,
    height: "25%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
  },
  text1: {
    fontSize: 20,
    fontWeight: 500,
    color: "rgba(0, 0, 0, 0.8)",
  },
  text2: {
    fontSize: 32,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.8)",
  },
  headerImage: {
    flex: 0.8,
    resizeMode: "contain",
    alignSelf: "center",
  },
  body: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  searchBar: {
    position: "relative",
    top: -20,
  },
});

export default Home;
