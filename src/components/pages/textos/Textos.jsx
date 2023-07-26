import { Box, Typography } from '@mui/material'
import { TextosData } from '../../../servidor/Textos'
import React from 'react'
import { NavLink } from 'react-router-dom'


const Textos = () => {
    const linkStyle = {
        textDecoration: 'none',
        
      };
  return (
    
    <Box>
         {
            TextosData.map(texto => <Typography   textAlign={"center"} sx={{margin:5 }} variant='h4' key={texto.id} component={NavLink} to={`/textos/${texto.id}`} style={linkStyle} color={"black"} display={"flex"} flexDirection={"column"} >{texto.titulo}</Typography> )
         }

    </Box>
  )
}

export default Textos
