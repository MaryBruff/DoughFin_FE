import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useSelector } from 'react-redux';


export default function BasicBars() {
  const cashFlow = useSelector((state) => state.cashFlow.items);

  const monthOrder = {
    Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
    Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12
  };

  const sortedCashFlow = cashFlow ? [...cashFlow].sort((a, b) => monthOrder[a.month.slice(0, 3)] - monthOrder[b.month.slice(0, 3)]) : [];

  const xAxisData = sortedCashFlow.map(item => item.month.slice(0, 3));
  const incomeData = sortedCashFlow.map(item => item.totalIncome);
  const expenseData = sortedCashFlow.map(item => item.totalExpense);
  let series = []

  if (cashFlow) {
    series = [
      { label: 'Total Income', data: incomeData, color: '#6359E9' },
      { label: 'Total Expense', data: expenseData, color: '#64CFF6' }
    ];
  }

  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: xAxisData, tickLabelStyle: { fill: '#8C89B4'}}]}
      yAxis={[{ scaleType: 'linear', tickLabelStyle: { fill: '#8C89B4' } }]}
      series={series.map(serie => ({ data: serie.data, color: serie.color }))}
      width={620}
      height={300}
      colors={['#6359E9', '#64CFF6']}
      margin={{
        left: 55,
        right: 1,
      }}
    />
  );
};