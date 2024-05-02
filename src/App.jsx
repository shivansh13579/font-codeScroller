
import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import TermCondition from './pages/TermCondition';
import ContactUs from './pages/ContactUs';
import Card1 from './components/Card1';
import CardDetails from './components/CardDetails';

function App() {
  
  return (
    <>
   <Routes>
    <Route path='/' element={ <Home />}/>
    <Route path='/about' element={ <AboutUs />}/>
    <Route path='/termcondition' element={ <TermCondition />}/>
    <Route path='/contact' element={ <ContactUs />}/>
    <Route path='/card1' element={ <Card1 />} />
    <Route path='/card1/:id' element={ <CardDetails />}/>
   </Routes>
    </>
  )
}

export default App
