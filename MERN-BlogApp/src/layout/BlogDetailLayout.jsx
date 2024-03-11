import React from "react";
import { Row, Col } from "antd";
import PersonelCard from "../components/personelCard/personelCard";

function BlogDetailLayout() {
 

  return (
    <div className="container" id="main-layout">
      <Row>
        <Col xs={24} md={7}>
          <PersonelCard />
        </Col>
        <Col span={1}></Col>
        <Col xs={24} md={16}>
          
        </Col>
      </Row>
    </div>
  );
}

export default BlogDetailLayout;
