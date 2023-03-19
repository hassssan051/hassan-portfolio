import CustomFooter from "./components/CustomFooter";
import { useState } from "react";
import { HomeIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import { Layout } from "antd";
import { ContactsOutlined, FolderOutlined } from "@ant-design/icons";
import Home from "./pages/Home";
import CustomHeader from "./components/CustomHeader";
import CustomSider from "./components/CustomSider";

const { Content } = Layout;

function App() {
  const [selectedPage, setSelectedPage] = useState({
    title: "Home",
    icon: <HomeIcon className="h-5 w-5" />,
    component: <Home />,
  });
  const pages = [
    {
      title: "Home",
      icon: <HomeIcon className="h-5 w-5" />,
      component: <Home />,
    },
    {
      title: "Projects",
      icon: <FolderOutlined className="text-[20px]" />,
      component: <Home />,
    },
    {
      title: "Resume",
      icon: <DocumentTextIcon className="h-5 w-5" />,
      component: <Home />,
    },
    {
      title: "Contact",
      icon: <ContactsOutlined className="text-[20px]" />,
      component: <Home />,
    },
  ];
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <CustomSider />
      <Layout className="site-layout bg-base-100" style={{ marginLeft: 350 }}>
        <CustomHeader
          pages={pages}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <div className="bg-base-100" style={{ padding: 24, minHeight: 360 }}>
            <div className="bg-neutral rounded-lg p-8 px-10">
              {selectedPage?.component}
            </div>
          </div>
        </Content>
        <CustomFooter />
      </Layout>
    </Layout>
  );
}

export default App;
