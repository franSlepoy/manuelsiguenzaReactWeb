import {BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from "./components/common/NavBar/NavBar"
import Cv from "./components/pages/cv/Cv"
import Formulario from "./components/pages/formulario/Formulario"
import Home from './components/pages/home/Home'
import Custodios from "./components/pages/obras/Custodios"
import Mascaras from "./components/pages/obras/Mascaras"
import Obras from "./components/pages/obras/Obras"
import UnaClaseDeCosas from "./components/pages/obras/UnaClaseDeCosas"
import Shop from "./components/pages/shop/Shop"
import Textos from "./components/pages/textos/Textos"
import TextosImagen from "./components/pages/textosImagen/TextosImagen"

function App() {


  return (
   <BrowserRouter>
   <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/obras' element={<Obras/>}/>
      <Route path='/cv' element={<Cv/>}/>
      <Route path='/textos' element={<Textos/>}/>
      <Route path="/textos/:id" element={<TextosImagen/>} />
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/formulario' element={<Formulario/>}/>
      <Route path='/custodios' element={<Custodios/>}/>
      <Route path='/mascaras' element={<Mascaras/>}/>
      <Route path='/unaClaseDeCosas' element={<UnaClaseDeCosas/>}/>
      
    </Routes>
   </BrowserRouter>
  )
}

export default App
