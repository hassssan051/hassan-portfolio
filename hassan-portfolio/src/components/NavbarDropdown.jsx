import React from "react";
import {  Bars3BottomRightIcon } from "@heroicons/react/24/solid";

export default function NavbarDropdown() {
  return (
    <div className="dropdown dropdown-bottom dropdown-end lg:hidden">
      <label
        tabIndex={0}
        className="btn btn-ghost btn-circle bg-primary text-primary-content"
      >
        <Bars3BottomRightIcon className="h-6 w-6 text-primary-content" />
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-primary-content rounded-box w-52"
      >
        {["Home", "Resume", "Works", "Contact"].map((item) => (
          <li>
            <a>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
