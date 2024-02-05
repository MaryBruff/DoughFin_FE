import React from "react";
import "./Dashboard.css";
import Total from "../Total/Total";
import TransactionsTable from "../TransactionsTable/TransactionsTable";
import Budget from "../Budget/Budget";

const Dashboard = ({
  income,
  setIncome,
  totalIncome,
  setTotalIncome,
  expenses,
  totalExpenses,
  setTotalExpenses,
  setExpenses,
  incomeData,
  expensesData,
}) => {
  return (
    <main className="dashboard">
      <section className="dashboard-section">
        <table className="dashboard-activity-chart">
        </table>
        <div className="dashboard-totals-container">
          <Total
            totalType={"Total Income:"}
            setIncome={setIncome}
            totalAmount={totalIncome}
            setTotalIncome={setTotalIncome}
            totalPercentage={incomeData.data.currentIncome.pctChange.toString()}
          />
          <Total
            totalType={"Total Expenses:"}
            setExpenses={setExpenses}
            totalAmount={totalExpenses}
            setTotalExpenses={setTotalExpenses}
            totalPercentage={expensesData.data.currentExpenses.pctChange.toString()}
          />
        </div>
        <TransactionsTable
          income={income}
          setIncome={setIncome}
          expenses={expenses}
          setExpenses={setExpenses}
        />
      </section>
      <Budget />
    </main>
  );
};

export default Dashboard;
