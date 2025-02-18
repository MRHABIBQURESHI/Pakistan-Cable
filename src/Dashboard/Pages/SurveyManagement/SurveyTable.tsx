import React from 'react';
import { Table, Tag, Menu, Dropdown } from 'antd';
import type { TableColumnsType } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined, MoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

interface DataType {
  key: React.Key;
  surveyId: string;
  surveyName: string;
  description: string;
  targetAudience: string;
  dates: string;
  status: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Survey ID',
    dataIndex: 'surveyId',
    key: 'surveyId',
  },
  {
    title: 'Survey Name',
    dataIndex: 'surveyName',
    key: 'surveyName',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Target Audience',
    dataIndex: 'targetAudience',
    key: 'targetAudience',
  },
  {
    title: 'Start and End Dates',
    dataIndex: 'dates',
    key: 'dates',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <Tag color={status === 'Active' ? 'green' : status === 'Pending' ? 'orange' : 'red'}>
        {status}
      </Tag>
    ),
  },
  {
    title: 'Option',
    key: 'option',
    render: (_, record) => (
      <Dropdown
        overlay={
          <Menu>
            <Link to='/survey-management/response'><Menu.Item key="1">  <EyeOutlined  /></Menu.Item></Link>
            <Menu.Item key="2">  <EditOutlined />  </Menu.Item>
            <Menu.Item key="3">  <DeleteOutlined />  </Menu.Item>
          </Menu>
        }
        trigger={['click']}
      >
        <MoreOutlined style={{ fontSize: 20, cursor: 'pointer' }} />
      </Dropdown>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    surveyId: 'S001',
    surveyName: 'Customer Satisfaction',
    description: 'Survey to gather customer feedback',
    targetAudience: 'Customers',
    dates: '2025-01-01 to 2025-01-31',
    status: 'Active',
  },
  {
    key: '2',
    surveyId: 'S002',
    surveyName: 'Employee Engagement',
    description: 'Internal survey for employees',
    targetAudience: 'Employees',
    dates: '2025-02-01 to 2025-02-15',
    status: 'Pending',
  },
  {
    key: '3',
    surveyId: 'S003',
    surveyName: 'Market Research',
    description: 'Research on market trends',
    targetAudience: 'General Public',
    dates: '2025-03-01 to 2025-03-30',
    status: 'Completed',
  },
];

const SurveyTable: React.FC = () => {
  return <Table
  className = 'overflow-x-auto'
  columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />;
};

export default SurveyTable;
