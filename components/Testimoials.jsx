"use client";
// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper rquired modules
import { Autoplay } from "swiper/modules";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from "react-icons/im";

// data
const testimonial = [
  {
    message: "I write code late at night with..... k-pop music. ",
    name: "Paraphol Puangpee",
  },
  {
    message: "Dark mode isn't a choice. It's a lifestyle.",
    name: "Paraphol Puangpee",
  },
  {
    message: "Google is my co-pilot. Stack Overflow is the instructor.",
    name: "Paraphol Puangpee",
  },
];

const Testimoial = () => {
  return (
    <Swiper
      //   modules={[Autoplay]}
      loop={false}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg"
    >
      {testimonial.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex px-8 py-6 gap-8">
              <ImQuotesLeft className="hidden xl:flex text-8xl text-accent" />
              <div className="flex flex-col gap-2">
                <p>{person.message}</p>
                <p className="self-end text-accent">{person.name}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Testimoial;
