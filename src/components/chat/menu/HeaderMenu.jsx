import React,{useState} from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styled from '@emotion/styled';
import InfoDrawer from "../../drawer/Drawer"

const MenuOption = styled(MenuItem)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;

const HeaderMenu = () => {
    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);



    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const toggleDrawer = () => {
      setOpenDrawer(true);
  }

  return (
    <>
    <MoreVertIcon  onClick={handleClick}/>
    <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
      >
        <MenuOption onClick={() => { handleClose(); toggleDrawer()}} >Profile</MenuOption>
        <MenuOption onClick={handleClose}>My account</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>



      </Menu>

      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
    </>
  )
}

export default HeaderMenu
