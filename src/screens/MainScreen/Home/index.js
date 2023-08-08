import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import SearchBar from "~components/SearchBar";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import BookingBtn from "~components/Button/BookingBtn";
import QuickBookingBtn from "~components/Button/QuickBookingBtn";
import ImageCarousel from "~components/ImageCarousel";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setVehicleType } from "~/slices/navSlice";

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.text1}>Ứng dụng</Text>
              <Text style={styles.text2}>Đa dịch vụ</Text>
            </View>
            <Image style={styles.headerImage} source={require("~assets/header.png")} />
          </View>

          <View style={styles.body}>
            <View style={styles.searchBar}>
              <TouchableOpacity
                style={{ width: "100%" }}
                activeOpacity={1}
                onPress={() => navigation.navigate("ChooseDestination")}
              >
                <View style={{ width: "90%" }}>
                  <SearchBar icon={faMagnifyingGlass} hint="Nhập điểm đến" editable={false} shadow />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.bookingBtnContainer}>
              <View style={styles.bookingBtn}>
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={() => {
                    dispatch(setVehicleType("motorcycle"));
                    navigation.navigate("ChooseDestination");
                  }}
                >
                  <BookingBtn title="Xe máy" icon={require("~assets/motorcycle.png")} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={() => {
                    dispatch(setVehicleType("car4"));
                    navigation.navigate("ChooseDestination");
                  }}
                >
                  <BookingBtn title="Xe hơi" icon={require("~assets/car.png")} />
                </TouchableOpacity>
              </View>
              <QuickBookingBtn
                des="103 Trần Đình Xu, P.Nguyễn Cư Trinh, Q.1, TP.HCM"
                icon={require("~assets/car.png")}
              />
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

export default Home;
