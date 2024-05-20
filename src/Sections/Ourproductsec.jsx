import React from 'react'
import Ourproduct from '../Components/Ourproduct'
import img1 from '../Global/images/Group 12.png'
import img2 from '../Global/images/Rectangle 8.png'
import img3 from '../Global/images/Group 13 (2).png'

const Ourproductsec = () => {
  return (
  <>
  <section className=' px-[40px]'>
  <div className='py-[20px]'>
  <h2 className='text-[50px] font-kurale text-center font-[600] text-primarycolor'>Our Products</h2>
  </div>
  <div className='grid grid-cols-4  gap-[50px] pt-[30px]'>
    <Ourproduct image={img1} name='Current Noodles'/>
    <Ourproduct image={img2} name='Cheese Balls'/>
    <Ourproduct image={img2} name='Biscuits'/>
    <Ourproduct image={img1} name='Chocolates'/>
  </div>
  </section>
  </>
  )
}

export default Ourproductsec