import { Box } from '@mui/system'
import React from 'react'
import { ObrasShopData } from '../../../servidor/ObrasShopData'
import ObrasShopCard from './ObrasShopCard'

const Shop = () => {
  return (
   
    <Box display={"flex"}flexWrap="wrap" justifyContent="space-evenly" margin={5} mt={16}>
    { 
     ObrasShopData.map((obra) => { return (
       <ObrasShopCard key={obra.id} titulo={obra.titulo} descripcion={obra.descripcion} precio={obra.precio} imagen={obra.imagen} id={obra.id} />   
     )
     })}
   </Box>
  )
}

export default Shop
