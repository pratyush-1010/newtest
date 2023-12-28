import React,{useState} from 'react'
import{Row,Col} from 'react-bootstrap'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import CountCard from './Elements/CountCard'
const Section3 = () => {
  const [count,setCount]=useState(false)

  return (
    <div className='sec3 py-5 my-5'>
         
        <div className='container'> 
          <Row g={5}>
            <Col md={3}><CountCard end={123} con="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"/></Col>
            <Col md={3}><CountCard end={12} con="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"/></Col>
            <Col md={3}><CountCard end={12} con="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et"/></Col>
            <Col md={3}><CountCard end={123} con="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"/></Col>

          </Row>
        </div>
    </div>
  )
}

export default Section3