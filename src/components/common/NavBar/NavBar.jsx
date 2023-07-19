
import { AppBar, Button, Drawer, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavListDrawer from './NavListDrawer'
import { NavLink } from 'react-router-dom'




const NavBar = () => {
    const [open, setOpen]= useState(false)

  return (
    <>
       
      <AppBar position="static" color="transparent">
     
       <Toolbar>
       <Typography sx={{ml:2, mt:1, fontSize:80}} variant="h1" color="primary" mt={3} ml={5}>MANUEL SIGÜENZA</Typography>
       <Button sx={{ paddingX:3, ml:"25%", mt:"3%"}} variant="contained" color="inherit" onClick={()=> setOpen(true)}>
          <img src="/src/imagenes/busto2.jpg" alt="icono" width={40}/>
            <Typography sx={{ml:2, fontSize:15}}> Contacto </Typography> 
         </Button>
       </Toolbar>
       
        <Toolbar sx={{justifyContent:"flex-start", ml:-5}}>
           
        <Button  sx={{ mr: 3, ml: 7, display: { xs: "none", sm:"block"}}} component={NavLink} to={"/"}>Home</Button>
        <Button sx={{ mr: 3, display: { xs: "none", sm:"block"}}} component={NavLink} to={"/obras"} >Obras</Button>
        <Button sx={{mr: 0, display: { xs: "none", sm:"block"}}} component={NavLink} to={"/cv"} >CV</Button>
        <Button sx={{mr: 3, display: { xs: "none", sm:"block"}}} component={NavLink} to={"/textos"} >Textos</Button>
        <Button sx={{mr:10, display: { xs: "none", sm:"block"}}} component={NavLink} to={"/shop"} >Shop</Button>
        
       
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
