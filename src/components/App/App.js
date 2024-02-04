import React, {useState} from 'react'
import NavBar from '../NavBar/NavBar'
import Dashboard from '../Dashboard/Dashboard'
import transactionsData from "../../TransactionsData.json"
import './App.css';

const App = () => {
  const income = transactionsData.data.income;
  const expenses = transactionsData.data.expenses;
  return (
    <main className='app'>
      <NavBar />
      <Dashboard income={income} expenses={expenses}/>
    </main>
  )
}

export default App