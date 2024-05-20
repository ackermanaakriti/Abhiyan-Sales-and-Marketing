import React from 'react'
import Ourteamlist from './Ourteamlist'
import hajurbuwa from '../../Global/images/hajurbuwa.jpg'
import junupandey from '../../Global/images/sailimaiju.jpg'

import abhiyan from '../../Global/images/abhiyan.jpg'

import apekshydd from '../../Global/images/apekshydd.jpg'



const AboutusGroup = () => {
  return (
   <>
   <div className='aboutusGrp px-[40px] py-[50px]'>
    <div>
    <h2 className='text-primarycolor text-[60px]  text-center font-kurale font-[600]'>Our Team</h2>
    </div>
    <div className='teamlist  pt-[30px]'>
        <div className='flex item-center justify-center'>
            <Ourteamlist name='Junu Pandey' position='Owner' img={junupandey} />
        </div>
       
        <div className='grid grid-cols-3 pt-[50px] '>
           
        <Ourteamlist name='Chhabi Pandey' position='Owner' img={hajurbuwa}/>
        <Ourteamlist name='Apekshya Pandey' position='Owner' img={apekshydd}/>
        <Ourteamlist name='Avbhiyan Pandey' position='Owner' img={abhiyan}/>
        
        </div>

    </div>

   </div>
   </>
  )
}

export default AboutusGroup