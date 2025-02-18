import { useState } from 'react'
import Dropzone from "react-dropzone";
import { getRoleData } from '../../../Services/ManageRole/RoleService';
import { Input, notification } from 'antd';
import { UserFormData, userFormSchema } from '../../../Lib/Schema/UserSchema';
import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';
import { postUserData } from '../../../Services/ManageUser/UserService';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserOutlined } from '@ant-design/icons';
import { RoleDataTypes } from '../../../Lib/Types/RoleTypes.D';


function PostUserPage() {
  // Get Role DAta TAnsTAck Start

   const {data} = useQuery({
    queryKey:['role'],
    queryFn:getRoleData,

})

  // Get Role DAta TAnsTAck End

// Get Data with TanSrack Start
    
  // Post User
  // Post User with TanStack Start
  const [imagePreview , setImagePreview] = useState<string | null>(null)
  const {handleSubmit , control , reset , formState:{errors} , } = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema)
  })
  const postUserMutation = useMutation({
    mutationFn: postUserData,
    onSuccess:() => {
      notification.success({message:"User is Save Successfully"})
      setImagePreview(null),
      reset();
    },
    onError:() => {
      notification.error({message:"User is Failed to Saved"})
      console.error("Subbmisson Error" , errors)
    }
  })
  // Mutation Function Ends Now OnSubmit
  const onSubmit = (values:UserFormData) => {
    const fromData = new FormData();
    fromData.append("firstName" , values.firstName)
    fromData.append("lastName" , values.lastName)
    fromData.append("email" , values.email)
    fromData.append("password" , values.password)
    fromData.append("designation" , values.designation)
    fromData.append("roleId" , values.roleId)
    if(values.image?.[0]){
      fromData.append("image" , values.image[0]);
    }
    console.log("Form Data" , [...fromData]);
    postUserMutation.mutate(fromData)
  }

  // Post User with TanStack End

  const roleData = data;
  
  return (
<form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex', gap: '16px' }}>
      <div className='p-2'>
        <label>Frist Name</label> 
        <Controller 
        name='firstName'
        control={control}
        render = {({field}) => ( 
       <Input
       {...field}
       placeholder="Enter First Name" 
      />
      )}
      />
      </div>
      {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}

      <div className='p-2'>
        <label>Last Name</label>
        <Controller
        name='lastName'
        control={control}
        render = {({field}) => (
          <Input
          {...field}
          placeholder="Enter Last Name" />
        )}
        />
      </div>
      {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
    </div>

    <div className='p-2'>
      <label>Email</label>
      <Controller
      name='email'
      control={control}
      render = {({field}) => (
        <Input 
        {...field}
        placeholder="Enter Email" />
      )}
      />
    </div>
    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

    <div className='p-2'>
      <label>Password</label>
      <Controller
      name='password'
      control={control}
      render = {({field}) => (
        <Input.Password 
        {...field}
        placeholder="Enter Password" />
      )}
      />
    </div>
    {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}

    <div className='p-2'>
  <label>Position</label>
  <Controller
    name='designation'
    control={control}
    render={({ field }) => (
      <select 
        {...field} 
        style={{
          height: '40px',
          width: '100%',
          padding: '5px',
          border: '1px solid #d1d5db',  // gray-100 border
          outline: 'none',
          borderRadius: '4px',
          backgroundColor: 'white'
        }}
        onFocus={(e) => e.target.style.border = '1px solid #9ca3af'}  // gray-400 on focus
        onBlur={(e) => e.target.style.border = '1px solid #d1d5db'}  // back to gray-100 on blur
      >
        <option value="" disabled>Select Position</option>
        {
          roleData && roleData.length > 0 ? (
            roleData.map((item:RoleDataTypes) => (
              <option value={item.title}>{item.title}</option>
            ))
          ):(
            
            <option disabled>No Position Avalible</option>
          )
        }
      </select>
    )}
  />
</div>


    {errors.designation && <p className="text-red-500 text-xs">{errors.designation.message}</p>}

    <div className='p-2'>
  <label>Role ID</label>
  <Controller
    name='roleId'
    control={control}
    render={({ field }) => (
      <select 
        {...field} 
        style={{
          height: '40px',
          width: '100%',
          padding: '5px',
          border: '1px solid #d1d5db',  // gray-100 border
          outline: 'none',
          borderRadius: '4px',
          backgroundColor: 'white'
        }}
        onFocus={(e) => e.target.style.border = '1px solid #9ca3af'}  // gray-400 on focus
        onBlur={(e) => e.target.style.border = '1px solid #d1d5db'}  // back to gray-100 on blur
      >
        <option value="" disabled>Select Role Id</option>
        {
          roleData && roleData.length > 0 ? (
            roleData.map((item:RoleDataTypes) => (
              <option value={item.id}>{item.id}</option>
            ))
          ):(
            
            <option disabled>No Roles Avalible</option>
          )
        }
      </select>
    )}
  />
</div>


    {errors.roleId && <p className="text-red-500 text-xs">{errors.roleId.message}</p>}


    <div className='p-2'> 
      <label>Image</label>
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
        {({getRootProps , getInputProps}) => (
           <div
           {...getRootProps()}
           className="p-4 border-2 border-dashed border-gray-300 text-center relative w-full" 
           style={{
             height: '130px',
             borderRadius: '8px',
             overflow: 'hidden',
           }}
         >
           <input {...getInputProps()} />
           {!imagePreview && (
              <div className="absolute inset-0 flex items-center justify-center text-green-700 text-5xl">
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
  
    <div className='text-center p-2'>
      <button className='bg-orange-600 p-2 text-center rounded text-white active:scale-110'>Add User</button>
    </div>
  </form>
  )
}

export default PostUserPage

