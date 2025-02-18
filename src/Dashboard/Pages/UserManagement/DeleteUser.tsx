import React, { useState } from 'react';
import { Form, Input, Select, Table, Checkbox, Button, Space, TableColumnsType, Avatar, Card, TableProps, Modal, Row, Col } from 'antd';
import { FilterOutlined, UserOutlined, CameraFilled, SearchOutlined, PlusOutlined } from '@ant-design/icons';
import emptyModal from '/public/modal.png';
import teamIcon from '/public/teamicon.png';

type OnChange = NonNullable<TableProps<DataType>['onChange']>;
type Filters = Parameters<OnChange>[1];
type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

interface DataType {
  key: string;
  department: string;
  role: string;
}

const data: DataType[] = [
  {
    key: '1',
    department: 'IT',
    role: 'Developer',
  },
  {
    key: '2',
    department: 'HR',
    role: 'Manager',
  },
];

const { Option } = Select;

function EditUser() {
  const [visible, setVisible] = useState(false); // Modal State
  const [sortedInfo, setSortedInfo] = useState<Sorts>({});
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const handleRowSelect = (key: string) => {
    setSelectedKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedKeys(data.map((item) => item.key));  // Select all
    } else {
      setSelectedKeys([]);  // Deselect all
    }
  };

  const handleChange: OnChange = (sorter: any) => {
    setSortedInfo(sorter as Sorts);
  };

  const columns: TableColumnsType<DataType> = [
  
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      sorter: (a, b) => a.department.localeCompare(b.department),
      sortOrder: sortedInfo.columnKey === 'department' ? sortedInfo.order : null,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      sorter: (a, b) => a.role.localeCompare(b.role),
      sortOrder: sortedInfo.columnKey === 'role' ? sortedInfo.order : null,
    },
  ];

  const onFinish = (values: any) => {
    console.log('Form Values:', values);
  };

  // Modal Functions
  const showModal = () => setVisible(true);
  const handleCancel = () => setVisible(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-6 h-screen overflow-hidden">
      {/* Profile Section */}
      <div className="bg-gray-100 p-5 rounded h-96">
        <h2 className="text-black font-bold text-xl mb-6">My Profile</h2>
        <Card className="bg-gray-200 rounded-lg shadow-md p-6 max-w-lg mx-auto">
          <div className="flex items-center mb-6 gap-4">
            <div className="relative inline-block">
              <Avatar size={64} icon={<UserOutlined />} className="mr-4" />
              <div className="absolute bottom-0 right-0 bg-orange-600 rounded-full p-2 shadow-md transform translate-x-1 translate-y-1">
                <CameraFilled style={{ color: 'white' }} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">John Doe</h3>
              <p className="text-gray-500">ADMIN</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500">Full Name:</span>
              <span className="text-gray-800">John Doe</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Mobile:</span>
              <span className="text-gray-800">+92-123 456789</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">E-mail:</span>
              <span className="text-gray-800">user@pakistancables.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Location:</span>
              <span className="text-gray-800">Karachi, Pakistan</span>
            </div>
          </div>
        </Card>
      </div>
      {/* Edit Profile Form */}
      <div className="bg-gray-100 p-5 rounded h-[490px] overflow-auto">
        <h2 className="text-black font-bold text-xl mb-3">Edit Profile</h2>
        <Form layout="vertical" onFinish={onFinish}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
            <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Please enter your first name' }]}>
              <Input placeholder="First Name" className="w-full text-sm" />
            </Form.Item>
            <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: 'Please enter your last name' }]}>
              <Input placeholder="Last Name" className="w-full text-sm" />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
              <Input placeholder="Email" className="w-full text-sm" />
            </Form.Item>
            <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please enter your phone number' }]}>
              <Input placeholder="Phone" className="w-full text-sm" />
            </Form.Item>
            <Form.Item label="Role ID" name="roleId" rules={[{ required: true, message: 'Please select a role' }]}>
              <Select placeholder="Role" className="w-full text-sm">
                <Option value="admin">Admin</Option>
                <Option value="user">User</Option>
                <Option value="manager">Manager</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Postal Code" name="postalCode" rules={[{ required: true, message: 'Please enter your postal code' }]}>
              <Input placeholder="Postal Code" className="w-full text-sm" />
            </Form.Item>
          </div>
          <Form.Item className='text-end'>
            <button className="p-2 bg-orange-600 text-white rounded text-xs active:scale-110">
              Update Profile
            </button>
          </Form.Item>
        </Form>
        <Form layout="vertical" onFinish={onFinish}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
            <Form.Item label="New Password" name="newPassword" rules={[{ required: true, message: 'Please enter your new password' }, { min: 6, message: 'Password must be at least 6 characters' }]}>
              <Input.Password placeholder="New Password" className="w-full text-sm" />
            </Form.Item>
            <Form.Item label="Repeat New Password" name="repeatNewPassword" dependencies={['newPassword']} rules={[{ required: true, message: 'Please confirm your new password' }, ({ getFieldValue }) => ({ validator(_, value) { if (!value || getFieldValue('newPassword') === value) { return Promise.resolve(); } return Promise.reject(new Error('Passwords do not match!')); } })]}>
              <Input.Password placeholder="Repeat Password" className="w-full text-sm" />
            </Form.Item>
          </div>
          <Form.Item className='text-end'>
            <button className="p-2 bg-orange-600 text-white rounded text-xs active:scale-110">
              Change Password
            </button>
          </Form.Item>
        </Form>
        <br />
        <div className="flex justify-between mb-4">
          <div className="flex gap-3">
            <button onClick={showModal} className="bg-orange-600 rounded p-2 text-white text-xs active:scale-110">- Delete</button>
            <div className="flex gap-2">
              <h1 className="mt-2 text-sm">All Teams</h1>
              <div className="bg-orange-600 text-white rounded-full p-2">(2)</div>
            </div>
          </div>
          <button className="px-3 bg-gray-200 text-black rounded text-xs me-4"> <FilterOutlined /> Filter</button>
        </div>
        <Table className="!border-none !shadow-none" columns={columns} dataSource={data} onChange={handleChange} rowSelection={{ type: 'checkbox', selectedRowKeys: selectedKeys, onSelect: (record) => handleRowSelect(record.key) }} />
      </div>

      {/* Modal for Adding Teams */}
      <Modal
        title="Add to Team"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        width={600}
      >
        <Row className='gap-2' gutter={16}>
          <Col className='border-1 border-gray-300 p-4 rounded' span={11}>
            <Input
              placeholder="Search..."
              prefix={<SearchOutlined />}
            />
             <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
  <div className='flex justify-between p-1'>
    <div className='flex justify-start gap-2 p-2'>
      <img src={teamIcon} height={17} width={35} alt="" />
      <h2 className='font-bold mt-1.5'>IT Department</h2>
    </div>
    <Button className='mt-2.5' icon={<PlusOutlined />} />
  </div>
  {/* 2 */}
  <div className='flex justify-between p-1'>
    <div className='flex justify-start gap-2 p-2'>
      <img src={teamIcon} height={17} width={35} alt="" />
      <h2 className='font-bold mt-1.5'>IT Department</h2>
    </div>
    <Button className='mt-2.5' icon={<PlusOutlined />} />
  </div>
  {/* 3 */}
  <div className='flex justify-between p-1'>
    <div className='flex justify-start gap-2 p-2'>
      <img src={teamIcon} height={17} width={35} alt="" />
      <h2 className='font-bold mt-1.5'>IT Department</h2>
    </div>
    <Button className='mt-2.5' icon={<PlusOutlined />} />
  </div>
  {/* 4 */}
  <div className='flex justify-between p-1'>
    <div className='flex justify-start gap-2 p-2'>
      <img src={teamIcon} height={17} width={35} alt="" />
      <h2 className='font-bold mt-1.5'>IT Department</h2>
    </div>
    <Button className='mt-2.5' icon={<PlusOutlined />} />
  </div>
  {/* 5 */}
  <div className='flex justify-between p-1'>
    <div className='flex justify-start gap-2 p-2'>
      <img src={teamIcon} height={17} width={35} alt="" />
      <h2 className='font-bold mt-1.5'>IT Department</h2>
    </div>
    <Button className='mt-2.5' icon={<PlusOutlined />} />
  </div>
  {/* 5 */}
  <div className='flex justify-between p-1'>
    <div className='flex justify-start gap-2 p-2'>
      <img src={teamIcon} height={17} width={35} alt="" />
      <h2 className='font-bold mt-1.5'>IT Department</h2>
    </div>
    <Button className='mt-2.5' icon={<PlusOutlined />} />
  </div>
  {/* 5 */}
  <div className='flex justify-between p-1'>
    <div className='flex justify-start gap-2 p-2'>
      <img src={teamIcon} height={17} width={35} alt="" />
      <h2 className='font-bold mt-1.5'>IT Department</h2>
    </div>
    <Button className='mt-2.5' icon={<PlusOutlined />} />
  </div>
  {/* 5 */}
  <div className='flex justify-between p-1'>
    <div className='flex justify-start gap-2 p-2'>
      <img src={teamIcon} height={17} width={35} alt="" />
      <h2 className='font-bold mt-1.5'>IT Department</h2>
    </div>
    <Button className='mt-2.5' icon={<PlusOutlined />} />
  </div>
</div>
          </Col>
          <Col className='border-1 border-gray-300 p-4 rounded' span={11}>
            <img src={emptyModal} alt="" />
            <p className='text-center'>no groups selected</p>
            <div className='flex justify-center gap-2 mt-5'>
              <button className='p-2 rounded text-black bg-gray-100' disabled >Submit</button>
              <button className='p-2 rounded text-black bg-gray-100' disabled >Remove All</button>
            </div>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

export default EditUser;
