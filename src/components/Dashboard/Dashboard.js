import React from 'react'
import './Dashboard.css'
import Total from '../Total/Total'
import TransactionsTable from '../TransactionsTable/TransactionsTable'
import Budget from '../Budget/Budget'
import DownArrow from '../../assets/icons/down-arrow.svg'
import UpArrow from '../../assets/icons/up-arrow.svg'

const Dashboard = ({income, expenses, incomeData, expensesData}) => {
  return (
    <main className='dashboard'>
      <section className='dashboard-section'>
        <table className='dashboard-activity-chart'>
          A Chart.js chart will go here
        </table>
        <div className='dashboard-totals-container'>
          {/* The Total component will need conditional rendering to for the arrow AND percentage */}
          <Total
            totalType={'Total Income:'}
            totalAmount={incomeData.data.currentIncome.amount}
            totalPercentage={incomeData.data.currentIncome.pctChange.toString()}
            arrow={UpArrow}
          />
          <Total
            totalType={'Total Expenses:'}
            totalAmount={expensesData.data.currentExpenses.amount}
            totalPercentage={expensesData.data.currentExpenses.pctChange.toString()}
            arrow={DownArrow}
          />
        </div>
        <TransactionsTable income={income} expenses={expenses} />
      </section>
      <Budget />
    </main>
  )
}

export default Dashboard