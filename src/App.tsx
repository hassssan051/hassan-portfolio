import CustomFooter from "./components/CustomFooter";
import { useState } from "react";
import CustomHeader from "./components/CustomHeader";
import CustomSider from "./components/CustomSider";
import { Page } from "./types/common";
import { pages } from "./utils/pages";

function App() {
  const [selectedPage, setSelectedPage] = useState<Page>(pages[0]);

  return (
    <main className="min-h-screen scrollbar-hidden">
      <CustomSider />
      <div className="bg-base-100 scrollbar-hidden" style={{ marginLeft: 350 }}>
        <CustomHeader
          pages={pages}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <div style={{ margin: "24px 16px 0" }}>
          <div
            className="bg-base-100 scrollbar-hidden"
            style={{ padding: 24, minHeight: 360 }}
          >
            <div className="bg-neutral rounded-lg p-8 px-10 scrollbar-hidden">
              {selectedPage?.component}
            </div>
          </div>
        </div>
        <CustomFooter />
      </div>
    </main>
  );
}

export default App;
