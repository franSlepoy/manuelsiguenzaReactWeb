import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { ObrasSecciones } from '../../../servidor/ObrasSecciones';
import { NavLink } from 'react-router-dom'

export default function Obras() {
    const linkStyle = {
        textDecoration: 'none',
        
      };
  return (
       
        <Box sx={{ margin:"auto",width: 1200, height: 650, overflowY: 'scroll'}} >
      <ImageList sx={{mt:5, mb:5}}  variant="masonry" cols={3} gap={8}>
        {ObrasSecciones.map((seccion) => (
          <ImageListItem key={seccion.id} component={NavLink} to={"/shop"} style={linkStyle} sx={{color:"black"}}>
            <img
              src={`${seccion.imagen}?w=248&fit=crop&auto=format`}
              srcSet={`${seccion.imagen}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={seccion.titulo}
              
            />
          <ImageListItemBar position="below" title={seccion.titulo} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
       
        

    
      
    
    
  );
}
