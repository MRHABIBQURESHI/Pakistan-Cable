import { useState } from 'react';
import { Space, Table, Modal, Input , Tag, Spin, Avatar, notification} from 'antd';
import { DeleteOutlined, SearchOutlined, EditOutlined, ArrowDownOutlined, FilterOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getUserData } from '../../../Services/ManageUser/UserService';
import { UserDataTypes } from '../../../Lib/Types/UserTypes.D';
import PostUserPage from './PostUserPage';
import { record } from 'zod';


function UserTable() {

  const columns = [
    { title: 'Username', 
      dataIndex: 'firstName',
      key:'firstName',
      render:(_:any, record:any) =>(
        <Space>
        <Avatar src={record.image} />
        {`${record.firstName} ${record.lastName}`}
      </Space>
      ),
      // sorter:(a:any , b:any) => a.firstName.localCompare(b.firstName)
     },
    { title: 'Email', dataIndex: 'email' },
    { 
      title: 'UpdatedAt', 
      dataIndex: 'updatedAt',
      key:'updatedAt',
      // render:(record:any) => `${record.updatedAt}`
    },
    
    {
      title: 'Role',
      key: 'role',
      dataIndex: 'role', // Uncommented to use role data directly
      render: (role:string) => {
        let color = 
        role === "Admin"&&"admin" ? "blue" : role === "Manager" ? "gold" : role === "manager" ? "gold" : role === "Lead" ? "green" : "red";
        return <Tag color = {color}>{role}</Tag>; 
      },
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status', // Uncommented to use status data directly
      render: (status :string) => (
       <Tag color={status === 'Active' ? 'green' : 'red'}>{status}</Tag>
      ),
    },
    
    
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_:any , record:UserDataTypes) => (
        <Space className='flex gap-2'>
          <EditOutlined onClick={() =>  handleClickEdit(record)}  style={{ color: 'green', fontSize: '20px', cursor: 'pointer' }} />
          <DeleteOutlined onClick={() => deleteUser(record.id , record.status)} style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }} />
        </Space>
      ),
    }
  ];
  
  const navigate = useNavigate()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);
  const [query , setQuery] = useState('')
  const[pagination , setPagination] = useState({
    current : 1,
    pageSize : 4,
  })

  const handlePagination = (newPagination:any) => {
setPagination({
  current: newPagination.current,
  pageSize: newPagination.pageSize
})
  }

const {data , isFetching} = useQuery({
  queryKey:['users', pagination.current , pagination.pageSize , query],
  queryFn: () => getUserData(pagination.current , pagination.pageSize , query),
  placeholderData:keepPreviousData,
  // staleTime:50000,
})
// Get Data with TanSrack End
  
  const handleClickEdit = ( record:any ) => {
    navigate(`/editUser/${record.id}`)
  }

  

  // Delete Data with TanSrack Start

  const deleteUser = (id:any , status:any ) => {
     console.log(id , status )
  }


  // const qureyClient = useQueryClient();
  // const deleteUserMutation = useMutation({
  //   mutationFn:deleteUserData,
  //   onSuccess:() => {
  //     notification.success({message:"User Delete Successfully"})
  //     console.log("User Delete")
  //     qureyClient.invalidateQueries({queryKey:['users']})
  //   },
  //   onError:() => {
  //     notification.error({message:"User Can`t be Delete"})
  //   }
  // })
  // Delete Data with TanSrack End
  
  // Table Variables Fetch Data
  const total = data?.total || 0
  const UsrData = Array.isArray(data?.data.data)? data?.data.data : []
  const dataSources = UsrData?.map((item :UserDataTypes) => ({...item , key : item.id}))
  // console.log(total , UsrData)
  return (
    <>
      <div>
        <div className='p-2 mt-2 mb-2 flex'>
          <Input 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          size="large" 
          placeholder="Search User ..." 
          prefix={<SearchOutlined />} />
          <div className='flex gap-5 ms-5'>
            <button className='px-3 bg-gray-100 text-green-700 rounded whitespace-nowrap active:scale-110'>
              <ArrowDownOutlined /> Export
            </button>
            <button onClick={showModal} className='px-8 bg-orange-600 w-full text-white rounded whitespace-nowrap active:scale-110'>
              Create User
            </button>
          </div>
        </div>
        <div className='flex justify-between mb-3'>
          <div className='flex gap-4'>
            <div className='flex gap-2'>
              <h1 className='mt-2'>All USER</h1>
              <div className='bg-gray-100 rounded-full p-2'>({total})</div>
            </div>
            <div className='flex gap-2'>
              <h1 className='mt-2'>ADMIN</h1>
              <div className='bg-gray-100 rounded-full p-2'>(5)</div>
            </div>
            <div className='flex gap-2'>
              <h1 className='mt-2'>MANAGER</h1>
              <div className='bg-gray-100 rounded-full p-2'>(17)</div>
            </div>
            <div className='flex gap-2'>
              <h1 className='mt-2'>SALE PERSON</h1>
              <div className='bg-gray-100 rounded-full p-2'>(23)</div>
            </div>
          </div>
          <button className='px-4 bg-gray-100 text-black rounded me-2 whitespace-nowrap active:scale-110'>
            <FilterOutlined /> Filter
          </button>
        </div>
        
       <Spin
       spinning={isFetching}
       tip="Loading Data"
       >
       <Table
          columns={columns}
          dataSource={dataSources}
          pagination={{
            current:pagination.current,
            pageSize:pagination.pageSize,
            total:total,
            showSizeChanger:true
          }}
          onChange={handlePagination}
        />
       </Spin>
       <Modal title="Add New User" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <PostUserPage />
       </Modal>

      </div>
    </>
  );
}

export default UserTable;
