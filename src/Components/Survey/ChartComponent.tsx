import React from 'react';
import { Card } from 'antd';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', thisYear: 40, lastYear: 30 },
  { name: 'Feb', thisYear: 60, lastYear: 50 },
  { name: 'Mar', thisYear: 75, lastYear: 55 },
  { name: 'Apr', thisYear: 90, lastYear: 70 },
  { name: 'May', thisYear: 100, lastYear: 68 },
  { name: 'Jun', thisYear: 85, lastYear: 75 },
  { name: 'Jul', thisYear: 95, lastYear: 85 },
  { name: 'Aug', thisYear: 80, lastYear: 65 },
  { name: 'Sep', thisYear: 85, lastYear: 70 },
  { name: 'Oct', thisYear: 90, lastYear: 75 },
  { name: 'Nov', thisYear: 70, lastYear: 60 },
  { name: 'Dec', thisYear: 95, lastYear: 80 },
];

const ChartComponent = () => {
  return (
    <Card className="shadow-lg p-4 rounded-2xl">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-0"></h2>
        <div className="flex space-x-4">
          <span className="text-green-500 bg-gray-100 rounded px-3 py-1">This Year: 1870</span>
          <span className="text-red-500 bg-gray-100 rounded px-3 py-1">Last Year: 1250</span>
        </div>
      </div>
      <div className="h-30 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#888888" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="thisYear" stroke="#34d399" strokeWidth={2} />
            <Line type="monotone" dataKey="lastYear" stroke="#f87171" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ChartComponent;
