import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { MascarasDtata } from '../../../servidor/MascarasData';



export default function TextosImagen() {
    const linkStyle = {
        textDecoration: 'none',
        
      };
  return (
       
        <Box sx={{ margin:"auto",width: 1200, height: 650, }} >
      <ImageList sx={{mt:5, mb:5}}   variant="standard" cols={1} gap={8}>
        {MascarasDtata.map((seccion) => (
          <ImageListItem key={seccion.id}  style={linkStyle} sx={{color:"black"}}>
            <img
              src={`${seccion.imagen}?w=248&fit=crop&auto=format`}
              srcSet={`${seccion.imagen}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={seccion.titulo}
              
            />
            
          <ImageListItemBar  sx={{ backgroundColor:"transparent", textTransform:"uppercase"}}  position="bottom"  /> 
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
 );
}