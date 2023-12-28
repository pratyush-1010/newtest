import React from 'react'
import { GoTriangleRight } from "react-icons/go";
const Section5 = () => {
  return (
    <div className='container'>
        <div className='sec5 py-5 text-start'>
        <p className='sec3p1 sec5p1'>Subscribe</p>
        <p className='accp text-start'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam<br/> nonumy eirmod tempor invidunt ut labore et dolore magna</p>
        <input type='text' className='inp1' placeholder='Enter Your Email Address'></input>
        <button>Subscribe Now <span><GoTriangleRight /></span>
            </button>
        </div>

    </div>
  )
}

export default Section5