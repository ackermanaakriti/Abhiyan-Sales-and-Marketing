import React from 'react'
import current from '../Global/images/noodlescurr.png'
import recurrent from '../Global/images/redcurrent.png'

const IndividualProduct = () => {
  return (
   <>
   <div className='px-[40px] py-[50px]'>
    <div className='grid grid-cols-3 py-[20px] gap-[40px]'>
    <div className=' p-[20px] flex'>
        <div>
        <figure className='h-[200px] flex justify-center'>
            <img  className='h-full' src={current}/>
        </figure>
        <div className='pt-[20px] font-poppins'>
            <p className='text-[20px] text-primarycolor font-poppins text-center font-[500]'>CURRENT HOT AND LEMON NOODLES</p>
            <p className='text-[16px]  font-poppins text-center font-[500]'>Spice up your day with good blend of fiery spices and aromatic ingredients to fill up your belly.</p>
        </div>
        </div>
    </div>
    <div className=' p-[20px] flex'>
        <div>
        <figure className='h-[200px] flex justify-center'>
            <img  className='h-full' src={current}/>
        </figure>
        <div className='pt-[20px] font-poppins'>
            <p className='text-[20px] text-primarycolor font-poppins text-center font-[500]'>CURRENT 2X SPICY NOODLES</p>
            <p className='text-[16px]  font-poppins text-center font-[500]'>Spice up your day with good blend of fiery spices and aromatic ingredients to fill up your belly.</p>
        </div>
        </div>
    </div>
    <div className=' p-[20px] flex'>
        <div>
        <figure className='h-[200px] flex justify-center'>
            <img  className='h-full' src={recurrent}/>
        </figure>
        <div className='pt-[20px] font-poppins'>
            <p className='text-[20px] text-primarycolor font-poppins text-center font-[500]'>CURRENT HOT & SPICY NOODLES</p>
            <p className='text-[16px]  font-poppins text-center font-[500]'>Spice up your day with good blend of fiery spices and aromatic ingredients to fill up your belly.</p>
        </div>
        </div>
    </div>
    </div>
    <div className='grid grid-cols-3 gap-[40px]'>
    <div className=' p-[20px] flex'>
        <div>
        <figure className='h-[200px] flex justify-center'>
            <img  className='h-full' src={current}/>
        </figure>
        <div className='pt-[20px] font-poppins'>
            <p className='text-[20px] text-primarycolor font-poppins text-center font-[500]'>CURRENT HOT AND LEMON NOODLES</p>
            <p className='text-[16px]  font-poppins text-center font-[500]'>Spice up your day with good blend of fiery spices and aromatic ingredients to fill up your belly.</p>
        </div>
        </div>
    </div>
    <div className=' p-[20px] flex'>
        <div>
        <figure className='h-[200px] flex justify-center'>
            <img  className='h-full' src={current}/>
        </figure>
        <div className='pt-[20px] font-poppins'>
            <p className='text-[20px] text-primarycolor font-poppins text-center font-[500]'>CURRENT 2X SPICY NOODLES</p>
            <p className='text-[16px]  font-poppins text-center font-[500]'>Spice up your day with good blend of fiery spices and aromatic ingredients to fill up your belly.</p>
        </div>
        </div>
    </div>
    <div className=' p-[20px] flex'>
        <div>
        <figure className='h-[200px] flex justify-center'>
            <img  className='h-full' src={recurrent}/>
        </figure>
        <div className='pt-[20px] font-poppins'>
            <p className='text-[20px] text-primarycolor font-poppins text-center font-[500]'>CURRENT HOT & SPICY NOODLES</p>
            <p className='text-[16px]  font-poppins text-center font-[500]'>Spice up your day with good blend of fiery spices and aromatic ingredients to fill up your belly.</p>
        </div>
        </div>
    </div>
    </div>
   
   </div>
   </>
  )
}

export default IndividualProduct