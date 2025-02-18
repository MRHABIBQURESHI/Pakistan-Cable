import { notification } from 'antd'
import { theBaseURL } from '../Base/Axios'

export const getUserData = async (page:number , limit:number , query:string) => {
    try {
        const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3NSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTczOTg1ODc4MCwiZXhwIjoxNzM5OTQ1MTgwfQ.CuXv2S59DjqiH9NeCWFnl9B2Zs4ztWCbif5K1cRyUmo'
        const response = await theBaseURL.get(`/admin/users`, {
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
             params:{page , limit , query} 
            // page=${page}&limit=${limit}&query${query}
        })
        if(response.status === 200){
            const total = response?.data.total
            const data = response.data
        return {data , total}
    } 
    } catch (error) {
        notification.error({message:"Error in Data Fetching"})
        console.log(error)
    }}


export const postUserData = async (data : FormData) => {
console.log("From Data Values", data)
try {
    // const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEzOSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTczOTc3MDc2MCwiZXhwIjoxNzM5ODU3MTYwfQ.irvoVP-vaUvwxc69p7wGjiOfuKpOB8ibnpS5yNHHH7M'
    const response = await theBaseURL.post(`/auth/signup` , data , {
       headers:{
        "Content-Type" : "multipart/form-data",
        // "Authorization" : `Bearer ${accessToken}`
       },
    })
    
    return response?.data
} catch (error:any) {
    console.log("Error", error.response.data)
    console.log("Error", error.message.data)
    }}


// export const deleteUserData = async (id : number) => {
//     return theBaseURL.delete(`admin/users${id}`)
      
// }


export const getUserDataInToId = async (id: any) => {
    try {
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3NSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTczOTg1ODc4MCwiZXhwIjoxNzM5OTQ1MTgwfQ.CuXv2S59DjqiH9NeCWFnl9B2Zs4ztWCbif5K1cRyUmo'
     const response = await theBaseURL.get(`admin/user/${id}` , {
        headers:{
            "Content-Type" : "multipart/form-data",
            "Authorization" : `Bearer ${accessToken}`
           },
     });
      if (response.status === 200) {
        return response.data.data; // Return user data if status is OK
      } else {
        return null; // Return null if the response is not successful
      }
    } catch (error) {
      console.error(error);
      return null; // Return null in case of an error
    }
  };








export const updateUserData = async ({id , data} : {id:number , data:FormData}) =>{
    try {
        const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3NSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTczOTg1ODc4MCwiZXhwIjoxNzM5OTQ1MTgwfQ.CuXv2S59DjqiH9NeCWFnl9B2Zs4ztWCbif5K1cRyUmo'
        const response = await theBaseURL.put(`admin/update-user/${id}`, data , {
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
        })
        if(response.status === 200){
          const data = response.data
          return data
    } 
    } catch (error) {
        notification.error({message:"Error in Data Fetching"})
        console.log(error)
    }}
