import React from 'react'
import { GrFacebookOption,GrLinkedin,GrInstagram,GrTwitter,GrYoutube} from "react-icons/gr";
import { FaQuora } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { RiTimerLine } from "react-icons/ri";
import { FaTrainSubway } from "react-icons/fa6";
const Footer = () => {
  return (
<>
    <div className='footer'>
        
            <div className='text-start infoot'>
                <p className='fp1'>Contact us</p>
                <p className='fp2'>
                Address: amet, consetetur sadipscing elitr, sed diam<br/> Email id: eirmod tempor invidunt ut labore et dolore<br/>Phone no: 123456789
                </p>
            </div>
            <div className='text-center infoot'>
            <p className='fp1'>Follow us</p>
            <GrFacebookOption className='ficon'/>
            <GrLinkedin className='ficon'/>
            <GrInstagram className='ficon'/>
            <GrTwitter className='ficon'/>
            <GrYoutube className='ficon'/>
            <FaQuora className='ficon'/>

            </div>
            <div className='text-start infoot'>
            <p className='fp1 '>Head Office</p>
            <p className='fp2'>
                <span>
                <IoLocationOutline/>
                </span>
                Lorem ipsum dolor sit amet, consetetur sadipscing<br/> elitr, sed diam nonumy eirmod tempor invidunt ut
            </p>
            <p className='fp2'>
                <span>
                <RiTimerLine/>
                </span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </p>
            <p className='fp2'>
                <span>
                <RiTimerLine/>
                </span>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </p>
            <p className='fp2'>
                <span>
                <FaTrainSubway/>
                </span>
                Lorem ipsum asd asdsaweeq Lorem Ipsum
            </p>
            </div>

    </div>
    <div className='foot2'>
        <p>© 2021 All Rights Reserved. Privacy Policy</p>
    </div>
</>
  )
}

export default Footer