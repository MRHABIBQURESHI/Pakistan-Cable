
import { theBaseURL } from "../Base/Axios"

export const getRoleData = async () => {

    try {
        const response = await theBaseURL.get('/role')
    if(response.status === 200){
        console.log('Role Data Fetch Sucessfully')
        return response.data.data
    }
    } catch (error) {
     console.log(error)   
    }

}



