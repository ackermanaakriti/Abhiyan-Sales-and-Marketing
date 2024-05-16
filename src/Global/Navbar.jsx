import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
 <>
 <nav className='absolute inset-0 w-full py-[20px] container mx-auto'>
    <div className='grid grid-cols-2'>
        <div>
            logo
        </div>
        <div className='col-span-1'>
            <ul className='flex gap-[40px] justify-center'>
                <li className='text-secondarycolor text-[15px] font-poppins'> <NavLink to='/'>Home</NavLink></li>
                <li className='text-secondarycolor text-[15px] font-poppins'> <NavLink to='/products'>Products</NavLink></li>
                <li className='text-secondarycolor text-[15px] font-poppins'> <NavLink to='/'>About Us</NavLink></li>
                <li className='text-secondarycolor text-[15px] font-poppins'> <NavLink to='/'>Contact Us</NavLink></li>
            
            </ul>
        </div>
    </div>
 </nav>
 </>
  )
}

export default Navbar