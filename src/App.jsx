import {BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from "./components/common/NavBar/NavBar"
import Cv from "./components/pages/cv/Cv"
import Home from './components/pages/home/Home'
import Obras from "./components/pages/obras/Obras"
import Shop from "./components/pages/shop/Shop"
import Textos from "./components/pages/textos/Textos"

function App() {


  return (
   <BrowserRouter>
   <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/obras' element={<Obras/>}/>
      <Route path='/cv' element={<Cv/>}/>
      <Route path='/textos' element={<Textos/>}/>
      <Route path='/shop' element={<Shop/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
