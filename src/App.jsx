
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarbs from './components/Navbarbs';
import ItemCount from './components/ItemCount';
import FechCountry from './examples/FechCountry';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error from './components/Error';

function App() {
  

  return (
    <BrowserRouter>
      <Navbarbs/>
      <Routes>
        <Route path='/' element={<ItemListContainer regionales='Regionales de Argentina'/>}/>
        <Route path='/category/:type' element={<ItemListContainer regionales='Bienvenido a la Categoria:'/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>
      
      {/* <ItemCount stock={12}/> */}
      {/* <FechCountry/> */}
     
    </BrowserRouter>
  )
}

export default App
