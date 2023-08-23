import { Text, View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./styles";
import { faAngleLeft, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import GoogleApiSearch from "~components/GoogleApiSearch";
import CustomBtn from "~components/Button/CustomBtn";
import RecommendationItem from "~components/RecommendationItem";
import { useDispatch } from "react-redux";
import { setDestination, setDestinationAddress } from "~/slices/navSlice";
import GoongApiSearch from "~components/GoongApiSearch";
import { AutocompleteDropdownContextProvider } from "react-native-autocomplete-dropdown";
import { useState } from "react";
import { colors, text } from "~utils/colors.js";

const ChooseDestination = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const recommendationData = [
    {
      address: "227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, TP.HCM",
      lat: 10.762794,
      lng: 106.682555,
    },
    {
      address: "227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, TP.HCM",
      lat: 10.762794,
      lng: 106.682555,
    },
    {
      address: "227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, TP.HCM",
      lat: 10.762794,
      lng: 106.682555,
    },
  ];

  const handleRecommendationSelect = (item) => {
    dispatch(setDestinationAddress(item.address));
    dispatch(setDestination({ latitude: item.lat, longitude: item.lng }));
  };

  return (
    <AutocompleteDropdownContextProvider>
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
            <Image style={styles.headerImage} source={require("~assets/header.png")} />
          </View>

          <View style={styles.body}>
            <View style={styles.searchBar}>
              {/* <GoogleApiSearch hint="Đến đâu?" icon={faLocationDot} /> */}
              <GoongApiSearch hint="Đến đâu?" icon={faLocationDot} setLoading={setLoading} />
            </View>
            <View style={styles.recommendation}>
              {recommendationData.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    handleRecommendationSelect(item);
                    navigation.navigate("ChooseOrigin");
                  }}
                >
                  <RecommendationItem address={item.address} />
                  <View style={styles.divLine} />
                </TouchableOpacity>
              ))}
            </View>
            {/* <View style={styles.confirmBtn}>
            <TouchableOpacity onPress={() => navigation.navigate("ChooseOrigin")}>
              <CustomBtn title="Chọn điểm đến" />
            </TouchableOpacity>
          </View> */}
          </View>
        </View>
        {loading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={colors.primary_300} animating hidesWhenStopped />
          </View>
        )}
      </View>
    </AutocompleteDropdownContextProvider>
  );
};

export default ChooseDestination;
