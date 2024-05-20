import React from 'react'
import Ourproduct from '../Components/Ourproduct'
import img1 from '../Global/images/snickkery.png'
import img2 from '../Global/images/Rectangle 8.png'
import img3 from '../Global/images/Group 13 (2).png'
import OtherProduct from '../Components/OtherProduct'

const OtherProducts = () => {
  return (
  <>
  <section className='px-[40px] pb-[40px]'>
  <div className='py-[10px]'>
  <h2 className='text-[60px] font-kurale text-center text-primarycolor'>Other Products</h2>
  </div>
  <div className='grid grid-cols-4  gap-[50px] pt-[30px]'>
    <OtherProduct image={img1} name='Snickers'/>
    <OtherProduct image={img2} name='Cheese Balls'/>
    <OtherProduct image={img2} name='Biscuits'/>
    <OtherProduct image={img1} name='Chocolates'/>
  </div>
  </section>
  </>
  )
}

export default OtherProducts