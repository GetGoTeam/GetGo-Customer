import { View, Text } from "react-native";
import styles from "./styles";
import MapView from "react-native-maps";
import { useSelector } from "react-redux";
import { selectOrigin } from "~/slices/navSlice";
import React, { useState, useEffect } from "react";
import { GOOGLE_MAPS_APIKEY } from "@env";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { colors } from "~utils/colors.js";
import * as Location from "expo-location";

const LocationPicker = () => {
  const origin = useSelector(selectOrigin);
  const [region, setRegion] = useState(null);

  const [locationPicked, setLocationPicked] = useState();

  const [currentLatitude, setCurrentLatitude] = useState(10.8231);
  const [currentLongitude, setCurrentLongitude] = useState(106.6297);

  const [loading, setLoading] = useState(true);

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
        setCurrentLatitude(location.coords.latitude);
        setCurrentLongitude(location.coords.longitude);

        // Chuyển đổi vị trí hiện tại thành địa chỉ
        const address = await getPlaceFromCoordinates(location.coords.latitude, location.coords.longitude);
        setLocationPicked(address);
      } catch (error) {
        console.error("Lỗi khi lấy vị trí:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleRegionChange = async (region) => {
    const address = await getPlaceFromCoordinates(region.latitude, region.longitude);
    setLocationPicked(address);
  };

  const getPlaceFromCoordinates = async (latitude, longitude) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_APIKEY}`;

    try {
      const response = await axios.get(url);
      if (response.data.results.length > 0) {
        return response.data.results[0].formatted_address;
      } else {
        return "Unknown address";
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

  return (
    <>
      {!loading && (
        <View style={styles.container}>
          <View style={styles.map}>
            <MapView
              style={{ flex: 1, zIndex: 0 }}
              mapType="mutedStandard"
              showsUserLocation
              showsMyLocationButton
              region={region}
              onRegionChangeComplete={handleRegionChange}
              initialRegion={{
                latitude: currentLatitude,
                longitude: currentLongitude,
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
                <Text style={styles.text1}>{getShortedAddress(locationPicked)}</Text>
                <Text style={styles.text2}>{getDetailAddress(locationPicked)}</Text>
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
  );
};

export default LocationPicker;
