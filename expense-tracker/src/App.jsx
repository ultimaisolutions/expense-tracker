import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      <div className="main-container">        
        <h1 className="main-container-title">Expense Tracker</h1>       
        <div className="expense-tracker-container">
          <h3 className="expense-tracker-container-title">Your Expenses</h3>
          <ul className="expense-list">
            <li className="expense-card">Test card</li>
            <li className="expense-card">Test card</li>
            <li className="expense-card">Test card</li>
          </ul>
          <button className="add-expense-button">Add Expense</button>
        </div>

      </div>
    </>
  )
}

export default App
