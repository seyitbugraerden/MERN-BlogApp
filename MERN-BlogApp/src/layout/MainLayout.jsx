import React, { useState } from "react";
import { Row, Col } from "antd";
import { Pagination } from "antd";
import PersonelCard from "../components/personelCard/personelCard";
import Swiper from "../components/swiper/swiper";
import BlogCard from "../components/blogCard/blogCard";
import axios from "axios";

function MainLayout() {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogData, setBlogData] = useState([
    {
      _id: "65f3036e8e27e989c09b378a",
      username: "seyitbugraerden",
      title: "Blog 1",
      description: "Content 1",
      createdAt: "2024-03-14T14:02:22.597Z",
      updatedAt: "2024-03-14T14:02:22.597Z",
      __v: 0,
    },
    {
      _id: "65f303738e27e989c09b378c",
      username: "seyitbugraerden",
      title: "Blog 2",
      description: "Content 2",
      createdAt: "2024-03-14T14:02:27.498Z",
      updatedAt: "2024-03-14T14:02:27.498Z",
      __v: 0,
    },
    {
      _id: "65f303768e27e989c09b378e",
      username: "seyitbugraerden",
      title: "Blog 3",
      description: "Content 3",
      createdAt: "2024-03-14T14:02:30.569Z",
      updatedAt: "2024-03-14T14:02:30.569Z",
      __v: 0,
    },
    {
      _id: "65f303798e27e989c09b3790",
      username: "seyitbugraerden",
      title: "Blog 4",
      description: "Content 4",
      createdAt: "2024-03-14T14:02:33.557Z",
      updatedAt: "2024-03-14T14:02:33.557Z",
      __v: 0,
    },
    {
      _id: "65f3037c8e27e989c09b3792",
      username: "seyitbugraerden",
      title: "Blog 5",
      description: "Content 5",
      createdAt: "2024-03-14T14:02:36.437Z",
      updatedAt: "2024-03-14T14:02:36.437Z",
      __v: 0,
    },
  ]);

  const fetchItems = () => {
    axios
      .get("http://localhost:5000/api/blog")
      .then((res) => console.log(res.data));
  };
  fetchItems();

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
    <div className="container" id="main-layout">
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
