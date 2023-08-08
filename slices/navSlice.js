import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  vehicleType: "motorcycle",
  travelTimeInfomation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
    setTravelTimeInfomation: (state, action) => {
      state.travelTimeInfomation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setVehicleType, setTravelTimeInfomation } = navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectVehicleType = (state) => state.nav.vehicleType;
export const selectTravelTimeInfomation = (state) => state.nav.travelTimeInfomation;

export default navSlice.reducer;
