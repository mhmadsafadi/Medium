import React from 'react'
import { Card, Row, Col, Dropdown, Image } from "react-bootstrap";
import "./article.css";


const ArticleCard = () => {
  return (
    <div className='article-card'>
        <Card>
            <div className='d-flex align-items-center gap-2'>
                <img className='avatar' src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png' />
                <span className='name'>Abdullah</span>
                {'·'}
                <small className='date'>jan 25</small>
            </div>
            <Row>
                <Col md={9}>
                    <p className='title'>Machine Learning Resume that got me shortlisted for Meta, Microsoft, NVIDIA, Uber, Samsung, Intel.</p>
                    <p className='desc'>A list of things to focus on your resume, an example CV, and template.</p>
                </Col>
                <Col md={3}>
                    <Image className='card-img' src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg"/>
                </Col>
            </Row>
            <Row>
                <Col md={9}>
                    <div className='d-flex align-items-center justify-content-between mt-3'>
                        <div className='d-flex align-items-center gap-3'>
                            <a className='tag-link' href="#">Machine Learning</a>
                            <small className='text-muted'>3min</small>
                            <small className='text-muted'>Selected for you</small>
                        </div>
                        <div className='d-flex align-items-center'>
                            <button className='btn-icon'>
                                <i className="bi bi-bookmark-plus"></i>
                            </button>
                            <Dropdown>
                                <Dropdown.Toggle className='btn-icon'>
                                    <i className="bi bi-three-dots"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Show less like this</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#">Mute this auther</Dropdown.Item>
                                    <Dropdown.Item href="#">Report</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </Col>
            </Row>
        </Card>
    </div>
  )
}

export default ArticleCard