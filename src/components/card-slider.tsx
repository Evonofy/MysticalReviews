import { FunctionComponent } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Card, CardProps } from "./card";

export const CardSlider: FunctionComponent<{ cards: CardProps[] }> = ({
  cards,
}) => {
  return (
    <Swiper
      spaceBetween={8}
      pagination={{
        clickable: true,
        // el: ".horizontal-card-carousel-navigation-button",
        renderBullet: (index, className) => {
          return `<button class="${className}"></button>`;
        },
      }}
      className="mySwiper"
      modules={[Pagination]}
    >
      {cards.map((props) => (
        <SwiperSlide key={props.title}>
          <Card {...props} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
