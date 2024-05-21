import React,{useContext} from 'react'


import { Box } from '@mui/material';

import ChatHeader from "./ChatHeader"
import Message from "./Message"

import {AccountContext} from "../../../context/AccountProvider"

const ChatBox = () => {

const {person} = useContext(AccountContext);

  return (
    <Box style={{height:"75%"}}>
       <ChatHeader person ={person}/>
    <Message person = {person}/>
    </Box>
   
      
)}

export default ChatBox
