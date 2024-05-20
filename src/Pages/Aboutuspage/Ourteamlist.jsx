import React from 'react'
// import img from '../../Global/images/sailimaiju.jpg'

const Ourteamlist = ({name,img ,position}) => {
  return (
  <>
  <div className='flex item-center justify-center '>
    <div className='border-[1px] rounded-[10px] p-[20px] border-solid border-primarycolor'>
    <figure className='h-[200px] flex justify-center items-center cover '>
        <img  className='h-full  rounded-[10px] ' src={img}/>
    </figure>
    <div className='pt-[10px] text-center'>
        <p className=' text-[22px] font-[500] text-primarycolor font-poppins'>{name}</p>
        <p className='text-[18px] font-[400] text-primarycolor font-poppins'>{position}</p>
    </div>
  </div>
  </div>
  </>
  )
}

export default Ourteamlist