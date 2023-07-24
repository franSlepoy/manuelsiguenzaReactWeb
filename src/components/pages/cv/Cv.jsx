import { Button, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Cv = () => {
  return (
  <Box sx={{marginTop:8}}>
     <Box margin={"auto"}  width={800} display="flex">
        <img width={300} height={400} src="/src/imagenes/cv.jpeg" alt="" />
        <CardContent>
       
        <Typography variant="body1"> Manuel Sigüenza estudió Cerámica Artística en la Escuela de Cerámica de la Ciudad de Buenos Aires. 
             Asistió a varios talleres, y clínicas. Entre ellos, a los encuentros de análisis de obra organizados por Valeria Maculan y Silvia Gurfein y a la Clínica a cargo de Tulio de Sagastizabal. En el 2012 participó de la Beca para artistas del Fondo Nacional de las Artes - Centro Cultural de la Memoria Haroldo Conti.
             En el año 2014 participa del Programa de Artistas de la Universidad Torcuato Di Tella.  </Typography>
        </CardContent>
       
        
    </Box>
    <Button variant="text" sx={{position: "relative", left:834, top:-50, fontSize:20}}>CV</Button>
  </Box>  
   
  )
}

export default Cv
