import { createSlice } from '@reduxjs/toolkit';

export const totalExpensesSlice = createSlice({
  name: 'totalExpenses',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementTotalExpenses: (state, action) => {
      state.value += action.payload;
    },
    setTotalExpenses: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { incrementTotalExpenses, setTotalExpenses } = totalExpensesSlice.actions;

export default totalExpensesSlice.reducer;