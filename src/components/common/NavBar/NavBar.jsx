
import { AppBar, Button, Drawer, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavListDrawer from './NavListDrawer'
import { NavLink } from 'react-router-dom'




const NavBar = () => {
    const [open, setOpen]= useState(false)
    const linkStyle = {
      textDecoration: 'none',
      
    };
    

  return (
    <>
       
      <AppBar position="static" color="transparent">
     
       <Toolbar>
       <Typography style={linkStyle} component={NavLink} to={"/"}   sx={{ml:2, mt:1, fontSize:60}} variant="h1" color="primary" mt={3} ml={5}>MANUEL SIGÜENZA</Typography>
       
       </Toolbar>
       
        <Toolbar sx={{justifyContent:"flex-start", ml:-5,mt:-2}}>
           
        <Button  sx={{ mr: 3, ml: 6, display: { xs: "none", sm:"block"}}} component={NavLink} to={"/obras"}>Obras</Button>
        {/* <Button sx={{ mr: 3, display: { xs: "none", sm:"block"}}} component={NavLink} to={"/obras"} >Obras</Button> */}
        <Button sx={{mr: 0, display: { xs: "none", sm:"block"}}} component={NavLink} to={"/cv"} >CV</Button>
        <Button sx={{mr: 3, display: { xs: "none", sm:"block"}}} component={NavLink} to={"/textos"} >Textos</Button>
        <Button sx={{mr:3, display: { xs: "none", sm:"block"}}} component={NavLink} to={"/shop"} >Shop</Button>
        <Button sx={{ ml:-1, paddingLeft:0}} variant="" color="inherit" onClick={()=> setOpen(true)}>
          {/* <img src="/src/imagenes/busto2.jpg" alt="icono" width={40}/> */}
            <Typography sx={{ml:2, fontSize:13}}> Contacto </Typography> 
         </Button>
        
       
        </Toolbar>
        
      </AppBar>
      
      <Drawer 
      open={open}
      anchor={'right'}
      onClose={()=> setOpen(false)}
      >
      <NavListDrawer/> 
      </Drawer>
     
    
    </>
  )
}

export default NavBar
