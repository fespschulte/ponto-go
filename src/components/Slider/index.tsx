import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { OfferCard } from "../OfferCards";

export function Slider() {
  return (
    <>
      <Swiper
        className="myswiper"
        modules={[Navigation, Pagination]}
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={0}
        navigation={true}
        // verificar a prop que traz o card em destaque
      >
        <SwiperSlide>
          <OfferCard plan="Bronze" price="30" numColab="5" />
        </SwiperSlide>
        <SwiperSlide>
          <OfferCard plan="Prata" price="50" numColab="10" />
        </SwiperSlide>
        <SwiperSlide>
          <OfferCard plan="Ouro" price="100" numColab="20" />
        </SwiperSlide>
        <SwiperSlide>
          <OfferCard plan="Platina" price="200" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
