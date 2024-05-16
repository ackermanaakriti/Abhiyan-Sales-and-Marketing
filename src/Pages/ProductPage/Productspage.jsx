import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import ProductPageSection from './ProductPageSection';



const Productspage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
   <>
   <div className='productpage '>
    <div data-aos="zoom-in "  data-aos-duration="5000" data-aos-delay="100" className='productpage--content'>
    {/* <h1>Our Products</h1> */}
    </div>
   </div>
   <div>
    <ProductPageSection/>
   </div>
   </>
  )
}

export default Productspage