import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ObrasShopCard(props) {
  
  return (
  
     <Card sx={{ width: 345,  mt:3 }}>
      <CardActionArea>
        <CardMedia
        
          component="img"
          height="240"
          image= {props.imagen}
          alt= {props.titulo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.titulo}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
          Precio ${props.precio}
          </Typography>
          
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={`/shop/${props.id}`} style={{ textDecoration: 'none' }}>
        <Button sx={{ml:1}} variant="contained" size="small" color="primary">
          Comprar
        </Button>
        </Link>
      </CardActions>
    </Card>
 
  
 
    
   
     
  
     
   
    
   
    
  );
}
