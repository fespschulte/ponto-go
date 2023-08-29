import { useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { OfferCard } from "../OfferCards";

export function Slider() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [slides, setSlides] = useState(
    Array.from({ length: 4 }).map((_, index) => <OfferCard />)
  );

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={-48}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide virtualIndex={index}>{slideContent}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
