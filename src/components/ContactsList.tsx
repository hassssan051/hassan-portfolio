import React from "react";
import {
  EnvelopeIcon,
  MapPinIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
import {
  LinkedinFilled,
  MediumSquareFilled,
  GithubFilled,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { openInNewTab } from "../utils/utils";

const data = [
  // {
  //   label: "Phone",
  //   value: "+923350552250",
  //   icon: <PhoneIcon className="h-6 w-6 text-primary" />,
  // },
  {
    label: "Location",
    value: "Islamabad, Pakistan",
    icon: <EnvelopeIcon className="h-6 w-6 text-primary" />,
  },
  {
    label: "Email",
    value: "hassanzaidi4@gmail.com",
    icon: <MapPinIcon className="h-6 w-6 text-primary" />,
  },
  {
    label: "Birthday",
    value: "Feb 4, 2023",
    icon: <CalendarDaysIcon className="h-6 w-6 text-primary" />,
  },
];
export default function ContactsList() {
  return (
    <div className="flex justify-start w-full mt-5 gap-4">
      <div className="flex flex-col justify-start items-start  gap-2 ">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, borderColor: "#0A66C2" }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() =>
            openInNewTab("https://www.linkedin.com/in/hassan-zaidi-00487a191/")
          }
          className="flex items-center border-2 border-primary-content rounded-xl  py-3 px-3 cursor-pointer  overflow-hidden"
        >
          <LinkedinFilled
            rev={{ className: "" }}
            className="text-primary text-[24px]"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, borderColor: "#0A66C2" }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => openInNewTab("https://hassanzaidi.hashnode.dev/")}
          className="flex items-center border-2 border-primary-content rounded-xl  py-3 px-3 cursor-pointer  overflow-hidden"
        >
          <MediumSquareFilled
            rev={{ className: "" }}
            className="text-primary text-[24px]"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, borderColor: "#0A66C2" }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => openInNewTab("sdsd")}
          className="flex items-center border-2 border-primary-content rounded-xl  py-3 px-3 cursor-pointer  overflow-hidden"
        >
          <GithubFilled
            rev={{ className: "" }}
            className="text-primary text-[24px]"
          />
        </motion.div>
      </div>
      <div className="flex flex-col justify-start items-start gap-2">
        {data.map((item) => (
          <motion.div
            key={item.label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigator.clipboard.writeText(item.value)}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center w-full border-2 border-primary-content text-sm rounded-xl gap-x-2  py-3 px-3 cursor-pointer hover:text-primary hover:border-primary overflow-hidden"
          >
            {item.icon}
            {item.value}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
