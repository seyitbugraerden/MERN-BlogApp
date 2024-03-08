import React from "react";
import { Row, Col } from "antd";
import PersonelCard from "../components/personelCard/personelCard";

function MainLayout() {
  return (
    <div className="container">
      <Row>
        <Col xs={24} md={10}>
          <PersonelCard />
        </Col>
        <Col xs={24} md={14}>
          col-12
        </Col>
      </Row>
    </div>
  );
}

export default MainLayout;
