import { createSlice } from '@reduxjs/toolkit';

export const cashFlowSlice = createSlice({
  name: 'cashFlow',
  initialState: {
    items: null,
  },
  reducers: {
    setCashFlow: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.items = action.payload;
      } else {
        state.items = [...state.items, action.payload];
      }
    },
  },
});

export const { setCashFlow } = cashFlowSlice.actions;

export default cashFlowSlice.reducer;