import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View } from "react-native";
import styles from "./styles";
import { colors, text } from "~utils/colors.js";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setDestination } from "~/slices/navSlice";
import axios from "axios";

const GoogleApiSearch = (props) => {
  const { hint, icon } = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const getCoordinatesFromPlaceId = async (placeId) => {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_MAPS_APIKEY}`;

    try {
      const response = await axios.get(url);
      const { status, result } = response.data;

      if (status === "OK" && result.geometry) {
        const { location } = result.geometry;
        return {
          latitude: location.lat,
          longitude: location.lng,
        };
      } else {
        throw new Error("Failed to get coordinates from place_id.");
      }
    } catch (error) {
      console.error("Error getting coordinates:", error);
      throw error;
    }
  };

  const handlePlaceSelect = (data, details = null) => {
    // console.log(JSON.stringify(details));
    // getCoordinatesFromPlaceId("ChIJhycdB7ZUNDERV6HcjXynmrk");
    navigation.navigate("ChooseOrigin");
  };

  handlePlaceSelect();

  return (
    <View style={[styles.container]}>
      <GooglePlacesAutocomplete
        placeholder={hint}
        autoFocus={true}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        renderLeftButton={() => (
          <View style={[styles.icon]}>
            <FontAwesomeIcon icon={icon} size={22} color={colors.primary_300} />
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
    </View>
  );
};

export default GoogleApiSearch;
