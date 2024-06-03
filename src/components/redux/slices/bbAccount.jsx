import { createSlice } from "@reduxjs/toolkit";

export const bbAccountDet = createSlice({
  initialState: {
    name: "",
    category: "",
    licNo: "",
    licDate: "",
    licRenDate: "",
    bldAvail: "",
    serTime: "",
    state: "",
    district: "",
    city: "",
    pincode: "",
    bankLat: "",
    bankLong: "",
    address: "",
    offName: "",
    offQuali: "",
    offContact: "",
    contact: "",
    helpLine: "",
    email: "",
    profImg : "",
  },
  name: "bbAccountDet",
  reducers: {
    updateAccountDet: (state, action) => {
      // Update multiple values by merging the payload into the state
      Object.assign(state, action.payload);
    },
  },
});

export const { updateAccountDet } = bbAccountDet.actions;

export default bbAccountDet.reducer;
