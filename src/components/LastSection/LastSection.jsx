import React from "react";
import { Container, Col, Row, Card, Nav } from "react-bootstrap";
import "./lastSection.css";
import Sticky from "react-stickynode";

const LastSection = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="last-section">
      <Container>
        <Row>
          <Col md={8}>
            {numbers.map((number) => (
              <Card key={number}>
                <div className="d-flex">
                  <div>
                    <div className="name">
                      <img
                        src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"
                        width={25}
                        height={25}
                      />
                      <span>Cesar Sojo</span>
                    </div>
                    <div className="descr">
                      <h4>Brown Boys Never Become Scandinavian</h4>
                      <p>
                        We’re strangers the moment I enter a room, yet you think
                        you know what kind of person I am. The skin that I carry
                        babbles the story
                      </p>
                      <span>Feb 143 min read</span>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_960_720.jpg"
                      width={200}
                      height={170}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </Col>

          <Col md={4}>
            <Sticky top={120}>
              <h6>DISCOVER MORE OF WHAT MATTERS TO YOU</h6>
              <div className="tags">
                <button>Self</button>
                <button>Relationships</button>
                <button>Data Seince</button>
                <button>Programming</button>
                <button>Productive</button>
                <button>Javascript</button>
                <button>Machine Learning</button>
                <button>Politics</button>
                <button>Health</button>
              </div>
              <hr />
              <Nav>
                <Nav.Item>
                  <Nav.Link>Help</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Status</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Writers</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Career</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Privacy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Terms</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Knowable</Nav.Link>
                </Nav.Item>
              </Nav>
            </Sticky>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LastSection;
