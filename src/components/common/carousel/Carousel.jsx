import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { TodasLasImagenes } from '../../../servidor/TodasLasImagenes.jsx';
import ImagenCard from '../imagenCard/Imagencard.jsx';



 function Carouselcard()
    
{
    return (
        
          <Carousel sx={{width:1436, mt:-1}}  >
            {
                TodasLasImagenes.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
            }
         </Carousel>
        
        
    )
}
export default Carouselcard