import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const startAnimation = () => {
    controls.start({
      x: [0, -100 * (images.length - 1)],
      transition: {
        duration: images.length * 2,
        repeat: Infinity,
        ease: "linear",
      },
    });
  };

  const stopAnimation = () => {
    controls.stop();
  };

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
        stopAnimation();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        startAnimation();
      }}
    >
      <motion.div animate={controls} initial={{ x: 0 }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
