import { View, Text, Image } from "react-native";
import styles from "./styles";
import MapView from "react-native-maps";
import { useSelector } from "react-redux";
import { selectOrigin } from "~/slices/navSlice";
import React, { useState } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import Geolocation from "react-native-geolocation-service";
import { GOOGLE_MAPS_APIKEY } from "@env";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { colors } from "~utils/colors.js";

const LocationPicker = () => {
  const origin = useSelector(selectOrigin);
  const [region, setRegion] = useState(null);
  const [locationPicked, setLocationPicked] = useState();

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

  const getCurrentLocation = () => {
    if (Platform.OS === "android" && Platform.Version >= 23) {
      // Kiểm tra và yêu cầu quyền truy cập vị trí trên Android 6.0 trở lên
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
        .then((granted) => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // Quyền truy cập vị trí đã được cấp
            Geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                setRegion({
                  latitude,
                  longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                });
              },
              (error) => {
                console.log("Error:", error);
              },
              { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
          } else {
            // Quyền truy cập vị trí bị từ chối
            console.log("Location permission denied");
          }
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    } else {
      // Trường hợp là iOS hoặc Android dưới 6.0
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setRegion({
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
        },
        (error) => {
          console.log("Error:", error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  };

  return (
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
            latitude: 10.8231,
            longitude: 106.6297,
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
  );
};

export default LocationPicker;
