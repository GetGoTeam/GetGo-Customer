import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  originAddress: null,
  destination: null,
  destinationAddress: null,
  vehicleType: "motorcycle",
  travelTime: null,
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
  },
});

export const { setOrigin, setOriginAddress, setDestination, setDestinationAddress, setVehicleType, setTravelTime } =
  navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectOriginAddress = (state) => state.nav.originAddress;
export const selectDestination = (state) => state.nav.destination;
export const selectDestinationAddress = (state) => state.nav.destinationAddress;
export const selectVehicleType = (state) => state.nav.vehicleType;
export const selectTravelTime = (state) => state.nav.travelTime;

export default navSlice.reducer;
