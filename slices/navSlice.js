import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  originAddress: null,
  destination: null,
  destinationAddress: null,
  vehicleType: "motorcycle",
  travelTime: null,
  token: null,
  userInfo: null,
  driver: null,
  trip: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setOriginAddress: (state, action) => {
      state.originAddress = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setDestinationAddress: (state, action) => {
      state.destinationAddress = action.payload;
    },
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
    setTravelTime: (state, action) => {
      state.travelTime = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setDriver: (state, action) => {
      state.driver = action.payload;
    },
    setTrip: (state, action) => {
      state.trip = action.payload;
    },
  },
});

export const {
  setOrigin,
  setOriginAddress,
  setDestination,
  setDestinationAddress,
  setVehicleType,
  setTravelTime,
  setToken,
  setUserInfo,
  setDriver,
  setTrip,
} = navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectOriginAddress = (state) => state.nav.originAddress;
export const selectDestination = (state) => state.nav.destination;
export const selectDestinationAddress = (state) => state.nav.destinationAddress;
export const selectVehicleType = (state) => state.nav.vehicleType;
export const selectTravelTime = (state) => state.nav.travelTime;
export const selectToken = (state) => state.nav.token;
export const selectUserInfo = (state) => state.nav.userInfo;
export const selectDriver = (state) => state.nav.driver;
export const selectTrip = (state) => state.nav.trip;

export default navSlice.reducer;
