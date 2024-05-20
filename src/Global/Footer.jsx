import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaEnvelope, FaFacebook, FaLocationPin, FaPhone, FaWhatsapp } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
   <>
   <div className=' bg-primarycolor py-[50px] '>
    <div className='container mx-auto grid grid-cols-4'>
    <div className=''>
        <h1>Logo</h1>
        <h3 className='text-[20px] pt-[30px] font-kurale text-secondarycolor'>Abhiyan Sales <br></br> & Marketing</h3>
    </div>
    <div >
            <h3 className='font-kurale text-[22px] text-secondarycolor '>Our Products</h3>
            <div className='pt-[10px] font-poppins'>
            {/* <NavLink>HOME</NavLink>
            <NavLink>PRODUCTS</NavLink>
            <NavLink>ABOUT US</NavLink>
            <NavLink>CONTACT US</NavLink> */}
            <p className='r text-[14px] text-secondarycolor p-[3px]'>Noodles</p>
            <p className='r text-[14px] text-secondarycolor p-[3px]'>Biscuits</p>
            <p className='r text-[14px] text-secondarycolor p-[3px]'>Chocolates</p>
            <p className='r text-[14px] text-secondarycolor p-[3px]'>Snacks</p>
            </div>
          
        </div>
    <div>
        <div >
            <h3 className='font-kurale text-[22px] text-secondarycolor '>Quick Links</h3>
            <div className='pt-[10px] font-poppins'>
            {/* <NavLink>HOME</NavLink>
            <NavLink>PRODUCTS</NavLink>
            <NavLink>ABOUT US</NavLink>
            <NavLink>CONTACT US</NavLink> */}
            <p className=' text-[14px] text-secondarycolor p-[3px]'>HOME</p>
            <p className=' text-[14px] text-secondarycolor p-[3px]'>PRODUCTS</p>
            <p className=' text-[14px] text-secondarycolor p-[3px]'>ABOUT US</p>
            <p className=' text-[14px] text-secondarycolor p-[3px]'>CONTACT US</p>
            </div>
          
        </div>
    </div>
    <div>
        <div>
        <h3 className='font-kurale text-[22px] text-secondarycolor '>Contact Us</h3>
        <p className='flex gap-[8px] pt-[10px] items-center text-secondarycolor font-poppins text-[14px]'>
            <span className='text-secondarycolor text-[18px]'><FaPhone/></span> : 9864374334</p>
            <p className='flex gap-[8px] pt-[10px] items-center text-secondarycolor font-poppins text-[14px]'>
            <span className='text-secondarycolor text-[18px]'><FaEnvelope/></span> : asm@gmail.com</p>
            <p className='flex gap-[8px] pt-[10px] items-center text-secondarycolor font-poppins text-[14px]'>
            <span className='text-secondarycolor text-[18px]'><FaLocationPin/></span> : Sattalle kapan, kathmandu</p>

        </div>
        {/* <h3 className='font-kurale text-[22px] text-secondarycolor '>Follow Us</h3>

        <div className='flex pt-[10px] gap-[30px]'>
            <span className='text-[20px] text-secondarycolor'><FaFacebook/></span>
            <span className='text-[20px] text-secondarycolor'><FaWhatsapp/></span>
            <span className='text-[20px] text-secondarycolor'><BsInstagram/></span>

        </div> */}
    </div>

    </div>
   </div>
   </>
  )
}

export default Footer