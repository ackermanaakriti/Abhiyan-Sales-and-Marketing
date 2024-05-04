import React from 'react'

const Button = ({type,text,textsize,bg,txtclr}) => {
    console.log(bg)
  return (
    <>
    <button className={`px-[20px] py-[4px]  font-poppins rounded-[20px] text-${textsize} text-${txtclr} font-[400] bg-${bg}`}>
{text}
    </button>
    </>
  )
}

export default Button