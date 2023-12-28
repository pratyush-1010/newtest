import React,{useState}from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
const CountCard = ({end,con}) => {
  const [count,setCount]=useState(false)

  return (
    <div className='text-start countcard'>
        <p className='card2p1'>Lorem Ipsum</p>
        <ScrollTrigger onEnter={()=>setCount(true) }
        //  onExit={()=>setCount(false)}
        >
        <p className='countp'>

          {count &&  <CountUp start={0} end={end} duration={2} delay={0}/>}+
        </p>
       
        </ScrollTrigger>
        <p className='card2p2'>Lorem Ipsum</p>
        <p className='card2p3'>{con}</p>
        </div>
  )
}

export default CountCard