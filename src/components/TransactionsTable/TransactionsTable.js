import React from 'react'
import './TransactionsTable.css'
import SearchBarButton from '../../assets/icons/searchbar-button.svg'

const TransactionsTable = () => {
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
          <tbody >
            <tr>
              <td>McDonalds</td>
              <td>Fri, 19 Apr 2020</td>
              <td>$8000.69</td>
              <td className='transactions-status-text'>Deposited</td>
            </tr>
            <tr className='transactions-tr'>
              <td>McDonalds</td>
              <td>Fri, 19 Apr 2020</td>
              <td>$8000.69</td>
              <td className='transactions-status-text'>Deposited</td>
            </tr>
            <tr className='transactions-tr'>
              <td>McDonalds</td>
              <td>Fri, 19 Apr 2020</td>
              <td>$8000.69</td>
              <td className='transactions-status-text'>Deposited</td>
            </tr>
            <tr className='transactions-tr'>
              <td>McDonalds</td>
              <td>Fri, 19 Apr 2020</td>
              <td>$8000.69</td>
              <td className='transactions-status-text'>Deposited</td>
            </tr>
            <tr className='transactions-tr'>
              <td>McDonalds</td>
              <td>Fri, 19 Apr 2020</td>
              <td>$8000.69</td>
              <td className='transactions-status-text'>Deposited</td>
            </tr>
            <tr className='transactions-tr'>
              <td>McDonalds</td>
              <td>Fri, 19 Apr 2020</td>
              <td>$8000.69</td>
              <td className='transactions-status-text'>Deposited</td>
            </tr>
            <tr className='transactions-tr'>
              <td>McDonalds</td>
              <td>Fri, 19 Apr 2020</td>
              <td>$8000.69</td>
              <td className='transactions-status-text'>Deposited</td>
            </tr>
            <tr className='transactions-tr'>
              <td>McDonalds</td>
              <td>Fri, 19 Apr 2020</td>
              <td>$8000.69</td>
              <td className='transactions-status-text'>Deposited</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

  )
}

export default TransactionsTable