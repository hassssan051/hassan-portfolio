import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import ContactsList from "./ContactsList";
import JobCarousel from "./JobCarousel";
import { Hassan2 } from "../assets";
import {
  ReactIcon,
  DjangoIcon,
  FlaskIcon,
  MachineLearningIcon,
  NodeIcon,
  PythonIcon,
  TensorFlowIcon,
  WebDevIcon,
} from "../assets/Icons";
import { openInNewTab } from "../utils/utils";
import { IconShow } from "./IconShow";
import React from "react";

export default function CustomSider() {
  return (
    <div
      style={{
        height: "100vh",
        position: "fixed",
        left: 0,
        width: "350px",
        minWidth: "350px",
      }}
      className="bg-neutral !w-[350px] !max-w-[350px] !flex-none overflow-auto scrollbar-thin scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-track-base-100 scrollbar-thumb-base-content"
    >
      <div className="flex flex-col gap-y-4 items-center py-10">
        <div className="avatar">
          <div className="w-56">
            <img className="rounded-xl object-contain" src={Hassan2} />
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-neutral-content ">
          Hassan Zaidi
        </h1>

        <ContactsList />

        {/* <div className="flex items-center mt-4 bg-base-100 rounded-xl">
          <Tooltip title="LinkedIn">
            <LinkedinOutlined
              className="text-[20px] p-4 text-accent cursor-pointer"
              onClick={() =>
                openInNewTab(
                  "https://www.linkedin.com/in/hassan-zaidi-00487a191/"
                )
              }
            />
          </Tooltip>
          <Tooltip title="GitHub">
            <GithubOutlined
              className="text-[20px] p-4 text-accent cursor-pointer"
              onClick={() =>
                openInNewTab("https://github.com/hasssan051?tab=repositories")
              }
            />
          </Tooltip>
          <Tooltip title="Twitter">
            <TwitterOutlined
              className="text-[20px] p-4 text-accent cursor-pointer"
              onClick={() => openInNewTab("https://twitter.com/Hassanzaidi247")}
            />
          </Tooltip>
          <Tooltip title="Have better things to do, just put it here because 4 icons looked better">
            <InstagramOutlined className="text-[20px] p-4 text-accent cursor-pointer" />
          </Tooltip>
        </div>

        <div className="flex items-center mt-4 bg-base-100 rounded-xl">
          <Popover
            className="bg-base-100 my-popover"
            popoverClassName="my-popover"
            content={
              <Paragraph className="text-base-100 " copyable>
                +923350552250
              </Paragraph>
            }
            title={<span className="text-base-100 text-xl">Phone</span>}
          >
            <PhoneFilled className="text-[20px] p-4 text-primary cursor-pointer" />
          </Popover>
          <Popover
            className="bg-base-100 my-popover"
            popoverClassName="my-popover"
            content={
              <Paragraph className="text-base-100 " copyable>
                hassanzaidi4@gmail.com
              </Paragraph>
            }
            title={<span className="text-base-100 text-xl">Email</span>}
          >
            <MailFilled className="text-[20px] p-4 text-primary cursor-pointer" />
          </Popover>
          <Popover
            className="bg-base-100 my-popover"
            popoverClassName="my-popover"
            content={
              <Paragraph className="text-base-100 ">Feb 4, 2001</Paragraph>
            }
            title={<span className="text-base-100 text-xl">D.O.B</span>}
          >
            <CalendarFilled className="text-[20px] p-4 text-primary cursor-pointer" />
          </Popover>
          <Popover
            className="bg-base-100 my-popover"
            popoverClassName="my-popover"
            content={
              <Paragraph className="text-base-100 ">
                Islamabad, Pakistan
              </Paragraph>
            }
            title={<span className="text-base-100 text-xl">Location</span>}
          >
            <span className="p-4 cursor-pointer">
              <MapPinIcon className="h-4 w-4 text-primary" />
            </span>
          </Popover>
        </div> */}
        <div className="">
          {/* <ConstantlyMovingCarousel images={[<ReactIcon />, <DjangoIcon />, <FlaskIcon />, <MachineLearningIcon />, <NodeIcon />, <PythonIcon />, <TensorFlowIcon />, <WebDevIcon />]} /> */}
        </div>
        {/* <ContactsList /> */}
      </div>
    </div>
  );
}
