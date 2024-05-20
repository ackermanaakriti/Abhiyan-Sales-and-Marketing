import React from 'react'
import digestive from '../Global/images/digestive.png'
import current from '../Global/images/redcurrent.png'
import snicker from '../Global/images/Snickers-broken (1).png'
import bg from '../Global/images/Rectangle 1.png'
import Button from '../Components/Button'
import mainimg from '../Global/images/bg66.png'


const Heropage = () => {
  return (
    <>
      <div className='heropage' >
        <div className='grid grid-cols-2 '>
          <div className='px-[40px]   '>
          <div className='pt-[100px]'>
              <p className='font-poppins text-[20px]  text-primarycolor'>Avbhiyan Sales and Marketing</p>
              <h2 className='text-[60px] font-kurale pt-[20px] font-[600] text-primarycolor'>Market your products
Anywhere & Anytime</h2>
               <div className='pt-[30px]'>
               <Button bgclr='primarycolor' txtclr='secondarycolor' textsize='14' text='Read More'/>              </div>
              <p>

              </p>
            {/* <figure className=' heropageimg'>
              <img className='h-[100px] img1' src={digestive} />
              <img className='h-[150px] img2' src={current} />
              <img className='h-[100px] img3' src={snicker}/>
            </figure> */}
             </div>
          </div>
          <div className='left--section col-span-1'>
            <figure className='h-[430px] flex justify-center items-center absolute right-[60px]  top-[20%]'>
              <img className='h-full' src={mainimg}/>
            </figure>
          
            </div>
         
        </div>
     
      </div>
     
    </>
  )
}

export default Heropage