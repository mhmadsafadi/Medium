import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Data from './trending.json'
import './trending.css'

const Trending = () => {
  return (
    <div className='trending'>
        <Container>
            <p className='title'>
                <i className="bi bi-graph-up-arrow"></i>
                TRENDING ON MEDIUM
            </p>
            <Row>
                {Data.map((data) =>
                    <Col lg={4} md={6} key={data.id}>
                        <div className='c-card d-flex'>
                            <div className='num'>{data.num}</div>
                            <div className='mt-2'>
                                <a href="#"><p className='name'>{data.name}</p></a>
                                <a href="#"><p className='desc'>{data.desc}</p></a>
                                <span className='date'>{data.date}</span>
                            </div>
                        </div>
                    </Col>
                )}
            </Row>
        </Container>
    </div>
  )
}

export default Trending