import React from 'react'
import WhyChooseUsComp from '../Components/WhyChooseusComp'
import { TbShoppingBagHeart } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";




const WhyChooseUs = () => {
  return (
    <>
      <section className='px-[40px] py-[50px]'>

        <div className='grid grid-cols-3 gap-[15px]'>
          <div className='col-span-1 gap-y-[20px]'>
            <WhyChooseUsComp />
            <div className='mt-[20px] bg-[#ebeced] p-[20px] rounded-[24px]'>
              <span className='text-[40px] text-primarycolor '><TbShoppingBagHeart /></span>
              <div className='pt-[20px]'>
                <h3 className='text-primarycolor font-[600] uppercase font-kurale'>Support</h3>
                <p className='text-justify font-poppins py-[10px]'>Welcome to Abhiyan Sales and Marketing, where innovation meets excellence in the realm of sales and marketing solutions. </p>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center'>
          <div className='rounded-[50%] mt-[60px] shadow-md  h-[300px] w-[300px] p-[30px] bg-primarycolor'>
            
            <div className='flex justify-center items-center pt-[50px]'>
              <h3 className='text-secondarycolor font-poppins text-[20px]'>Why choose  us?</h3>

            </div>
            <div className='flex justify-center items-center pt-[20px]  '>
              <h2 className='text-secondarycolor  text-center font-[600] font-kurale text-[30px]'>ABHIYAN SALES & MARKETING</h2>
            </div>

            </div>
          </div>
          <div>
          <div className='mt-[20px] bg-[#ebeced] p-[20px] rounded-[24px]'>
              <span className='text-[40px] text-primarycolor '><TbTruckDelivery/></span>
              <div className='pt-[20px]'>
                <h3 className='text-primarycolor font-[600] uppercase font-kurale'>In-time Delivery</h3>
                <p className='text-justify font-poppins py-[10px]'>Welcome to Abhiyan Sales and Marketing, where innovation meets excellence in the realm of sales and marketing solutions. </p>
              </div>
            </div>
            <div className='mt-[20px] bg-[#ebeced] p-[20px] rounded-[24px]'>
              <span className='text-[40px] text-primarycolor '><GiReceiveMoney/></span>
              <div className='pt-[20px]'>
                <h3 className='text-primarycolor font-[600] uppercase font-kurale'>Reasonable Price</h3>
                <p className='text-justify font-poppins py-[10px]'>Welcome to Abhiyan Sales and Marketing, where innovation meets excellence in the realm of sales and marketing solutions. </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default WhyChooseUs