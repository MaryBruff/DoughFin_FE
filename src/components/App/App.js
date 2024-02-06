import React from 'react'
import NavBar from '../NavBar/NavBar'
import Dashboard from '../Dashboard/Dashboard'
import transactionsData from "../../TransactionsData.json"
import cashflowData from "../../CashFlowData.json"
import incomeData from "../../IncomeData.json"
import expensesData from "../../ExpensesData.json"
import './App.css';
import FinanceData from "../../fetchCalls"

const App = () => { 
  const income = transactionsData.data.income;
  const expenses = transactionsData.data.expenses;
  const userName = cashflowData.data.cashFlow.username;
  return (
    <main className='app'>
      <NavBar userName={userName} />
      <Dashboard income={income} expenses={expenses} incomeData={incomeData} expensesData={expensesData}/>
      <FinanceData email={"moneybaggins@bigbanktakelilbank.doge"}/>
    </main>
  )
}

export default App;