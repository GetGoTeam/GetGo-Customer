import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { colors, text } from "../../utils/colors";
import { faAngleLeft, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import GoogleApiSearch from "../../components/GoogleApiSearch";

const ChoosePickUpLocation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.backBtn}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesomeIcon icon={faAngleLeft} size={22} color={"rgba(0, 0, 0, 0.8)"} />
            </TouchableOpacity>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.text1}>Đặt xe</Text>
            <Text style={styles.text2}>Chọn điểm đến</Text>
          </View>
          <Image style={styles.headerImage} source={require("../../../assets/header.png")} />
        </View>

        <View style={styles.body}>
          <View style={styles.searchBar}>
            <GoogleApiSearch hint="Đến đâu?" icon={faLocationDot} />
          </View>
        </View>
      </View>
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
  GooglePlacesAutocomplete: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  header: {
    backgroundColor: colors.primary_200,
    height: 175,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  backBtn: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 40,
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.8)",
  },
  text2: {
    fontSize: 16,
    fontWeight: 500,
    color: "rgba(0, 0, 0, 0.6)",
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
    width: "95%",
    height: "100%",
  },
  bookingBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  bookingBtnContainer: {
    width: "90%",
  },
  carousel: {
    width: "100%",
    marginTop: 30,
  },
});

export default ChoosePickUpLocation;
