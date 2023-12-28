import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
const Card1 = () => {
  return (
    <div className='text-start py-4 px-2 sec2card'>
        <p className='card1p1'>Lorem Ipsum</p>
        <p className='card1p2'>Lorem ipsum dolor sit amet, consetetur<br/> sadipscing elitr, sed diam nonumy eirmod</p>
        <p className='card1p2'>Know More <IoIosArrowDroprightCircle className='icon'/></p>

    </div>
  )
}

export default Card1