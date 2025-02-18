import { useState } from 'react';
import { Form, Input, Select, Button, Avatar, Card, Modal, Row, Col, Upload, message, notification } from 'antd';
import { FilterOutlined, UserOutlined, CameraFilled, SearchOutlined, PlusOutlined } from '@ant-design/icons';
import emptyModal from '/modal.png';
import teamIcon from '/teamicon.png';
import TeamUser from './TeamUser';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getRoleData } from '../../../Services/ManageRole/RoleService';
import { RoleDataTypes } from '../../../Lib/Types/RoleTypes.D';
import { getUserDataInToId, updateUserData } from '../../../Services/ManageUser/UserService';
import { useParams } from 'react-router-dom';
// import { roleDataOptions } from './Functions';
import { Controller, useForm } from 'react-hook-form';
// import { UserFormData, userFormSchema } from '../../../Lib/Schema/UserSchema';
// import { zodResolver } from '@hookform/resolvers/zod';
import Dropzone from 'react-dropzone';
import { UserDataTypes } from '../../../Lib/Types/UserTypes.D';

const { Option } = Select;

function EditUser() {

  
  const queryClientEdit = useQueryClient();
   const [visible, setVisible] = useState(false); // Modal State
   const [imagePreview , setImagePreview] = useState<string | null>(null)
  
  // Modal Functions
  const showModal = () => setVisible(true);
  const handleCancel = () => setVisible(false);


  
  const { handleSubmit, control, reset, formState: { errors } } = useForm();  
  const handleonSubmit = (values: UserDataTypes) => {
  
    const formData = new FormData();
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("email", values.email);
    formData.append("roleId", values.roleId);
    formData.append("status", values.status);
    // if(values.image?.[0]){
    //   formData.append("Image", values.image[0])
    // }
    console.log("Form Data", [...formData])
    updateUserMutation.mutate({id:id , data:formData})
    console.log(formData)
  };
  

  const onPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Password change requested");
  };


  const updateUserMutation = useMutation({
    mutationFn:updateUserData,
    onSuccess:() => {
      queryClientEdit.invalidateQueries({queryKey:['user']})
      notification.success({message:"User Update Successfully"})
      reset();
    },
    onError:() =>{
      notification.error({message:"Failed to Update User"})
    }
  })






  
  const { data: roles } = useQuery<RoleDataTypes[]>({
    queryKey: ['roles'],
    queryFn: getRoleData
  });
  
  const { id } = useParams();
  
  // Using useQuery to fetch data with error handling and loading state
  const { data: userData, isLoading, isError, error } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserDataInToId(id),
    enabled: !!id, // This ensures the query only runs if id is truthy
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  if (!userData) return <div>No user data found</div>;
  
  const userD = userData; // Safe to use userD here
  // console.log(userD);
   
  



  return (
    <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-6 h-screen overflow-hidden">
      {/* Profile Section */}
      <div className="bg-gray-100 p-5 rounded h-96">
        <h2 className="text-black font-bold text-xl mb-6">My Profile</h2>
        <Card className="bg-gray-200 rounded-lg shadow-md p-6 max-w-lg mx-auto">
          <div className="flex items-center mb-6 gap-4">
          


         <div className='p-2'> 
               <Controller 
               name='image'
               control={control}
               render = {({field}) => (
                <Dropzone
                
                onDrop={(acceptedFiles : any) => {
                 field.onChange(acceptedFiles);
                 const file = acceptedFiles[0];
                 if(file){
                   const reader = new FileReader();
                   reader.onloadend = () => {
                     setImagePreview(reader.result as string)
                   }
                   reader.readAsDataURL(file)
                 }
                }}
                >
                 {({getRootProps, getInputProps}) => (
                    <div
                    {...getRootProps()}
                    className="p-4 border-2 border-dashed border-gray-300 text-center relative w-full" 
                    style={{
                      height: '60px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                    }}
                  >
                    <input
                    
                    {...getInputProps()} />
                    {!imagePreview && (
                       <div className="absolute inset-0 flex items-center justify-center text-green-700 text-lg">
                        <UserOutlined />
                      </div>
                        
                    )}
                    {imagePreview && (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                 )}
                 {/* <p className="ant-upload-drag-icon"><UserOutlined /></p>
                 <p className="ant-upload-text">Upload</p> */}
               </Dropzone>
               )}
               />
                {errors.image?.message && <p className="text-red-500 text-xs">{String(errors.image.message)}</p>}
               
             </div>



            <div>
              <h3 className="text-lg font-semibold text-gray-900">{userD.firstName}</h3>
              <p className="text-gray-500">{userD.role}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500">Full Name:</span>
              <h3 className=" text-gray-500">{userD.firstName}<span className=" text-gray-500">{userD.lastName}</span></h3>
              
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">E-mail:</span>
              <span className="text-gray-800">{userD?.email}</span>
            </div>
          </div>
        </Card>
      </div>
      {/* Edit Profile Form */}
      <div className="bg-gray-100 p-5 rounded h-[540px] overflow-auto">
        <h2 className="text-black font-bold text-xl mb-3">Edit Profile</h2>
        
        <form onSubmit={handleSubmit(handleonSubmit)} className="space-y-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
    <div>
      <label className="block text-sm mb-2 mt-2">First Name</label>
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            defaultValue={userD?.firstName || ""}
            type="text"
            placeholder="First Name"
            className="w-full text-sm border border-gray-300 p-3 rounded focus:outline-none focus:ring-0"
          />
        )}
      />
    </div>

    <div>
      <label className="block text-sm mb-2 mt-2">Last Name</label>
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            defaultValue={userD?.lastName || ""}
            type="text"
            placeholder="Last Name"
            className="w-full text-sm border border-gray-300 p-3 rounded focus:outline-none focus:ring-0"
          />
        )}
      />
    </div>

    <div>
      <label className="block text-sm mb-2 mt-2">Email</label>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            defaultValue={userD?.email || ""}
            type="email"
            placeholder="Email"
            className="w-full text-sm border border-gray-300 p-3 rounded focus:outline-none focus:ring-0"
          />
        )}
      />
    </div>

    <div>
      <label className="block text-sm mb-2 mt-2">Role ID</label>
      <Controller
        name="roleId"
        control={control}
        render={({ field }) => (
          <Select
          {...field}
          defaultValue={userD?.roleId || ""}
          className="w-full text-sm border border-gray-300 p-3 rounded focus:outline-none focus:ring-0"
        >
          <Option value="" disabled>Select Role</Option>
          {roles && roles.length > 0 ? (
            roles.map((role, index) => (
              <Option key={role.id || index} value={role.id}>
                {role.id}
              </Option>
            ))
          ) : (
            <Option disabled>No Roles Available</Option>
          )}
        </Select>
        )}
      />
    </div>

    <div>
      <label className="block text-sm mb-2 mt-2">Status</label>
      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            defaultValue={userD?.status || ""}
            className="w-full text-sm border border-gray-300 p-3 rounded focus:outline-none focus:ring-0"
          >
            <Option value="" disabled>Select Status</Option>
          
                <Option value="Active">Active</Option>
                <Option value="Deactivated">Deactivated</Option>
              
          </Select>
        )}
      />
    </div>
  </div>

  <div className="text-end">
    <button type="submit" className="p-2 bg-orange-600 text-white rounded text-xs active:scale-110">
      Update Profile
    </button>
  </div>
</form>


    <form onSubmit={onPassword} className="space-y-4 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
        <div>
          <label className="block text-sm mb-2">New Password</label>
          <Input
            type="password"
            name="newPassword"
            placeholder="New Password"
            className="w-full text-sm border border-gray-300 p-3 rounded focus:outline-none focus:ring-0"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Repeat New Password</label>
          <Input
            type="password"
            name="repeatNewPassword"
            placeholder="Repeat Password"
            className="w-full text-sm border border-gray-300 p-3 rounded focus:outline-none focus:ring-0"
          />
        </div>
      </div>
      <div className="text-end">
        <button type="submit" className="p-2 bg-orange-600 text-white rounded text-xs active:scale-110">
          Change Password
        </button>
      </div>
    </form>

        
                <br />
        <div className="flex justify-between mb-4">
          <div className="flex gap-3">
            <button onClick={showModal} className="bg-orange-600 rounded p-2 text-white text-xs active:scale-110">+ Add</button>
            <div className="flex gap-2">
              <h1 className="mt-2 text-sm">All Teams</h1>
              <div className="bg-orange-600 text-white rounded-full p-2">(2)</div>
            </div>
          </div>
          <button className="px-3 bg-gray-200 text-black rounded text-xs me-4"> <FilterOutlined /> Filter</button>
        </div>
       <TeamUser />
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
