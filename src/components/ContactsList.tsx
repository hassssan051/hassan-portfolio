import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import { IconShow } from "./IconShow";

const data = [
  {
    label: "Phone",
    value: "+923350552250",
    icon: <PhoneIcon className="h-5 w-5 text-primary" />,
  },
  {
    label: "Location",
    value: "Islamabad, Pakistan",
    icon: <EnvelopeIcon className="h-5 w-5 text-primary" />,
  },
  {
    label: "Email",
    value: "hassanzaidi4@gmail.com",
    icon: <MapPinIcon className="h-5 w-5 text-primary" />,
  },
  {
    label: "Birthday",
    value: "Feb 4, 2023",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary" />,
  },
];
type labels = "Phone" | "Email" | "Location" | "Birthday";
export default function ContactsList() {
  return (
    <div className="flex flex-col justify-start items-start w-full px-3 gap-2">
      {data.map((item) => (
        <IconShow
          key={item.label}
          icon={item.icon}
          value={item.value}
        />
      ))}
    </div>
  );
}
