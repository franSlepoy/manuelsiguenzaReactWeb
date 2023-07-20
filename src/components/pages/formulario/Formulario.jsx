import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Formulario = () => {
  return (
    <>
    <Typography variant='h3' sx={{ margin: 3 }} align='center' > Formulario </Typography>
    <Box component="form" sx={{textAlign:"center"}}>
    <TextField
        id='nombre' label="Nombre completo" type="text" variant='outlined' helperText="Nombre completo" error={false}
        sx={{ width: 333, mb:3}}
        /> <br />    
    <TextField
        id='email' label="Email" type="email" variant='outlined' helperText="Escriba un correo valido" error={false}
        sx={{ width: 333, mb:3}}
        /> <br />
        <TextField
        id='mensaje' label="Mensaje" type="text" variant='outlined' helperText="Escriba un mensaje breve y sera respondido en cuanto pueda" error={false}
        sx={{ width: 333, mb:3}}
        /> <br />
        <Button variant="contained" > Enviar </Button>
        

    </Box>

    
    </>
  )
}

export default Formulario
