import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";
import RightSide from "../../components/RightSide";

const InHome = () => {
  return (
    <Container fluid="xl">
      <Row>
        <Col lg={1}>
          <Sidebar />
        </Col>
        <Col lg={8}>
          <Main />
        </Col>
        <Col lg={3}>
          <RightSide/>
        </Col>
      </Row>
    </Container>
  );
};

export default InHome;
