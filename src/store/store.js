import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import totalIncomeReducer from './slices/totalIncomeSlice';
import totalExpensesReducer from './slices/totalExpensesSlice';
import transactionsReducer from './slices/transactionsSlice';
import cashFlowReducer from './slices/cashFlowSlice';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const middleware = [thunk];

export default configureStore({
  reducer: {
    totalIncome: totalIncomeReducer,
    totalExpenses: totalExpensesReducer,
    transactions: transactionsReducer,
    cashFlow: cashFlowReducer,
  },
});