import React, { useState , useContext } from 'react'
import { useEffect } from 'react'
import {getUsers} from "../../../service/api.js"
import {Box , styled , Divider} from "@mui/material"
import Conversation from './Conversation.jsx'
import {AccountContext} from "../../../context/AccountProvider.jsx"


const Conversations = () => {

  const Component = styled('Box')`
  height:81vh;
  overflox:overlay;
  
  `

  const Divider = styled('Divider')`
  margin-left: 113px;
  
  `

const[users,setUsers] = useState([]);

const {account} = useContext(AccountContext)
  useEffect(()=>{
    const fetchData = async () =>{
      let response = await   getUsers();
      setUsers(response);
    }
    fetchData();
  },[])

  
  return (
    <Component>
      {
        users.map(user =>(
          user.sub !== account.sub &&
            <>
          
           <Conversation user={user}/>
           <Divider/>
          
            </>
         
        ))
      }
    </Component>
  )
}

export default Conversations
