import React from 'react'

const Button = ({type,text,textsize,bg,txtclr}) => {
    console.log(bg)
  return (
    <>
    <button className={`px-[20px] py-[6px]  font-poppins rounded-[20px] text-[20px]} text-${txtclr} font-[400] bg-${bg}`}>
{text}
    </button>
    </>
  )
}

export default Button