import React from 'react'
import digestive from '../Global/images/digestive.png'
import current from '../Global/images/Rectangle-155.png'
import snicker from '../Global/images/Snickers-broken (1).png'
import bg from '../Global/images/Rectangle 1.png'
import Button from '../Components/Button'


const Heropage = () => {
  return (
    <>
      <div className='heropage' >
        <div className='grid grid-cols-2 mx-auto container'>
          <div className='px-[30px] py-[10px]'>
            <figure className=' heropageimg'>
              <img className='h-[100px] img1' src={digestive} />
              <img className='h-[150px] img2' src={current} />
              <img className='h-[100px] img3' src={snicker}/>
            </figure>
          </div>
          <div>
            <div className='pt-[100px]'>
              <p className='font-poppins text-[20px]  text-secondarycolor'>Abhiyan Sales and Marketing</p>
              <h2 className='text-[60px] font-kurale pt-[20px] font-[600] text-secondarycolor'>Market your products
Anywhere & Anytime</h2>
               <div className='pt-[30px]'>
             <Button bg='secondarycolor' text='Read More'/>
              </div>
              <p>

              </p>
            </div>
          </div>
        </div>
     
      </div>
     
    </>
  )
}

export default Heropage