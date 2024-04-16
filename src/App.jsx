
import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import JavaScript from './pages/JavaScript';
import Html from './pages/Html';

function App() {


  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/javascript' element={<JavaScript />}/>
    <Route path='/html' element={ <Html />}/>
   </Routes>
     
     
    
    </>
  )
}

export default App
