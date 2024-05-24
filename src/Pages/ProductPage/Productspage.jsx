import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import ProductPageSection from './ProductPageSection';
import img from '../../Global/images/bg66 (1) (1).png'



const Productspage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
   <>
   <div className='productpage '>
    <div className='grid grid-cols-2 '>
      <div className='px-[30px]'>
    <figure className='h-[500px]  '>
      <img className='h-full w-full object-cover' src={img}/>
    </figure>
    </div>
      
      <div className='left--section'>
      <div className='flex justify-center items-center h-full pt-[80px] absolute right-[10px] '>
        <div>
              <p className='font-poppins text-[20px]  text-secondarycolor'>Abhiyan Sales and Marketing</p>
              <h2 className='text-[60px] font-kurale pt-[20px] font-[600] text-secondarycolor'>Products We Sell</h2>
              </div>
             
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