import React from 'react'


import Button from '../../Components/Button'
import mainimg from '../../Global/images/bg66.png'
import grp from '../../Global/images/nepaligrp.jpg'
import AboutusGroup from './AboutusGroup'


const AboutusTopComp = () => {
  return (
    <>
    <div>
      <div className='aboutus' >
        <div className='grid grid-cols-2 '>
            <div>
                {/* <figure className='h-[500px]'>
                    <img className='h-full' src={grp}/>
                </figure> */}
            </div>
        
          <div className='left--section col-span-1'>
            {/* <figure className='h-[430px] flex justify-center items-center absolute right-[60px]  top-[20%]'>
              <img className='h-full' src={mainimg}/>
            </figure> */}
            <div className='pt-[100px] absolute top-[40%] right-[100px]'>
              <p className='font-poppins text-[20px]  text-secondarycolor'>Abhiyan Sales and Marketing</p>
              <h2 className='text-[60px] font-kurale pt-[20px] font-[600] text-secondarycolor'>About Us</h2>
               
          
            
        
        
             </div>
          
            </div>
         </div>
        </div>
     <AboutusGroup/>
  
        </div>
    </>
  )
}

export default AboutusTopComp