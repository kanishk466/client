import React, { useContext } from 'react'
import LoginDialog from './account/LoginDialog'
import {AppBar ,Toolbar ,Box} from "@mui/material"
import styled from '@emotion/styled'
import { AccountContext } from '../context/AccountProvider'


import ChatDialog from "./chat/ChatDialog"
const Messenger = () => {

   const {account} = useContext(AccountContext)
  const Header = styled(AppBar)`
  background-color: #00A884;
  height: 125px;
  box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
background-color: #00bfa5;
height: 220px;
box-shadow: none;
`;


const Component = styled(Box)`
background-color: #DCDCDC;
height: 100vh;

`;


  return (
    <Component>{account ?<>
    
    <Header>
        <Toolbar>
           
        </Toolbar>
      </Header>
      <ChatDialog/>
    </> 
      :
    <>
     <LoginHeader>
        <Toolbar>
           
        </Toolbar>
      </LoginHeader>
      <LoginDialog/>
      </>
  }
     
    </Component>
  )
}

export default Messenger
