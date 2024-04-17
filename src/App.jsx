
import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import JavaScript from './pages/JavaScript';
import Html from './pages/Html';
import AboutUs from './pages/AboutUs';
import TermCondition from './pages/TermCondition';
import ContactUs from './pages/ContactUs';

function App() {


  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/javascript' element={<JavaScript />}/>
    <Route path='/html' element={ <Html />}/>
    <Route path='/aboutus' element={ <AboutUs />}/>
    <Route path='/term&condition' element={ <TermCondition />}/>
    <Route path='/contactus' element={ <ContactUs />}/>
   </Routes>
    </>
  )
}

export default App
