import React from 'react'
import img1 from '../Global/images/Rectangle 21 (1).png'
import img2 from '../Global/images/nepaligrp.jpg'
import Button from '../Components/Button'

const AboutSect = () => {
  return (
   <>
   <section className='px-[40px] pb-[50px] pt-[120px]'>
   <div className='grid grid-cols-2'>
    <div className='relative'>
    <figure className=' h-[300px] w-[450px] absolute left-[5em]   '>
        <img className='h-full rounded-[24px] w-full object-cover'  src={img1}/>
    </figure>
    <figure className=' h-[250px] w-[400px] absolute top-[14em]' >
        <img className='h-full rounded-[24px] w-full object-cover' src={img2}/>
    </figure>
    </div>
    <div className='bg-primarycolor px-[30px] py-[30px] rounded-[24px]  my-[20px]'>
        <h2 className='text-secondarycolor text-[50px] font-kurale font-[600]'>
          About Us
        </h2>
        <p className='pt-[20px] text-[17px] text-secondarycolor text-poppins text-justify overflow-hidden'>
        Welcome to Abhiyan Sales and Marketing, where innovation meets excellence in the realm of sales and marketing solutions. Since our inception in [Year], we've fostered a culture of integrity and client-centricity, propelling businesses towards unprecedented growth. With a team of
         seasoned professionals at the helm, we pride ourselves on our track record of success,
         
          tailoring bespoke strategies to suit the individual needs of each client. At [Your Company Name], we're not just about delivering results; we're about building lasting partnerships that drive mutual success. Join us on the journey to elevate your sales and marketing endeavors to new heights.
        </p>
        <div className='pt-[40px]'>
            <Button bg='secondaycolor' txtclr='primarycolor' text='Read More'/>
        </div>
    </div>

   </div>
   </section>
   </>
  )
}

export default AboutSect