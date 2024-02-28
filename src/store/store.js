import { configureStore } from '@reduxjs/toolkit';
import totalIncomeReducer from './slices/totalIncomeSlice';
import totalExpensesReducer from './slices/totalExpensesSlice';
import transactionsReducer from './slices/transactionsSlice';
import cashFlowReducer from './slices/cashFlowSlice';

export default configureStore({
  reducer: {
    totalIncome: totalIncomeReducer,
    totalExpenses: totalExpensesReducer,
    transactions: transactionsReducer,
    cashFlow: cashFlowReducer,
  },
});