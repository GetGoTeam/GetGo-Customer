import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./styles";
import { colors, text } from "~utils/colors.js";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY, GOONG_APIKEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setDestination } from "~/slices/navSlice";
import { useState } from "react";

const GoogleApiSearch = (props) => {
  const { hint, icon } = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const getCoordinatesFromAddress = async (address) => {
    try {
      setLoading(true);
      const url = `https://rsapi.goong.io/geocode?address=${encodeURIComponent(address)}&api_key=${GOONG_APIKEY}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.results.length > 0) {
        const latitude = data.results[0].geometry.location.lat;
        const longitude = data.results[0].geometry.location.lng;
        return {
          lat: latitude,
          lng: longitude,
        };
      } else {
        console.error("No results found.");
        return null;
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handlePlaceSelect = async (data, details = null) => {
    // console.log("data: ", data);
    // console.log("details: ", details);
    try {
      const coordinates = await getCoordinatesFromAddress(data);
      dispatch(setDestination({ latitude: coordinates.lat, longitude: coordinates.lng }));
    } finally {
      navigation.navigate("ChooseOrigin");
    }
  };

  return (
    <View style={[styles.container]}>
      <GooglePlacesAutocomplete
        placeholder={hint}
        autoFocus={true}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        renderLeftButton={() => (
          <View style={[styles.icon]}>
            <TouchableOpacity onPress={() => navigation.navigate("ChooseDestinationOnMap")}>
              <FontAwesomeIcon icon={icon} size={22} color={colors.primary_300} />
            </TouchableOpacity>
          </View>
        )}
        textInputProps={{
          autoFocus: true,
        }}
        onPress={handlePlaceSelect}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "vi",
          components: "country:VN",
        }}
        styles={{
          textInput: {
            height: 35,
            fontSize: 16,
          },
        }}
      />
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={colors.primary_300} animating hidesWhenStopped />
        </View>
      )}
    </View>
  );
};

export default GoogleApiSearch;
