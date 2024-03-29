import { useEffect, useRef, useState } from "react";

interface ConstantlyMovingCarouselProps {
  images: JSX.Element[];
}

export const ConstantlyMovingCarousel: React.FC<
  ConstantlyMovingCarouselProps
> = ({ images }) => {
  const carouselRef = useRef<any>(null);
  const carouselItemsRef = useRef<any>([]);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    const carouselItems = carouselItemsRef.current;
    setCarouselWidth(carousel.offsetWidth);
    setItemWidth(carouselItems[0].offsetWidth);
    console.log("carouselWidth:", carouselWidth);
    console.log("itemWidth:", itemWidth);
  }, [carouselWidth, itemWidth]);

  useEffect(() => {
    console.log("currentIndex:", currentIndex);
    const intervalId = setInterval(() => {
      const nextIndex = currentIndex + 1 < images.length ? currentIndex + 1 : 0;
      const scrollAmount = nextIndex * itemWidth - carouselWidth;
      console.log("scrollAmount:", scrollAmount);
      if (carouselRef?.current && carouselRef.current?.scrollTo) {
        carouselRef.current.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, itemWidth, carouselWidth, images]);

  return (
    <div className="carousel carousel-end rounded-box" ref={carouselRef}>
      {images.map((image, index) => (
        <div
          className="carousel-item"
          key={index}
          ref={(el) => (carouselItemsRef.current[index] = el)}
        >
          {image}
        </div>
      ))}
    </div>
  );
};
