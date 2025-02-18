import React, { useState } from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  department: string;
  role: string;
}

const data: DataType[] = [
  { key: '1', department: 'HR', role: 'Manager' },
  { key: '2', department: 'IT', role: 'Developer' },
  { key: '3', department: 'Finance', role: 'Analyst' },
];

function TeamUser() {
  const [sortedInfo, setSortedInfo] = useState<Partial<Record<'columnKey' | 'order', string>>>({});
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);

  type OnChange = NonNullable<TableProps<DataType>['onChange']>;
  type Sorts = Parameters<OnChange>[2];

  const handleRowSelect = (selectedRowKeys: React.Key[]) => {
    setSelectedKeys(selectedRowKeys);
  };

  const handleChange: OnChange = (_, __, sorter) => {
    setSortedInfo(sorter as Sorts);
  };

  const columns = [
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      sorter: (a: DataType, b: DataType) => a.department.localeCompare(b.department),
      sortOrder: sortedInfo?.columnKey === 'department' ? sortedInfo.order : null,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      sorter: (a: DataType, b: DataType) => a.role.localeCompare(b.role),
      sortOrder: sortedInfo?.columnKey === 'role' ? sortedInfo.order : null,
    },
  ];

  return (
    <div>
      <Table
        className="!border-none !shadow-none"
        columns={columns}
        dataSource={data}
        onChange={handleChange}
        rowSelection={{
          type: 'checkbox',
          selectedRowKeys: selectedKeys,
          onChange: handleRowSelect,
        }}
        pagination={false}
      />
    </div>
  );
}

export default TeamUser;