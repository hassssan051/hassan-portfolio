import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/solid";
interface IconShowProps {
  icon: React.ReactNode;
  value: string;
  shouldHide?: boolean;
  actionHandler?: () => void;
}

export const IconShow: React.FC<IconShowProps> = ({
  icon,
  value,
  shouldHide,
  actionHandler,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isCopied, setIsCopied] = React.useState(false);
  const variants = {
    open: {
      opacity: 1,
      width: "auto",
      transition: { duration: 0.3, type: "spring", stiffness: 300 },
      display: "flex",
    },
    closed: {
      opacity: 0,
      width: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 300 },
      //   transitionEnd: { display: "none" },
    },
  };
  //   hover:text-primary-focus hover:border-primary-focus

  React.useEffect(() => {
    let timeout: any;
    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied]);

  return (
    <motion.div
      onClick={() => {
        actionHandler && actionHandler();
        setIsCopied(true);
      }}
      className="flex items-center border-2 border-primary-content rounded-xl  py-3 px-3 cursor-pointer overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{ opacity: isHovered ? 1 : 0.8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {icon}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="text-base-content text-base ml-2 whitespace-nowrap"
            variants={variants}
            initial="closed"
            animate={isHovered ? "open" : "closed"}
            exit="closed"
          >
            {value}{" "}
            {/* <AnimatePresence>
              {!isCopied && (
                <motion.span
                  //   animate={{ opacity: 1, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.2, delay: 0.2, type: "spring", stiffness: 300.  }}
                  className="text-primary"
                >
                  <ClipboardIcon className="h-3 my-auto" />
                </motion.span>
              )}
              {isCopied && (
                <motion.span
                  className="text-primary"
                  //   animate={{ opacity: 1, transition: { duration: 0.2 } }}
                >
                  <CheckIcon className="h-3 my-auto" />
                </motion.span>
              )}
            </AnimatePresence> */}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
