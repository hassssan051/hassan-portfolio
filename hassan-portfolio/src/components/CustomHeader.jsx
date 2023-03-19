import React from "react";
import { Header } from "antd/es/layout/layout";
import Logo from "./Logo";
import NavbarDropdown from "./NavbarDropdown";

export default function CustomHeader({pages, setSelectedPage, selectedPage}) {
  return (
    <Header className="p-8 px-10 bg-base-100 flex justify-between h-44 items-center leading-none">
      <Logo />
      <div className="bg-neutral md:hidden lg:flex gap-x-7 items-center justify-between p-7 px-8 rounded-xl mr-15">
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
    </Header>
  );
}
