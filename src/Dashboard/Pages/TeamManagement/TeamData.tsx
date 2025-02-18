import React, { useState } from "react";
import { Table, Button, Input, Card, Select, Tag, Modal, Form } from "antd";
import { PlusOutlined, ExportOutlined, FilterOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Search } = Input;
const { Option } = Select;

interface TeamData {
  key: number;
  teamName: string;
  memberCount: number;
  teamHead: string;
  region: string;
  area: string;
  status: string;
}

const data: TeamData[] = [
  {
    key: 1,
    teamName: "IT Team",
    memberCount: 51,
    teamHead: "John Smith",
    region: "South",
    area: "Bahria Town",
    status: "Active",
  },
  {
    key: 2,
    teamName: "Finance Team",
    memberCount: 20,
    teamHead: "Maryam Amiri",
    region: "North",
    area: "Gulshan-e-Iqbal",
    status: "Inactive",
  },
  {
    key: 3,
    teamName: "Web Development",
    memberCount: 20,
    teamHead: "Frank Camly",
    region: "South",
    area: "Gulshan-e-Iqbal",
    status: "Active",
  },
  {
    key: 4,
    teamName: "Marketing",
    memberCount: 20,
    teamHead: "Gary Camara",
    region: "South",
    area: "Bahria Town",
    status: "Active",
  },
  {
    key: 5,
    teamName: "App Development",
    memberCount: 20,
    teamHead: "Fidel Town",
    region: "South",
    area: "Gulshan-e-Iqbal",
    status: "Inactive",
  },
  {
    key: 6,
    teamName: "Support",
    memberCount: 20,
    teamHead: "Maryam Amiri",
    region: "South",
    area: "Gulshan-e-Iqbal",
    status: "Active",
  },
];

const columns = [
  {
    title: "Team Name",
    dataIndex: "teamName",
    key: "teamName",
  },
  {
    title: "Member Count",
    dataIndex: "memberCount",
    key: "memberCount",
  },
  {
    title: "Team Head",
    dataIndex: "teamHead",
    key: "teamHead",
  },
  {
    title: "Region",
    dataIndex: "region",
    key: "region",
  },
  {
    title: "Area",
    dataIndex: "area",
    key: "area",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => (
      <Tag color={status === "Active" ? "green" : "volcano"}>{status}</Tag>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () =><Link to="/team-management/team"><Button type="link">View</Button></Link>,
  },
];

const TeamData: React.FC = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const onSearch = (value: string) => {
    setFilteredData(
      data.filter((item) =>
        item.teamName.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
    <div className="">
      {/* <FilterUI /> */}
      <div className=" bg-[#FFFFFF] rounded-2xl">
        <div className="flex gap-2 p-2 justify-between items-center mb-4">
          <Search
            placeholder="Search Team..."
            allowClear
            onSearch={onSearch}
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
            icon={<PlusOutlined />}
            type="default"
            className="!bg-[#FF8548] !text-[#FFFFFF]"
            onClick={showModal}
          >
            Create Team
          </Button>
        </div>
        <div className="flex justify-between p-2">
          <p className="pt-2 text-[#008444]">
            ALL TEAMS <span className="border-1 rounded ms-2 p-1">(9)</span>
          </p>
          <Button icon={<FilterOutlined />} type="default">
            Filters
          </Button>
        </div>

        <Card className="rounded-2xl shadow-sm">
          <Table columns={columns} dataSource={filteredData} pagination={{ pageSize: 5 }} />
        </Card>
      </div>

      {/* Modal Section */}
      <Modal
        title="Add Team"
        visible={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Team Name" name="teamName">
            <Input placeholder="Enter Team Name" />
          </Form.Item>
          <Form.Item label="Team Head" name="teamHead">
            <Select placeholder="Select Team Head">
              <Option value="Salman Haider">Salman Haider</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Region" name="region">
            <Select placeholder="Select Region">
              <Option value="North">North</Option>
              <Option value="South">South</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Area" name="area">
            <Select placeholder="Select Area">
              <Option value="Gulshan-e-Iqbal">Gulshan-e-Iqbal</Option>
              <Option value="Bahria Town">Bahria Town</Option>
            </Select>
          </Form.Item>
          <div className="flex justify-center">
            <Button
              type="primary"
              className="!bg-[#FF8548] !text-white"
              onClick={() => {
                form.resetFields();
                setIsModalOpen(false);
              }}
            >
              Add Team
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default TeamData;
