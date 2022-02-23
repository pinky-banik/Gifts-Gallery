import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination } from "swiper";
import img1 from "../../../images/carousel/slider 1.webp";
import img2 from "../../../images/carousel/slider 2.webp";
import img3 from "../../../images/carousel/slider 3.webp";
import img4 from "../../../images/carousel/slider 4.webp";
import img5 from "../../../images/carousel/slider 5.webp";
import img6 from "../../../images/carousel/slider 6.webp";
import img7 from "../../../images/carousel/slider 7.webp";
const Carousel = () => {
    return (
        <div className="w-75 mx-auto">
            <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className="pb-5" src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className="pb-5" src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="pb-5" src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img className="pb-5" src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img className="pb-5" src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img className="pb-5" src={img6} alt="" /></SwiperSlide>
        <SwiperSlide><img className="pb-5" src={img7} alt="" /></SwiperSlide>
        

      </Swiper>
        </div>
    );
};

export default Carousel;