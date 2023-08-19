import { TouchableOpacity, View, Text, ActivityIndicator } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import CustomBtn from "~components/Button/CustomBtn";
import MapView from "react-native-maps";
import { useDispatch } from "react-redux";
import { setDestination, setDestinationAddress } from "~/slices/navSlice";
import React, { useState, useEffect } from "react";
import { GOOGLE_MAPS_APIKEY, GOONG_APIKEY } from "@env";
import axios from "axios";
import { colors } from "~utils/colors.js";
import * as Location from "expo-location";

const ChooseDestinationOnMap = () => {
  const navigation = useNavigation();

  const [addressPicked, setAddressPicked] = useState();

  const [latitudePicked, setLatitudePicked] = useState(10.8231);
  const [longitudePicked, setLongitudePicked] = useState(106.6297);

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        // Kiểm tra quyền truy cập vị trí
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.warn("Quyền truy cập vị trí không được cấp, vui lòng kiểm tra lại.");
          return;
        }

        // Lấy vị trí hiện tại
        const location = await Location.getCurrentPositionAsync({});

        // Gán giá trị vị trí hiện tại
        setLatitudePicked(location.coords.latitude);
        setLongitudePicked(location.coords.longitude);

        // Chuyển đổi vị trí hiện tại thành địa chỉ
        const address = await getPlaceFromCoordinates(location.coords.latitude, location.coords.longitude);
        setAddressPicked(address);
      } catch (error) {
        console.error("Lỗi khi lấy vị trí:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleRegionChange = async (region) => {
    setLatitudePicked(region.latitude);
    setLongitudePicked(region.longitude);
    const address = await getPlaceFromCoordinates(region.latitude, region.longitude);
    setAddressPicked(address);
  };

  const getPlaceFromCoordinates = async (latitude, longitude) => {
    // const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_APIKEY}`;
    const url = `https://rsapi.goong.io/Geocode?latlng=${latitude},${longitude}&api_key=${GOONG_APIKEY}`;

    try {
      const response = await axios.get(url);
      if (response.data.results.length > 0) {
        return response.data.results[0].formatted_address;
      } else {
        console.log(response.data.error_message);
        return null;
      }
    } catch (error) {
      console.error("Error getting place from coordinates:", error);
      return "Error";
    }
  };

  const getShortedAddress = (address) => {
    if (!address) return "N/A";
    const firstCommaIndex = address.indexOf(",");
    return address.substring(0, firstCommaIndex);
  };

  const getDetailAddress = (address) => {
    if (!address) return "N/A";
    const firstCommaIndex = address.indexOf(",");
    const lastCommaIndex = address.lastIndexOf(",");
    return address.substring(firstCommaIndex + 2, lastCommaIndex);
  };

  function handleConfirm() {
    dispatch(setDestination({ latitude: latitudePicked, longitude: longitudePicked }));
    dispatch(setDestinationAddress(addressPicked));
    navigation.navigate("ChooseOrigin");
  }

  return (
    <View style={styles.container}>
      <View style={styles.locationPickerContainer}>
        <>
          {!loading && (
            <View style={styles.container}>
              <View style={styles.map}>
                <MapView
                  style={{ flex: 1, zIndex: 0 }}
                  mapType="mutedStandard"
                  showsUserLocation
                  showsMyLocationButton
                  onRegionChangeComplete={handleRegionChange}
                  initialRegion={{
                    latitude: latitudePicked,
                    longitude: longitudePicked,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                  }}
                />
              </View>
              <View style={styles.locationContainer}>
                <View style={styles.icon}>
                  <FontAwesomeIcon icon={faCircleDot} size={25} color={colors.primary_300} />
                </View>
                <View>
                  <View style={styles.textContainer}>
                    <Text style={styles.text1}>{getShortedAddress(addressPicked)}</Text>
                    <Text style={styles.text2}>{getDetailAddress(addressPicked)}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.markerContainer}>
                <View style={styles.markerHead}>
                  <FontAwesomeIcon icon={faCircleDot} size={25} color={colors.primary_300} />
                </View>
                <View style={styles.markerFoot} />
                <View style={styles.markerBody} />
              </View>
            </View>
          )}
        </>
        <View style={styles.confirmBtn}>
          <TouchableOpacity onPress={handleConfirm}>
            <CustomBtn title="Chọn điểm đến" />
          </TouchableOpacity>
        </View>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faAngleLeft} size={22} color={"rgba(0, 0, 0, 0.8)"} />
          </TouchableOpacity>
        </View>
      </View>

      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={colors.primary_300} animating hidesWhenStopped />
        </View>
      )}
    </View>
  );
};

export default ChooseDestinationOnMap;
