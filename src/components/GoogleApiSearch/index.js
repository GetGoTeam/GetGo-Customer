import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, View } from "react-native";
import { colors, text } from "@utils/colors.js";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

const GoogleApiSearch = (props) => {
  const { hint, icon } = props;

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "100%",
    height: "auto",
    elevation: 8,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GoogleApiSearch;
