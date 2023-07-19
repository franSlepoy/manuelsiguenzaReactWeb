import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function ImagenCard(props) {
  return (
    <Card sx={{ maxWidth: 445, margin:"auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="470"
          image={props.imagen}
          
        />
        
      </CardActionArea>
    </Card>
  );
}