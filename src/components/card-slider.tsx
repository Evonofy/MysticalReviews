import { FunctionComponent } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Card, CardProps } from "./Card";

export const CardSlider: FunctionComponent<{ cards: CardProps[] }> = ({
  cards,
}) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      pagination={{
        clickable: true,
        // el: ".horizontal-card-carousel-navigation-button",
        renderBullet: (_, className) => {
          return `<button class="${className}"></button>`;
        },
      }}
      className="mySwiper"
      modules={[Pagination]}
    >
      {cards.map((props) => (
        <SwiperSlide key={props.notionPageID}>
          <Card
            {...props}
            variant="side-scroll"
            css={{
              "@mobile": { width: "100%" },
              "@tablet": { maxWidth: "300px" },
              "@desktop": { maxWidth: "none" },
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
