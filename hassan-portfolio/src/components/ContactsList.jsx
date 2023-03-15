import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

export default function ContactsList() {
  const data = [
    {
      label: "Phone",
      value: "+923350552250",
      icon: <PhoneIcon className="h-4 w-4 text-primary" />,
    },
    {
      label: "Location",
      value: "Islamabad, Pakistan",
      icon: <EnvelopeIcon className="h-4 w-4 text-primary" />,
    },
    {
      label: "Email",
      value: "hassanzaidi4@gmail.com",
      icon: <MapPinIcon className="h-4 w-4 text-primary" />,
    },
    {
      label: "Birthday",
      value: "Feb 4, 2023",
      icon: <CalendarDaysIcon className="h-4 w-4 text-primary" />,
    },
  ];
  return (
    <ul className="p-8 rounded-xl bg-base-100 mt-8 w-full">
      {data?.map((item, index) => (
        <li>
          <div className="flex gap-x-3 items-center">
            <div className="bg-base-200 hover:bg-base-300 cursor-pointer p-4">
              {item?.icon}
            </div>
            <div className="flex flex-col justify-between items-start">
              <div className="text-xs text-gray-400">{item?.label}</div>
              <div className=" text-accent">{item?.value}</div>
            </div>
          </div>
          {index !== data?.length - 1 && <div className="divider"></div>}
        </li>
      ))}
    </ul>
  );
}
