import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import { Route, Router, Routes } from 'react-router';
import Navbar from './Global/Navbar';
import Productspage from './Pages/ProductPage/Productspage';
import Footer from './Global/Footer';
import IndividualProduct from './Pages/IndividualProduct';
import AboutusTopComp from './Pages/Aboutuspage/AboutusToppage';

function App() {
  return (
   <>
<Navbar/>
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/products' element={<Productspage/>}/>
    <Route path='/individual' element={<IndividualProduct/>}/>
    <Route path='/about-us' element={<AboutusTopComp/>}/>
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
