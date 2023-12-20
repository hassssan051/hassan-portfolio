import ContactsList from "./ContactsList";
import { Hassan2 } from "../assets";
import { AnimatePresence, motion } from "framer-motion";
import { openInNewTab } from "../utils/utils";
import { IconShow } from "./IconShow";
import React from "react";
import { LeftCircleFilled } from "@ant-design/icons";

export default function CustomSider() {
  const [isShown, setIsShown] = React.useState(false);
  const variants = {
    open: { x: 0 },
    closed: { x: -350 },
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        initial="closed"
        animate={isShown ? "open" : "closed"}
        style={{
          height: "100vh",
          position: "absolute",
          left: 0,
          zIndex: "10",
        }}
        className="bg-neutral !w-[350px] px-4 py-10 !max-w-[350px] overflow-auto scrollbar-thin scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-track-base-100 scrollbar-thumb-base-content"
      >
        <div className="absolute left-[300px]" style={{ display: "" }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >
            <LeftCircleFilled
              rev={{ className: "" }}
              onClick={() => setIsShown(!isShown)}
              className="text-primary text-[40px] cursor-pointer "
            />
          </motion.div>
        </div>
        <div className="flex items-center w-full">
          <div className="avatar mx-auto">
            <div className="w-56">
              <img className="rounded-xl object-contain" src={Hassan2} />
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-neutral-content w-full text-center mt-4">
          Hassan Zaidi
        </h1>
        <ContactsList />
        {/* <Slider 
        images={[
          "https://img.icons8.com/external-becris-flat-becris/64/null/external-machine-learning-data-science-becris-flat-becris.png",
          "https://img.icons8.com/color/48/null/tensorflow.png",
          "https://img.icons8.com/stickers/100/null/python.png",
          "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-web-development-seo-flaticons-lineal-color-flat-icons.png",
          "https://img.icons8.com/fluency/48/null/node-js.png",
          "https://img.icons8.com/bubbles/50/null/react.png",
        ]}
        
        /> */}
        {/* <motion.div
          className="flex"
          animate={{
            x: [-400, -300, -200, -100, 0, 100, 200, 300, 400, 500],
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 5,
                ease: "linear",
                bounce: 0.5,
              },
            },
          }}
          whileHover={{}} // stop animation on hover
        >
          <ReactIcon />
          <DjangoIcon />
          <FlaskIcon />
          <MachineLearningIcon />
          <NodeIcon />
          <PythonIcon />
          <TensorFlowIcon />
          <WebDevIcon />
        </motion.div> */}
        {/* <div className="flex flex-wrap gap-3 px-10 justify-center">
            <ReactIcon />
            <DjangoIcon />
            <FlaskIcon />
            <MachineLearningIcon />
            <NodeIcon />
            <PythonIcon />
            <TensorFlowIcon />
            <WebDevIcon />
          </div> */}
      </motion.div>
    </AnimatePresence>
  );
}
