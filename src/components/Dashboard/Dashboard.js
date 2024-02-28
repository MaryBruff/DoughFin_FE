import React from "react";
import "./Dashboard.css";
import TransactionsTable from "../TransactionsTable/TransactionsTable";
import Budget from "../Budget/Budget";
import CashFlow from "../CashFlow/CashFlow";
import AddExpense from "../AddExpense/AddExpense";
import AddIncome from "../AddIncome/AddIncome";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <section className="dashboard-section">
        <CashFlow />
        <div className="dashboard-totals-container">
          <AddIncome/>
          <AddExpense/>
        </div>
        <TransactionsTable/>
      </section>
      <Budget />
    </main>
  );
};

export default Dashboard;
