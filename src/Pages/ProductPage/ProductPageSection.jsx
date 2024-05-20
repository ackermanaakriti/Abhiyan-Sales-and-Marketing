import React from 'react'
import noodelbowl from '../../Global/images/bowlnoodley.png'
import biscuits from '../../Global/images/biscuitsgrp.png'
import snacks from '../../Global/images/chessse.png'
import Button from '../../Components/Button'
import Ourproduct from '../../Components/Ourproduct'
import Ourproductsec from '../../Sections/Ourproductsec'
import OtherProducts from '../../Sections/OtherProducts'
import { useNavigate } from 'react-router'

const ProductPageSection = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='px-[40px] py-[50px]'>
                <div className='grid grid-cols-2 items-center'>
                    <div>
                        <figure className='h-[380px] flex justify-center'>
                            <img className='h-full' src={noodelbowl} />
                        </figure>
                    </div>
                    <div>
                        <h2 className='font-kurale text-[60px] text-primarycolor'>
                            Noodles
                        </h2>
                        <p className='font-inter text-[22px] text-primarycolor text-justify'>Indulge your taste buds in a symphony of flavors with our delectable noodles!
                            Crafted with the finest ingredients and perfected through generations of culinary expertise,
                            our noodles promise a dining experience that's nothing short of extraordinary.</p>
                        <div onClick={()=>navigate('/individual')} className='pt-[20px]'>
                            <Button bg='primarycolor' text='View All' txtclr='secondarycolor' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto container py-[25px]'>
                <div className='grid grid-cols-2 items-center'>
                    <div>
                    <h2 className='font-kurale text-[60px] text-primarycolor'>
                            Biscuits
                        </h2>
                        <p className='font-inter text-[22px] text-primarycolor text-justify'>Indulge your taste buds in a symphony of flavors with our delectable noodles!
                            Crafted with the finest ingredients and perfected through generations of culinary expertise,
                            our noodles promise a dining experience that's nothing short of extraordinary.</p>
                        <div className='pt-[20px]'>
                            <Button bg='primarycolor' text='View All' txtclr='secondarycolor' />
                        </div>
                    </div>
                    <div>
                    <figure className='h-[380px] flex justify-center'>
                            <img className='h-full' src={biscuits} />
                        </figure>
                        
                    </div>
                </div>
            </div>
            <div className='mx-auto container py-[25px]'>
                <div className='grid grid-cols-2 items-center'>
                    <div>
                    <figure className='h-[380px] flex justify-center'>
                            <img className='h-full' src={snacks} />
                        </figure>
                    
                    </div>
                    <div>
                    
                    <h2 className='font-kurale text-[60px] text-primarycolor'>
                            Snacks
                        </h2>
                        <p className='font-inter text-[22px] text-primarycolor text-justify'>Indulge your taste buds in a symphony of flavors with our delectable noodles!
                            Crafted with the finest ingredients and perfected through generations of culinary expertise,
                            our noodles promise a dining experience that's nothing short of extraordinary.</p>
                        <div className='pt-[20px]'>
                            <Button bg='primarycolor' text='View All' txtclr='secondarycolor' />
                        </div>
                    </div>
                </div>
            </div>
       <OtherProducts/>
        </>
    )
}

export default ProductPageSection