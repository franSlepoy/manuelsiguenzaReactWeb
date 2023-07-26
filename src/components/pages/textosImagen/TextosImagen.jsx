import { Box, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'
import { TextosData } from '../../../servidor/Textos';

const TextosImagen = () => {
  const { id } = useParams(); // Obtener el parámetro "id" de la URL

  // Convertir el id a un número (ya que los ids en el array son numéricos)
  const idNumero = parseInt(id);

  // Filtrar los datos para obtener el texto correspondiente
  const textoSeleccionado = TextosData.find((elemento) => elemento.id === idNumero);

  console.log(textoSeleccionado);

  return (
    <Box sx={{ margin:"auto",width: 1200, height: 650}} >
    <ImageList sx={{mt:5, mb:5, overflow: 'hidden'}}  variant="standard"  cols={1} gap={8} >
      
        <ImageListItem>
          <img
            src={`${textoSeleccionado.imagen}?w=248&fit=crop&auto=format`}
            srcSet={`${textoSeleccionado.imagen}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={textoSeleccionado.titulo}
            
          />
         
          
        <ImageListItemBar  sx={{ backgroundColor:"transparent"}}  /> 
        </ImageListItem>
    </ImageList>
    
  </Box>
  );
};

export default TextosImagen;

