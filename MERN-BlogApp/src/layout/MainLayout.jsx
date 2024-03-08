import React from "react";
import { Row, Col } from "antd";
import PersonelCard from "../components/personelCard/personelCard";
import Swiper from "../components/swiperArea/swiper";
import BlogCard from "../components/blogCard/blogCard";
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
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Col>
      </Row>
    </div>
  );
}

export default MainLayout;
