import CustomFooter from "./components/CustomFooter";
import Logo from "./components/Logo";
import MyImage from "./assets/hassan.jpg";
import NavbarDropdown from "./components/NavbarDropdown";
import {
  AcademicCapIcon,
  HomeModernIcon,
  HomeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import ContactsList from "./components/ContactsList";
import { Layout, Menu, Space } from "antd";
import { ContactsOutlined } from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

function App() {
  return (
    <Layout hasSider>
      <Sider
        className="overflow-auto h-screen fixed left-0 top-0 bottom-0 bg-neutral !w-[300px] !max-w-[300px] !flex-none"
        breakpoint="lg"
        collapsedWidth="0"
      ></Sider>
      <Layout className="site-layout bg-base-100">
        <Header className="p-8 px-10 bg-base-100 flex justify-between h-44 items-center leading-none">
          <Logo />
          <div className="bg-neutral flex gap-x-7 items-center justify-between p-7 px-8 rounded-xl mr-15">
            <div className="bg-base-100 rounded-xl flex flex-col gap-y-1 items-center justify-center hover:bg-primary text-base-content p-3 hover:text-primary-content cursor-pointer">
              <HomeIcon className="h-5 w-5" />
              <div className="">Home</div>
            </div>
            <div className="bg-base-100 rounded-xl flex flex-col gap-y-1 items-center justify-center hover:bg-primary text-base-content p-3 hover:text-primary-content cursor-pointer">
              <DocumentTextIcon className="h-5 w-5" />
              <div className="">Resume</div>
            </div>
            <div className="bg-base-100 rounded-xl flex flex-col gap-y-1 items-center justify-center hover:bg-primary text-base-content p-3 hover:text-primary-content cursor-pointer">
              <ContactsOutlined className="text-[20px]" />
              <div className="">Contact</div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div className="p-[24px] text-center"></div>
        </Content>
        <CustomFooter />
      </Layout>
    </Layout>
  );
}

export default App;
