import { Box } from '@mui/material'
import React from 'react'
import { ObrasShopData } from '../../../servidor/ObrasShopData'
import ObrasShopCard from './ObrasShopCard'

const Shop = () => {
  return (
    <>
    {
     ObrasShopData.map((obra) => { return (
         <ObrasShopCard  key={obra.id} titulo={obra.titulo} descripcion={obra.descripcion} precio={obra.precio} imagen={obra.imagen} /> 
     )
     })}
    </>
  )
}

export default Shop
