import React, { useState } from "react";
import { Table, Button, Modal, Input, Avatar, Space, Checkbox, Tag } from "antd";
import { EditOutlined, DeleteOutlined, FilterOutlined, PlusOutlined, ExportOutlined } from "@ant-design/icons";
import { FaUserLarge } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";

import Empty from "/modal.png"
// import { TbFileExport } from "react-icons/tb";
import type { ColumnsType } from "antd/es/table";

const { Search } = Input;

interface DataType {
  key: number;
  username: string;
  email: string;
  position: string;
  department: string;
  role: string;
  status: string;
}

interface MemberData {
  key: number;
  name: string;
  email: string;
}

const availableMembers: MemberData[] = [
  { key: 1, name: "Salman Haider", email: "mail@domain.com" },
  { key: 2, name: "Salman Haider", email: "mail@domain.com" },
  { key: 3, name: "Salman Haider", email: "mail@domain.com" },
  { key: 4, name: "Salman Haider", email: "mail@domain.com" },
  { key: 5, name: "Salman Haider", email: "mail@domain.com" },
];

const data: DataType[] = []; // Empty data for no results

const TeamTable: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState<MemberData[]>([]);

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);

  const handleAddMember = (member: MemberData) => {
    if (!selectedMembers.some((m) => m.key === member.key)) {
      setSelectedMembers([...selectedMembers, member]);
    }
  };

  const handleRemoveMember = (key: number) => {
    setSelectedMembers(selectedMembers.filter((member) => member.key !== key));
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "",
      key: "checkbox",
      render: () => <Checkbox className="accent-[#FF8548]" />,
    },
    {
      title: "User Name",
      dataIndex: "username",
      key: "username",
      render: (text) => (
        <Space>
          <Avatar style={{ backgroundColor: "#87d068" }}>{text.charAt(0)}</Avatar>
          <span>{text}</span>
        </Space>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <Tag
          color={
            role === "Team Head" ? "green" : role === "Manager" ? "blue" : "orange"
          }
        >
          {role}
        </Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Active" ? "green" : "volcano"}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button icon={<EditOutlined />} type="link" />
          <Button icon={<DeleteOutlined />} danger type="link" />
        </Space>
      ),
    },
  ];

  return (
    <div className="px-4">
      <div className="bg-[#FFFFFF] rounded-t-2xl">
      <div className="flex gap-2 p-2 justify-between items-center mb-1">
          <Search
            placeholder="Search Team..."
            allowClear
            className="w-1/3 "
          />

          <Button
            className="!text-[#008444] !bg-[#FAFAFA]"
            icon={<ExportOutlined />}
            type="default"
          >
            Export
          </Button>
          <Button
            type="default"
            className="!bg-[#FF8548] !text-[#FFFFFF]"
          >
            Add Member
          </Button>
        </div>
        <div className="flex justify-between p-2">
          <div className="pt-2 flex gap-4">
            <p className="!cursor-pointer">
          <PlusOutlined className="!text-[#008444] !me-1" />
          <span className="text-gray-600">ADD</span>
          </p>
            <p className="!cursor-pointer flex ">
          <TbFileExport className="!text-[#008444] !me-1 " />
          <span className="text-gray-600">EXPORT</span>
          </p>
          </div>
          <Button icon={<FilterOutlined />} type="default">
            Filters
          </Button>
      </div>

        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
          locale={{
            emptyText: (
              <div className="text-center py-10 h-96 rounded-lg">
                <Button className="!bg-[#FAFAFA] !text-black !w-80 !h-56 rounded-md flex flex-col justify-center items-center" onClick={showModal}>
                  <FaUserLarge className="!text-[#008444] text-4xl mb-2" />
                  <span>Add Team Members</span>
                </Button>
              </div>
            ),
          }}
        />
      </div>

      {/* Add Members Modal */}
      <Modal title="Add Members" open={isModalVisible} onCancel={hideModal} footer={null} width={800}>
        <div className="grid grid-cols-2 gap-4">
          {/* Available Members */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <Search className="mb-4" placeholder="Search User..." />
            {availableMembers.map((member) => (
              <div key={member.key} className="flex items-center justify-between py-1">
                <Space>
                  <Avatar>{member.name.charAt(0)}</Avatar>
                  <div>
                    <p className="!m-0">{member.name}</p>
                    <p className="text-sm text-gray-500 !m-0">{member.email}</p>
                  </div>
                </Space>
                <Button icon={<PlusOutlined />} type="default" onClick={() => handleAddMember(member)} />
              </div>
            ))}
          </div>

          {/* Selected Members */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="font-semibold text-lg">Selected Members</h2>
            {selectedMembers.length > 0 ? (
              selectedMembers.map((member) => (
                <div key={member.key} className="flex items-center justify-between py-1">
                  <Space>
                    <Avatar>{member.name.charAt(0)}</Avatar>
                    <div>
                      <p className="font-medium !m-0">{member.name}</p>
                      <p className="text-sm text-gray-500 !m-0">{member.email}</p>
                    </div>
                  </Space>
                  <Button
                    icon={<DeleteOutlined />}
                    type="text"
                    danger
                    onClick={() => handleRemoveMember(member.key)}
                  />
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-52">
                <img src={Empty} alt="empty" />
                <p>No User Selected</p>
              </div>
            )}

            <div className="flex justify-between mt-4">
              <Button className="!bg-[#FF8548] !text-white" disabled={selectedMembers.length === 0}>
                Add
              </Button>
              <Button danger onClick={() => setSelectedMembers([])} disabled={selectedMembers.length === 0}>
                Remove All
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TeamTable;
