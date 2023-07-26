import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View } from "react-native";
import styles from "./styles";
import { colors, text } from "~utils/colors.js";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useNavigation } from "@react-navigation/native";

const GoogleApiSearch = (props) => {
  const { hint, icon } = props;
  const navigation = useNavigation();

  const handlePlaceSelect = (data, details = null) => {
    navigation.navigate("ChooseOrigin");
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
