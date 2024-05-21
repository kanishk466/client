import React, { useState , useContext } from 'react'
import { useEffect } from 'react'
import {getUsers} from "../../../service/api.js"
import {Box , styled , Divider} from "@mui/material"
import Conversation from './Conversation.jsx'
import {AccountContext} from "../../../context/AccountProvider.jsx"

const Component = styled('Box')`
height:81vh;
overflox:overlay;

`

const StyledDivider = styled('Divider')`
margin-left: 113px;

`


const Conversations = ({text}) => {

 

const[users,setUsers] = useState([]);

const {account} = useContext(AccountContext)
  useEffect(()=>{
    const fetchData = async () =>{
      let response = await   getUsers();
      const filterData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
      setUsers(filterData);
    }
    fetchData();
  },[text])

  
  return (
    <Component>
    {
        users && users.map((user, index) => (
            user.sub !== account.sub && 
                <>
                    <Conversation user={user} />
                    {
                        users.length !== (index + 1)  && <StyledDivider />
                    }
                </>
        ))
    }
</Component>
  )
}

export default Conversations
