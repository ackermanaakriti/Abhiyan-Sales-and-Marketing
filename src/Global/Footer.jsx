import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
   <>
   <div className=' bg-primarycolor py-[50px] '>
    <div className='container mx-auto grid grid-cols-3'>
    <div className=''>
        <h1>Logo</h1>
        <h3 className='text-[20px] pt-[30px] font-kurale text-secondarycolor'>Abhiyan Sales <br></br> & Marketing</h3>
    </div>
    <div>
        <div >
            <h3 className='font-kurale text-[22px] text-secondarycolor text-center'>Quick Links</h3>
            <div className='pt-[10px]'>
            {/* <NavLink>HOME</NavLink>
            <NavLink>PRODUCTS</NavLink>
            <NavLink>ABOUT US</NavLink>
            <NavLink>CONTACT US</NavLink> */}
            <p className='text-center text-[14px] text-secondarycolor p-[3px]'>HOME</p>
            <p className='text-center text-[14px] text-secondarycolor p-[3px]'>PRODUCTS</p>
            <p className='text-center text-[14px] text-secondarycolor p-[3px]'>ABOUT US</p>
            <p className='text-center text-[14px] text-secondarycolor p-[3px]'>CONTACT US</p>
            </div>
          
        </div>
    </div>
    <div>
        <h3 className='font-kurale text-[22px] text-secondarycolor text-center'>Follow Us</h3>

        <div className='flex justify-center pt-[10px] gap-[30px]'>
            <span className='text-[25px] text-secondarycolor'><FaFacebook/></span>
            <span className='text-[25px] text-secondarycolor'><FaWhatsapp/></span>
            <span className='text-[25px] text-secondarycolor'><BsInstagram/></span>

        </div>
    </div>

    </div>
   </div>
   </>
  )
}

export default Footer