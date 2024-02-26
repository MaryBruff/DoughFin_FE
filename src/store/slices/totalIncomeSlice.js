import { createSlice } from '@reduxjs/toolkit';

export const totalIncomeSlice = createSlice({
  name: 'totalIncome',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementTotalIncome: (state, action) => {
      state.value += action.payload;
    },
    setTotalIncome: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { incrementTotalIncome, setTotalIncome } = totalIncomeSlice.actions;

export default totalIncomeSlice.reducer;
