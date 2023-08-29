import MapView, { Marker, Polyline } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectOrigin, selectDestination } from "~/slices/navSlice";
import React, { useState } from "react";
import { GOOGLE_MAPS_APIKEY, GOONG_APIKEY } from "@env";
import MapViewDirections from "react-native-maps-directions";
import { colors } from "~utils/colors";

const GoogleMap = (props) => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const { polyline } = props;

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
      <Marker coordinate={destination} title="Điểm đến" pinColor="aqua" />
      {/* <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor={colors.primary_300}
      /> */}

      <Polyline coordinates={polyline} strokeColor={colors.primary_300} strokeWidth={5} />
    </MapView>
  );
};

export default GoogleMap;
