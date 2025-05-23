import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  keyword: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    sortingDataFunc: (state, action) => {
      state.data = [
        ...state.data.sort((a, b) =>
          action.payload == "asc" ? a.price - b.price : action.payload == "desc" ? b.price - a.price : null
        ),
      ];
    },
    searchDataFunc: (state, action) => {
      state.keyword = action.payload;
    },
    deleteDataFunc: (state, action) => {
      state.data = [...state.data.filter((dt) => dt.id != action.payload)];
    },
    updateDataFunc: (state, action) => {
      state.data = [...state.data.map((dt) => (dt.id == action.payload.id ? { ...dt, ...action.payload } : dt))];
    },
  },
});

export const { createDataFunc, deleteDataFunc, updateDataFunc, sortingDataFunc, searchDataFunc } = dataSlice.actions;
export default dataSlice.reducer;
