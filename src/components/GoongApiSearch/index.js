import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { colors, text } from "~utils/colors.js";
import { GOONG_APIKEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setDestination, setDestinationAddress } from "~/slices/navSlice";
import { useState } from "react";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

const GoongApiSearch = (props) => {
  const { hint, icon, setLoading } = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [searchLoading, setSearchLoading] = useState(false);
  const [options, setOptions] = useState();

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

  const handlePlaceSelect = async (data) => {
    try {
      const coordinates = await getCoordinatesFromAddress(data);
      dispatch(setDestinationAddress(data));
      dispatch(setDestination({ latitude: coordinates.lat, longitude: coordinates.lng }));
    } finally {
      navigation.navigate("ChooseOrigin");
    }
  };

  const placeSearch = async (input) => {
    if (!input) return;
    try {
      const url = `https://rsapi.goong.io/Place/AutoComplete?api_key=${GOONG_APIKEY}&input=${encodeURIComponent(input)}
      }`;
      setSearchLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      if (data.predictions.length > 0) {
        const data2options = data.predictions.map((item, index) => ({ id: index.toString(), title: item.description }));
        setOptions(data2options.slice(0, 3));
      } else {
        console.error("No results found.");
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    } finally {
      setSearchLoading(false);
    }
  };

  return (
    <>
      <AutocompleteDropdown
        clearOnFocus={false}
        loading={searchLoading}
        onChangeText={placeSearch}
        onSelectItem={(item) => {
          item && handlePlaceSelect(item.title);
        }}
        debounce={600}
        useFilter={false}
        textInputProps={{
          autoFocus: true,
          placeholder: hint,
          placeholderTextColor: text.color_400,
          autoCorrect: false,
          autoCapitalize: "none",
          style: {
            borderRadius: 4,
            backgroundColor: "white",
            paddingLeft: 40,
          },
        }}
        rightButtonsContainerStyle={{
          right: 8,
          height: 30,
          alignSelf: "center",
        }}
        inputContainerStyle={{
          backgroundColor: "white",
          borderRadius: 4,
          elevation: 10,
        }}
        suggestionsListContainerStyle={{
          backgroundColor: "white",
        }}
        dataSet={options}
      />
      <View style={[styles.icon]}>
        <TouchableOpacity onPress={() => navigation.navigate("ChooseDestinationOnMap")}>
          <FontAwesomeIcon icon={icon} size={22} color={colors.primary_300} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default GoongApiSearch;
