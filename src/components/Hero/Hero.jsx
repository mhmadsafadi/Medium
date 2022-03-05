import React from 'react'
import {Container, Col, Button} from 'react-bootstrap'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <Container>
        <Col xl={6} lg={12}>
          <h3>Medium is a place to write, read, and connect</h3>
          <p>It's easy and free to post your thinking on any topic and connect with millions of readers.</p>
          <Button variant="outline-dark">Start Writing</Button>
        </Col>
      </Container>
    </div>
  )
}

export default Hero