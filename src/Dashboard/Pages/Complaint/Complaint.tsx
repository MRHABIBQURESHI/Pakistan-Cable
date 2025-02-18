
import React, { useState } from 'react'
import { Table, Tag, Button, Modal, Form, Input, Select } from "antd";
import ComplaintAging from '../../../Components/Complaint/ComplaintAging';
import type { ColumnType } from 'antd/es/table'

interface TicketData {
    id: number;
    date: string;
    customerName: string;
    subject: string;
    priority: string;
    status: string;
    assignee: string;
  }
  const data: TicketData[] = [
    {
      id: 27,
      date: "Apr 02, 2023",
      customerName: "Muhammad",
      subject: "I need help with adding a New Contact...",
      priority: "Low",
      status: "Pending",
      assignee: "Muhammad",
    },
    {
      id: 54,
      date: "Apr 02, 2023",
      customerName: "Ali",
      subject: "Service related announcements",
      priority: "Medium",
      status: "Open",
      assignee: "Ali",
    },
    {
      id: 68,
      date: "Apr 02, 2023",
      customerName: "Ahmed",
      subject: "Service related announcements",
      priority: "High",
      status: "Closed",
      assignee: "Ahmed",
    },
    {
      id: 87,
      date: "Apr 02, 2023",
      customerName: "Bilal",
      subject: "I need help with adding a New Contact...",
      priority: "High",
      status: "Closed",
      assignee: "Bilal",
    },
    {
      id: 92,
      date: "Apr 02, 2023",
      customerName: "Usman",
      subject: "Adding a payment methods",
      priority: "Low",
      status: "Open",
      assignee: "Usman",
    },
  ];
  const columns: ColumnType <TicketData> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text:any) => `#${text}`,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Subjects",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      render: (priority : any) => {
        let color = "";
        switch (priority) {
          case "High":
            color = "red";
            break;
          case "Medium":
            color = "orange";
            break;
          case "Low":
            color = "gray";
            break;
        }
        return <Tag color={color}>{priority}</Tag>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: any) => {
        let color = "";
        switch (status) {
          case "Pending":
            color = "gold";
            break;
          case "Open":
            color = "green";
            break;
          case "Closed":
            color = "red";
            break;
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Assignee",
      dataIndex: "assignee",
      key: "assignee",
    },
    {
      title: "",
      key: "action",
      render: () => <Button type="text">...</Button>,
    },
  ];
const Complaint: React.FC = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
  const rowSelection:any = {
    selectedRowKeys,
    onChange: (selectedKeys: number[]) => setSelectedRowKeys(selectedKeys),
  };
  const handleOpenModal = () => {
    setIsModalVisible(true);
  };
  const handleCloseModal = () => {
    setIsModalVisible(false);
    form.resetFields();
  };
  const handleFormSubmit = (values: any) => {
    console.log("Form Data:", values);
    setIsModalVisible(false);
    form.resetFields();
  };
  return (
    <div className='!w-auto '>
        <div className='bg-[#FFFFFF] p-4 rounded-3xl '>
            <h2 className='text-xl'>Complaint Aging</h2>
            <ComplaintAging />
        </div>
        <div className="p-4 bg-white rounded-2xl shadow-md mt-4">
            <div className='flex justify-between mb-2'>
                <div>
                <h2 className="text-lg font-semibold !m-0">All Support Tickets</h2>
                <p className="text-sm text-gray-500 !m-0">List of tickets opened by Customer</p>
                </div>
                <div>
                <Button
                    type="default"
                    className="!bg-[#FF8548] !text-[#FFFFFF] !px-6"
                    onClick={handleOpenModal}>
            Add New
          </Button>
                </div>
            </div>
      <Table
        rowKey="id"
        rowSelection={rowSelection}
        dataSource={data}
        columns={columns}
        pagination={{ pageSize: 5 }}
        scroll={{ x: 900 }}
      />
      {/* Modal */}
      <Modal
        title="New Ticket"
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFormSubmit}
        >
          <Form.Item name="subject" label="Subject" rules={[{ required: true, message: 'Please enter the subject' }]}>
            <Input placeholder="Enter subject" />
          </Form.Item>
          <Form.Item name="type" label="Type" rules={[{ required: true }]}>
            <Select placeholder="Select type">
              <Select.Option value="type1">Type 1</Select.Option>
              <Select.Option value="type2">Type 2</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="status" label="Status" initialValue="Open">
            <Select>
              <Select.Option value="Open">Open</Select.Option>
              <Select.Option value="Closed">Closed</Select.Option>
              <Select.Option value="Pending">Pending</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="priority" label="Priority" initialValue="Low">
            <Select>
              <Select.Option value="Low">Low</Select.Option>
              <Select.Option value="Medium">Medium</Select.Option>
              <Select.Option value="High">High</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="assignee" label="Assign To">
            <Select placeholder="Select assignee">
              <Select.Option value="user1">User 1</Select.Option>
              <Select.Option value="user2">User 2</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea placeholder="Enter description" />
          </Form.Item>
          <div className="flex justify-end gap-2">
            <Button className='!text-[#008444]' onClick={handleCloseModal}>Cancel</Button>
            <Button className='!bg-[#FF8548] !text-white ' htmlType="submit">
              Create
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
    </div>
  )
}
export default Complaint