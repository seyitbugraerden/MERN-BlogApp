import React, { useState } from "react";
import { Row, Col } from "antd";
import { Pagination } from "antd";
import PersonelCard from "../components/personelCard/personelCard";
import Swiper from "../components/swiperArea/swiper";
import BlogCard from "../components/blogCard/blogCard";

const blogData = [
  { id: 1, title: "Blog 1", content: "Content 1" },
  { id: 2, title: "Blog 2", content: "Content 2" },
  { id: 3, title: "Blog 3", content: "Content 3" },
  { id: 4, title: "Blog 3", content: "Content 3" },
  { id: 5, title: "Blog 3", content: "Content 3" },
  { id: 6, title: "Blog 3", content: "Content 3" },
  { id: 7, title: "Blog 3", content: "Content 3" },
];

function MainLayout() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogCardsPerPage = 3;
  const indexOfLastBlogCard = currentPage * blogCardsPerPage;
  const indexOfFirstBlogCard = indexOfLastBlogCard - blogCardsPerPage;
  const currentBlogCards = blogData.slice(
    indexOfFirstBlogCard,
    indexOfLastBlogCard
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <Row>
        <Col xs={24} md={7}>
          <PersonelCard />
        </Col>
        <Col span={1}></Col>
        <Col xs={24} md={16}>
          <Swiper />
          {currentBlogCards.map((blogCard) => (
            <BlogCard key={blogCard.id} {...blogCard} />
          ))}
          <Pagination
            defaultCurrent={1}
            total={blogData.length}
            pageSize={blogCardsPerPage}
            onChange={handlePageChange}
          />
        </Col>
      </Row>
    </div>
  );
}

export default MainLayout;
