import React from 'react'
import { FaRocket } from "react-icons/fa6";
import { BiRocket } from "react-icons/bi";



const WhyChooseUsComp = ({name}) => {
  return (
   <>
   <div className='mt-[20px] bg-[#ebeced] p-[20px] rounded-[24px]'>
    <span className='text-[40px] text-primarycolor '><BiRocket/></span>
    <div className='pt-[20px] '>
      <h3 className='text-primarycolor font-[600] uppercase font-kurale'>Effective</h3>
      <p className=' font-poppins text-justify py-[10px]'>Welcome to Abhiyan Sales and Marketing, where innovation meets excellence in the realm of sales and marketing solutions. </p>
    </div>
    
   </div>
   </>
  )
}

export default WhyChooseUsComp