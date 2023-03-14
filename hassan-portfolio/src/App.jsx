import Footer from "./components/Footer";
import Logo from "./components/Logo";
import MyImage from "./assets/hassan.jpg";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="">
        <nav className="mx-auto p-11 px-20 flex justify-between items-center">
          <Logo />
        </nav>
      </header>
      <main className="flex-grow bg-base-100 overflow-y-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4 lg:h-screen lg:sticky top-44 px-10 py-4 mt-32">
            <div className="w-full mb-6 lg:mb-0 mx-auto relative text-center rounded-md  p-6 bg-neutral">
              <img
                width="240"
                src={MyImage}
                className="w-[240px] absolute left-[50%] h-[] transform -translate-x-[50%]  drop-shadow-xl mx-auto rounded-[20px] -mt-[140px] z-50"
              />
              <div className="pt-[100px] pb-8">
                <h1 className="text-3xl font-semibold text-neutral-content mt-6">
                  Hassan Zaidi
                </h1>
                
              </div>
            </div>
          </div>
          <div className="col-span-4"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
