import { Route, Routes } from 'react-router'
import Detalhes from './detalhes'
import Favoritos from './favoritos'
import Filmes from './filmes'
import './global.css'
import Home from './home'

function App() {


  return (
    <>
       <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/filme' element={<Filmes />} />
                <Route path='/favoritos' element={<Favoritos />} />
                <Route path='/detalhes' element={<Detalhes />} />
                <Route path='*' element={<h1>Not Found</h1>} />
            </Routes>  
    </>
  )
}

export default App
