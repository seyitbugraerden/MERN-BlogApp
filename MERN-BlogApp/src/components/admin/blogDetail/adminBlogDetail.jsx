import React from "react";
import PersonelCard from "../../personelCard/personelCard";
import Banner from "../banner/banner";
import { Col, Row } from "antd";

function adminBlogDetail() {
  return (
    <div className="container">
      <Row>
        <Col xs={24} md={7}>
          <PersonelCard />
        </Col>
        <Col span={1}></Col>
        <Col xs={24} md={16}>
          <Banner />
        </Col>
      </Row>
    </div>
  );
}

export default adminBlogDetail;
