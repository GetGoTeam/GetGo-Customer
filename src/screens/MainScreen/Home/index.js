import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { colors, text } from "../../../utils/colors";
import SearchBar from "../../../components/SearchBar";
import { faMagnifyingGlass, faMotorcycle, faCarSide } from "@fortawesome/free-solid-svg-icons";
import BookingBtn from "../../../components/Button/BookingBtn";
import QuickBookingBtn from "../../../components/Button/QuickBookingBtn";
import ImageCarousel from "../../../components/ImageCarousel";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.text1}>Ứng dụng</Text>
              <Text style={styles.text2}>Đa dịch vụ</Text>
            </View>
            <Image style={styles.headerImage} source={require("../../../../assets/header.png")} />
          </View>

          <View style={styles.body}>
            <View style={styles.searchBar}>
              <TouchableOpacity
                style={{ width: "100%" }}
                activeOpacity={1}
                onPress={() => navigation.navigate("ChoosePickUpLocation")}
              >
                <SearchBar icon={faMagnifyingGlass} hint="Nhập điểm đến" editable={false} />
              </TouchableOpacity>
            </View>

            <View style={styles.bookingBtnContainer}>
              <View style={styles.bookingBtn}>
                <TouchableOpacity onPress={() => navigation.navigate("ChoosePickUpLocation")}>
                  <BookingBtn title="Xe máy" icon={faMotorcycle} />
                </TouchableOpacity>
                <BookingBtn title="Xe hơi" icon={faCarSide} />
              </View>
              <QuickBookingBtn des="103 Trần Đình Xu, P.Nguyễn Cư Trinh, Q.1, TP.HCM" icon={faMotorcycle} />
            </View>

            <View style={styles.carousel}>
              <ImageCarousel />
            </View>
          </View>
        </View>
      </ScrollView>
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
  scrollView: {
    width: "100%",
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

export default Home;
