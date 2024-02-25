import React from "react";
import "./TransactionsTable.css";

const TransactionsTable = ({ transactions }) => {
  const transactionEntries = transactions && transactions.map((transaction, i) => {
    let statusColor = transaction.status === 'credited' ? '#02B15A' : '#E41414';
    let vendorName = !transaction.vendor ? 'No Vendor' : transaction.vendor;
    return (
      <tr className="transactions-tr" key={transactions.id}>
        <td>{vendorName}</td>
        <td>{transaction.date}</td>
        <td>{(transaction.amount).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
        <td style={{ color: statusColor }} className="transactions-status-text">{transaction.status}</td>
      </tr>
    );
  });
  
  return (
    <section className="transactions">
      <header className="transactions-header">
        <h1 className="transactions-h1">Transactions</h1>
        <div className="transactions-searchbar-container">
          <div className="searchbar-flex">
            <input
              className="searchbar-text"
              type="text"
              placeholder="Search..."
            />
            <button className="searchbar-button"></button>
          </div>
        </div>
      </header>
      <div className="table-scroll">
        <table className="transactions-table-container">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactionEntries}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransactionsTable;
