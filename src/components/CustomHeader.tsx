import React from "react";
import Logo from "./Logo";
import NavbarDropdown from "./NavbarDropdown";
import { motion } from "framer-motion";

type Page = {
  title: string;
  icon: React.ReactNode;
  component: React.ReactNode | React.ReactElement;
};

interface CustomHeaderProps {
  pages: Page[];
  setSelectedPage: React.Dispatch<React.SetStateAction<Page>>;
  selectedPage: Page;
}

export const CustomHeader: React.FC<CustomHeaderProps> = ({
  pages,
  setSelectedPage,
  selectedPage,
}) => {
  return (
    <div className="p-8 px-10 bg-transparent flex justify-between h-32 items-center leading-none sticky top-0 z-10">
      <Logo />
      <div className="bg-neutral mt-4 md:hidden lg:flex gap-x-7 items-center justify-between p-7 px-8 rounded-xl mr-15">
        {pages.map((page) => (
          <motion.div
            key={page.title}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setSelectedPage(page)}
            className={`${
              selectedPage.title === page.title
                ? "bg-primary text-primary-content"
                : "bg-base-100 text-base-content"
            } hover:bg-primary hover:text-primary-content rounded-xl flex flex-col gap-y-1 items-center justify-center p-3 cursor-pointer`}
          >
            {page.icon}
            <div className="">{page.title}</div>
          </motion.div>
        ))}
      </div>
      <NavbarDropdown />
    </div>
  );
};

export default CustomHeader;
