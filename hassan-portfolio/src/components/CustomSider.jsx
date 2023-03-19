import {
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
  TwitterOutlined,
  //   YoutubeOutlined,
} from "@ant-design/icons";
import ContactsList from "./ContactsList";
import JobCarousel from "./JobCarousel";
import MyImage from "../assets/hassan.jpg";
import MyImage1 from "../assets/hassan1.jpg";
import MyImage2 from "../assets/hassan2.jpg";
import { Layout, Image } from "antd";
const { Sider } = Layout;

export default function CustomSider() {
  return (
    <Sider
      style={{
        height: "100vh",
        position: "fixed",
        left: 0,
        width: "350px",
        minWidth: "350px",
      }}
      className="bg-neutral !w-[350px] !max-w-[350px] !flex-none overflow-auto scrollbar-thin scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-track-base-100 scrollbar-thumb-base-content"
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div className="flex flex-col gap-y-4 items-center py-10">
        <div className="avatar">
          <div className="w-56">
            <Image className="rounded-xl" src={MyImage1} />
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-neutral-content ">
          Hassan Zaidi
        </h1>
        <JobCarousel />
        <div className="flex items-center mt-4 bg-base-100 rounded-xl">
          <LinkedinOutlined className="text-[20px] p-4 text-accent cursor-pointer" />
          <GithubOutlined className="text-[20px] p-4 text-accent cursor-pointer" />
          <TwitterOutlined className="text-[20px] p-4 text-accent cursor-pointer" />
          <InstagramOutlined className="text-[20px] p-4 text-accent cursor-pointer" />
        </div>
        <ContactsList />
      </div>
    </Sider>
  );
}
