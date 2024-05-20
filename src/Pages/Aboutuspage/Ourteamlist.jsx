import React from 'react'
// import img from '../../Global/images/sailimaiju.jpg'

const Ourteamlist = ({name,img ,position}) => {
  return (
  <>
  <div className='flex item-center justify-center '>
    <div className=''>
    <figure className='h-[200px] w-[200px] rounded-[50%]  border-[5px] border-solid border-primarycolor flex justify-center items-center cover '>
        <img  className='h-full w-full  rounded-[50%]  ' src={img}/>
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