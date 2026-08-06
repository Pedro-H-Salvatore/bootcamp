import { Route, Routes } from 'react-router'
import Favoritos from './favoritos'
import Filmes from './filmes'
import './global.css'
import Home from './home'
import Contato from './contato'
import Buscar from './busca'
import MudarTema from './components/botaoTema'

function App() {


  return (
    <>
       <MudarTema />
       <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/filme' element={<Filmes />} />
                <Route path='/favoritos' element={<Favoritos />} />
                <Route path='/contato' element={<Contato/>}/>
                <Route path='/buscar' element={<Buscar/>}/>
                <Route path='*' element={<h1>Not Found</h1>} />
            </Routes>  
    </>
  )
}

export default App
