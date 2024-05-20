import React from 'react'
import {Box , Typography , styled} from "@mui/material"
const Conversation = ({user}) => {


const Component = styled('Box')`

display:flex;
height:45px;
padding:13px 0 ;
cursor:pointer;

`;

const Image = styled('img')`
  width:50;
  height:50;
  border-radius:50%;
  padding:0 14px;
  object-fit:cover;

`


  return (
    <Component>
        <Box>
            <Image src={user.picture} alt="dp"/>
        </Box>
        <Box>
               <Box>
                <Typography>{user.name}</Typography>
               </Box>
        </Box>
    </Component>
  )
}

export default Conversation
