import React from 'react';
import { Card, Col, Row } from 'antd';
import { Line } from '@ant-design/plots';
import { Pie } from '@ant-design/plots';

const DashboardAnalytics = () => {
  const lineConfig = {
    data: [
      { date: 'May 1', value: 30 },
      { date: 'May 2', value: 45 },
      { date: 'May 3', value: 35 },
      { date: 'May 4', value: 50 },
      { date: 'May 5', value: 55 },
      { date: 'May 6', value: 65 },
    ],
    xField: 'date',
    yField: 'value',
    smooth: true,
    color: '#FB923C',
    areaStyle: { fill: 'rgba(251, 146, 60, 0.3)' },
    tooltip: { showMarkers: false },
  };

  const pieConfig = {
    data: [
      { type: 'COC-Cakes', value: 3500 },
      { type: 'COC-Drinks', value: 2200 },
      { type: 'COC-Breads', value: 1800 },
      { type: 'COC-Pastries', value: 1200 },
    ],
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: { type: 'spider', content: '{name} ({percentage})' },
    legend: { position: 'right' },
  };

  return (
    <section className="bg-gray-100 p-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Dashboard Analytics</h1>
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <Card className="shadow-lg rounded-xl">
              <h2 className="text-lg font-semibold mb-4">Sales Analytics</h2>
              <Line {...lineConfig} />
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card className="shadow-lg rounded-xl">
              <h2 className="text-lg font-semibold mb-4">Sales by Category</h2>
              <Pie {...pieConfig} />
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default DashboardAnalytics;




