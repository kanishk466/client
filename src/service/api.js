import axios from "axios"
 const url="http://localhost:8800";
export const addUser = async(data) =>{
     try {
        await axios.post(`${url}/add`, data);
        
     } catch (error) {
         console.log("Error while adding user", error.message);
     }
}


export const getUsers = async ()=>{
    try {
        const response =  await axios.get(`${url}/users`);
        return response.data;
    } catch (error) {
         return error.message;
    }
}

export const setConversation = async (data) =>{
    try {
        await axios.post(`${url}/conversation/add`, data)
    } catch (error) {
        console.log("Error while adding  setConversation", error.message);
    }
}


