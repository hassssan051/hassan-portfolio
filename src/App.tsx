import CustomFooter from "./components/CustomFooter";
import { useState } from "react";
import CustomHeader from "./components/CustomHeader";
import CustomSider from "./components/CustomSider";
import { Page } from "./types/common";
// import { pages } from "./utils/pages";
import { useLocation, useRoutes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  // const [selectedPage, setSelectedPage] = useState<Page>(pages[0]);
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/projects", element: <Projects /> },
    { path: "/resume", element: <Resume /> },
    { path: "/blog", element: <Blog /> },
    { path: "/contact", element: <Contact /> },
  ]);

  const location = useLocation();
  if (!element) return null;

  return (
    <>
      {/* <CustomSider /> */}
      <CustomHeader
        pages={pages}
        // selectedPage={selectedPage}
        // setSelectedPage={setSelectedPage}
      />
      <main className="min-h-screen">
        <div className="bg-base-100 ">
          <div style={{ margin: "24px 16px 0" }}>
            <div
              className="bg-base-100 "
              style={{ padding: 24, minHeight: 360 }}
            >
              <div className="bg-neutral rounded-lg p-8 px-10 ">
                {selectedPage?.component}
              </div>
            </div>
          </div>
        </div>
      </main>
      <CustomFooter />
    </>
  );
}

export default App;
