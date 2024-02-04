import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 25 },
  { id: 1, value: 15 },
];

export default function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          cx: 140,
          innerRadius: 60,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
        },
      ]}
      height={200}
    />
  );
}