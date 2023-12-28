import React, { useState } from 'react'
import { TbCalendarTime } from "react-icons/tb";
import CardSwip from './Elements/CardSwip';

const Section2 = () => {

  return (
    <div className='container'>
        <div className='sec2 py-5'>
            <div className='text-start upcomdiv'>
                <p className='upcome'>Upcoming<br></br> Examination</p>
                <p className='enquire text-muted'>Enquire about the examination &<br/> register for the exam</p>
            </div>
            <div className='sec2indiv'>
            <TbCalendarTime className='sec2icon'/>
            <div className='text-start'>
            <p className='sec2date'>02 October 2014</p>
            <p className='text-muted sec2date sec2date2'>Level 1 Exam</p>
            </div>
            </div>
            <div className='sec2indiv'>
            <TbCalendarTime className='sec2icon'/>
            <div className='text-start'>
            <p className='sec2date'>Nov-Dec 2016</p>
            <p className='text-muted sec2date sec2date2'>Level 2 <br/>Lorem Ipsum<br/>Lorem Ipsum</p>
            </div>
            </div>
            <div className='sec2indiv'>
            <TbCalendarTime className='sec2icon'/>
            <div className='text-start'>
            <p className='sec2date'>Ongoing this year</p>
            <p className='text-muted sec2date sec2date2'>Level 3(Grad)</p>
            </div>
            </div>
        </div>

        <div>
          <CardSwip/>
        </div>
       
    </div>
  )
}

export default Section2