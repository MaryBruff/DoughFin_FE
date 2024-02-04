import React from 'react'
import NavBar from '../NavBar/NavBar'
import Dashboard from '../Dashboard/Dashboard'
import data from "../../data.json"
import './App.css';

const App = () => {
  return (
    <main className='app'>
      <NavBar />
      <Dashboard data={data}/>
    </main>
  )
}

export default App