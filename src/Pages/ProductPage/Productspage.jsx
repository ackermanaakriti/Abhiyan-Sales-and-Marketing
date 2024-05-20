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
    <div className='grid grid-cols-2'>
      <div>

      </div>
      <div className='left--section'>
      <div className='pt-[100px] absolute top-[40%] right-[30px]'>
              <p className='font-poppins text-[20px]  text-secondarycolor'>Abhiyan Sales and Marketing</p>
              <h2 className='text-[60px] font-kurale pt-[20px] font-[600] text-secondarycolor'>Products We Sell</h2>
             
             </div>
      </div>
    </div>
   </div>
   <div>
    <ProductPageSection/>
   </div>
   </>
  )
}

export default Productspage