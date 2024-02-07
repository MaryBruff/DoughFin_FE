import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Dashboard from '../Dashboard/Dashboard'
import transactionsData from "../../TransactionsData.json"
import cashflowData from "../../CashFlowData.json"
import incomeData from "../../IncomeData.json"
import expensesData from "../../ExpensesData.json"
import './App.css';


const App = () => {
  const [income, setIncome] = useState(transactionsData.data.income);
  const [expenses, setExpenses] = useState(transactionsData.data.expenses);
  const [totalIncome, setTotalIncome] = useState(incomeData.data.currentIncome.amount.toFixed(2));
  const [totalExpenses, setTotalExpenses] = useState(expensesData.data.currentExpenses.amount.toFixed(2));
  const userName = cashflowData.data.cashFlow.username;
  return (
    <main className='app'>
      <NavBar userName={userName} />
      <Dashboard
        income={income}
        totalIncome={totalIncome}
        setTotalIncome={setTotalIncome}
        setIncome={setIncome}
        expenses={expenses}
        totalExpenses={totalExpenses}
        setTotalExpenses={setTotalExpenses}
        setExpenses={setExpenses}
        incomeData={incomeData}
        expensesData={expensesData}
      />
    </main>
  )
}

export default App;