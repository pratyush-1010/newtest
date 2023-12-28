import React from 'react'
import img1 from '../imgs/sec1.png'
import { GoTriangleRight } from "react-icons/go";
const CarCon = () => {
  return (
    // <div className='container'>
        <div className='sec1'>
            <div className='insec1 p-5 mt-5 ms-5 text-start'>
                <p className='sec1p1'>Lorem Ipsum</p>
                <p className='sec1p2 text-start'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed<br/> diam nonumy eirmod tempor invidunt ut labore et dolore <br/>magna aliquyam erat, sed diam voluptua. At vero eos et accusam<br/> et justo duo dolores et ea rebum. Stet clita kasd
                </p>
                <button className='sec1but'>Know More <span><GoTriangleRight /></span></button>
            </div>
            <div className='in1sec1'>
            <img src={img1} className='img1'></img>
            </div>
        </div>
    // </div>
  )
}

export default CarCon