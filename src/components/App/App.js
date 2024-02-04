import React from 'react'
import NavBar from '../NavBar/NavBar'
import Dashboard from '../Dashboard/Dashboard'
import transactionsData from "../../TransactionsData.json"
import cashflowData from "../../CashFlowData.json"
import './App.css';

const App = () => {
  const income = transactionsData.data.income;
  const expenses = transactionsData.data.expenses;
  const userName = cashflowData.data.cashFlow.username;
  return (
    <main className='app'>
      <NavBar userName={userName} />
      <Dashboard income={income} expenses={expenses}/>
    </main>
  )
}

export default App