import { useRef } from "react";
import { Carousel } from "antd";

export default function JobCarousel() {
  const carouselRef = useRef(null);

  const handleSlideClick = () => {
    carouselRef.current.next();
  };
  return (
    <div className="w-2/3">
      <Carousel autoplay dots={false} ref={carouselRef}>
        <div
          onClick={handleSlideClick}
          className="bg-base-100 cursor-pointer py-6 px-2 text-primary-focus uppercase text-semibold text-center rounded-xl"
        >
          Machine Learning Engineer
        </div>
        <div
          onClick={handleSlideClick}
          className="bg-base-100 cursor-pointer py-6 px-2 text-primary-focus uppercase text-semibold text-center rounded-xl"
        >
          Full Stack Web Development
        </div>
        <div
          onClick={handleSlideClick}
          className="bg-base-100 cursor-pointer py-6 px-2 text-primary-focus uppercase text-semibold text-center rounded-xl"
        >
          Azure Cloud Administration
        </div>
      </Carousel>
    </div>
  );
}
