import { Button } from '@mui/base';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ObrasShopData } from '../../../servidor/ObrasShopData';

const DetalleShop = () => {
  const { id } = useParams(); // Obtener el parámetro "id" de la URL

  // Convertir el id a un número (ya que los ids en el array son numéricos)
  const idNumero = parseInt(id);

  // Filtrar los datos para obtener el texto correspondiente
  const textoSeleccionado = ObrasShopData.find((elemento) => elemento.id === idNumero);

  console.log(textoSeleccionado);

  return (

    <Card sx={{ margin:"auto", maxWidth: 945, height:700, padding:2,  mt:3, display: "flex" }}>
    <CardActionArea>
      <CardMedia
      sx={{mt:-15}}
        component="img"
        height="540"
        image= {textoSeleccionado.imagen}
        alt= {textoSeleccionado.titulo}
      />
      
    </CardActionArea>
    <CardActions>
    <CardContent sx={{mt:-10}}>
        <Typography mt={2} gutterBottom variant="h5" component="div">
        {textoSeleccionado.titulo}
        </Typography>
        <Typography mt={2} gutterBottom variant="subtitle1" component="div">
        Precio ${textoSeleccionado.precio}
        </Typography>
        <Typography mt={2} variant="body2" color="text.secondary">
        {textoSeleccionado.descripcion}
        </Typography>
        <Typography mt={5} mb={0} variant="body1" color="text.secondary">
        Para arreglar terminos de pago y envio, llenar formulario de contacto. 
        </Typography>
        <Link  to={`/formulario`} style={{ textDecoration: 'none' }}>
      <Button  variant="text" size="small" color="primary">
        CONTACTO
      </Button>
       </Link>
      </CardContent>
    
    </CardActions>
  </Card>
  );
};

export default DetalleShop;