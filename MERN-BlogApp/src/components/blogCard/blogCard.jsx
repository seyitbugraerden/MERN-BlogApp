import { Col, Row } from "antd";
import React from "react";
import "./blogCard.css";

function blogCard() {
  return (
    <div className="blogCard">
      <Row>
        <Col xs={24} md={8}>
          <img src="https://picsum.photos/200/300" alt="" />
        </Col>
        <Col xs={0} md={1}></Col>
        <Col xs={24} md={15}>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores, beatae.
          </p>
          <button>Read More</button>
        </Col>
      </Row>
    </div>
  );
}

export default blogCard;
