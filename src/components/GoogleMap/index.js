import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectOrigin, selectDestination } from "~/slices/navSlice";
import React, { useEffect, useState } from "react";
import { GOOGLE_MAPS_APIKEY } from "@env";
import MapViewDirections from "react-native-maps-directions";
import { colors } from "~/src/utils/colors";

const GoogleMap = () => {
  // const origin = useSelector(selectOrigin);
  const [region, setRegion] = useState(null);

  // const origin = { latitude: 10.8231, longitude: 106.6297 };
  // const destination = { latitude: 10.7769, longitude: 106.6958 };

  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  return (
    <MapView
      style={{ flex: 1 }}
      region={{
        latitude: (origin.latitude + destination.latitude) / 2,
        longitude: (origin.longitude + destination.longitude) / 2,
        latitudeDelta: Math.abs(origin.latitude - destination.latitude) * 2,
        longitudeDelta: Math.abs(origin.longitude - destination.longitude) * 2,
      }}
    >
      <Marker coordinate={origin} title="Điểm đón" />
      <Marker coordinate={destination} title="Điểm đến" />
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor={colors.primary_300}
      />
    </MapView>
  );
};

export default GoogleMap;
