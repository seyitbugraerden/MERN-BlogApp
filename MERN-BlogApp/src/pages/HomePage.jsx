import React from 'react';
import UserCard from '../components/UserCard/UserCard';
import Nav from '../components/Navbar/Nav';
import Swiper from '../components/Carousel/Swiper';
import BlogList from '../components/BlogList/BlogList';

function HomePage() {
  return (
    <div className="wrapper">
      <UserCard/>
      <div className="content">
        <Nav/>
        <Swiper/>
        <BlogList/>
        
      </div>
    </div>
  );
}

export default HomePage;
