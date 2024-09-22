// src/components/ServiceOverviewChart.tsx
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { ServiceData } from '../types';

interface ServiceOverviewChartProps {
  services: ServiceData[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF4560'];

const ServiceOverviewChart: React.FC<ServiceOverviewChartProps> = ({ services }) => {
  const data = services.map((service) => ({
    name: service.name,
    value: service.price,
  }));

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend 
        layout="vertical"
        verticalAlign="middle"
        align="right"
        wrapperStyle={{
          position: 'absolute',
          top: '380px', // Set a fixed top position
          right: '10px',
          maxHeight: '360px', // Limit the height to avoid overflow
          overflow: 'auto', // Enable scrolling if necessary
        }}
      />
    </PieChart>
  );
};

export default ServiceOverviewChart;
