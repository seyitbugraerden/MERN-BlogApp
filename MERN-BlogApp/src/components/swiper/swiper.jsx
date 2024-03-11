import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper.css";
function swiper() {
  return (
    <Swiper className="mySwiper">
      <SwiperSlide>
        <img src="https://picsum.photos/1920/1080" alt="" />
        <div className="mySwiperText">
          <h2>Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatem, architecto.
          </p>
          <button>Read More</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/1920/1080" alt="" />
        <div className="mySwiperText">
          <h2>Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatem, architecto.
          </p>
          <button>Read More</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/1920/1080" alt="" />
        <div className="mySwiperText">
          <h2>Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatem, architecto.
          </p>
          <button>Read More</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/1920/1080" alt="" />
        <div className="mySwiperText">
          <h2>Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatem, architecto.
          </p>
          <button>Read More</button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default swiper;
