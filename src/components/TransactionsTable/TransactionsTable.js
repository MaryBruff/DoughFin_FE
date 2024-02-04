import React, {useState} from 'react'
import './TransactionsTable.css'
import SearchBarButton from '../../assets/icons/searchbar-button.svg'


const TransactionsTable = ({income, expenses}) => {
  const incomeTransactions = income.map(transaction => {
     return(
      <tr className='transactions-tr'>
        <td>{transaction.source}</td>
        <td>{transaction.date}</td>
        <td>{transaction.amount}</td>
        <td className='transactions-status-text'>Deposited</td>
      </tr>
     )
  })
  const expenseTransactions = expenses.map(transaction => {
    return(
     <tr className='transactions-tr'>
       <td>{transaction.description}</td>
       <td>{transaction.date}</td>
       <td>{transaction.amount}</td>
      <td className='transactions-status-text'>Completed</td>
     </tr>
    )
 })
  return (
    <section className='transactions'>
      <header className='transactions-header'>
        <h1 className='transactions-h1'>Transactions</h1>
        <div className='transactions-searchbar-container'>
          <div className='searchbar-flex'>
            <input className='searchbar-text' type='text' placeholder='Search...' />
            <button className='searchbar-button'></button>
          </div>
        </div>
      </header>
      <div className="table-scroll">

        <table className='transactions-table-container'>
          <thead >
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {incomeTransactions}
            {expenseTransactions}
          </tbody>
        </table>
      </div>
    </section>

  )
}

export default TransactionsTable