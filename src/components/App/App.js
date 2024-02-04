import React from 'react'
import NavBar from '../NavBar/NavBar'
import Dashboard from '../Dashboard/Dashboard'
import './App.css';

const App = () => {
  return (
    <main className='app'>
      <NavBar />
      <Dashboard />
    </main>
  )
}

export default App