import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function ImagenCard(props) {
  return (
    <Card sx={{  maxWidth: 2045, margin:"auto" }}>
      <CardActionArea>
        <CardMedia
          sx={{margin:0}}
          component="img"
          height="600"
          image={props.imagen}
          
        />
        
      </CardActionArea>
    </Card>
  );
}