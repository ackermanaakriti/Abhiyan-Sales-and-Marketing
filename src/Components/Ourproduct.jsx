import React from 'react'
import current from '../Global/images/Group 12.png'
import biscuits from '../Global/images/Group 13 (1).png'
import cheeseball from '../Global/images/Rectangle 8.png'

import Button from './Button'

const Ourproduct = ({image,name}) => {
  return (
   <>
   
   <div className='px-[20px] py-[30px] bg-[#ebeced] rounded-[25px] '>
    <div>
        <figure className='h-[120px] flex justify-center'>
            <img className='h-full' src={image}/>
        </figure>
    </div>
    <div className='pt-[15px]'>
        <h3 className='text-[20px] text-primarycolor text-center font-poppins'>{name}</h3>
        <div className='pt-[10px] flex justify-center'>
        <Button bgclr='primarycolor' txtclr='secondarycolor' textsize='14' text='Read More'/>
        </div>
        
    </div>
   </div>
   </>
  )
}

export default Ourproduct