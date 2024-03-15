import React from "react";
import { Row, Col } from "antd";
import PersonelCard from "../components/personelCard/personelCard";

function AdminLayout() {
  return (
    <div className="container">
      <Row>
        <Col xs={24} md={7}>
          <PersonelCard />
        </Col>
        <Col span={1}></Col>
        <Col xs={24} md={16}></Col>
      </Row>
    </div>
  );
}

export default AdminLayout;
