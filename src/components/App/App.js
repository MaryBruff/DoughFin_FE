import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import Dashboard from '../Dashboard/Dashboard'
import './App.css';
import { useDispatch } from 'react-redux'
import { setTotalIncome } from '../../store/slices/totalIncomeSlice';
import { setTotalExpenses } from '../../store/slices/totalExpensesSlice';
import { setTransactions } from '../../store/slices/transactionsSlice';
import { setCashFlow } from '../../store/slices/cashFlowSlice';
import { useGetIncomes } from '../apollo-client/queries/getIncomes';
import { useGetExpenses } from '../apollo-client/queries/getExpenses';
import { useGetTransactions } from '../apollo-client/queries/getTransactions';
import { useGetCashFlow } from '../apollo-client/queries/getCashFlow';


const App = () => {
  const dispatch = useDispatch();

  // Testing the CI/CD pipeline! 🤓 💞
  // Hardcoded user, will pull from getUser endpoint soon
  const userName = "Powdered Toast Man";
  const email = "email@email.com"
  
  const { totalIncomeData } = useGetIncomes(email);
  const { totalExpensesData } = useGetExpenses(email);
  const { transactionsData } = useGetTransactions(email);
  const { cashFlowData } = useGetCashFlow(email);

  useEffect(() => {
    if (totalIncomeData) {
      const totalIncomeCents = Math.round(parseFloat(totalIncomeData) * 100);
      dispatch(setTotalIncome(totalIncomeCents));
    }
    if (totalExpensesData) {
      const totalExpensesCents = Math.round(parseFloat(totalExpensesData) * 100);
      dispatch(setTotalExpenses(totalExpensesCents));
    }
    if (transactionsData) dispatch(setTransactions(transactionsData));
    if (cashFlowData) dispatch(setCashFlow(cashFlowData));
  }, [totalIncomeData, totalExpensesData, transactionsData, cashFlowData, dispatch]);

  return (
    <main className='app'>
      <NavBar userName={userName} />
      <Dashboard />
    </main>
  )
}

export default App;
