import React from "react";
import Logo from "./Logo";
import NavbarDropdown from "./NavbarDropdown";

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
          <div
            key={page.title}
            onClick={() => setSelectedPage(page)}
            className={`${
              selectedPage.title === page.title
                ? "bg-primary text-primary-content"
                : "bg-base-100 text-base-content"
            } hover:bg-primary hover:text-primary-content rounded-xl flex flex-col gap-y-1 items-center justify-center p-3 cursor-pointer`}
          >
            {page.icon}
            <div className="">{page.title}</div>
          </div>
        ))}
      </div>
      <NavbarDropdown />
    </div>
  );
};

export default CustomHeader;
