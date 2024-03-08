import React from "react";
import { Row, Col } from "antd";
import PersonelCard from "../components/personelCard/personelCard";
import Swiper from "../components/swiperArea/swiper";
function MainLayout() {
  return (
    <div className="container">
      <Row>
        <Col xs={24} md={7}>
          <PersonelCard />
        </Col>
        <Col span={1}></Col>
        <Col xs={24} md={16}>
          <Swiper />
        </Col>
      </Row>
    </div>
  );
}

export default MainLayout;
