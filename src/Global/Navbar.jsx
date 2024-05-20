import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
 <>
 <nav className='navbar    py-[20px] inset-0 w-full '>
    <div className='grid grid-cols-2  container mx-auto'>
        <div>
            logo
        </div>
        <div className='col-span-1'>
            <ul className='flex gap-[40px] justify-center'>
                <li className='text-primarycolor text-[15px] font-poppins'> <NavLink to='/'>Home</NavLink></li>
                <li className='text-primarycolor text-[15px] font-poppins'> <NavLink to='/products'>Products</NavLink></li>
                <li className='text-primarycolor text-[15px] font-poppins'> <NavLink to='/'>About Us</NavLink></li>
                <li className='text-primarycolor text-[15px] font-poppins'> <NavLink to='/'>Contact Us</NavLink></li>
            
            </ul>
        </div>
    </div>
 </nav>
 </>
  )
}

export default Navbar