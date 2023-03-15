import Footer from "./components/Footer";
import Logo from "./components/Logo";
import MyImage from "./assets/hassan.jpg";
import NavbarDropdown from "./components/NavbarDropdown";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import ContactsList from "./components/ContactsList";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="">
        <nav className="mx-auto p-11 px-20 flex justify-between lg:justify-center items-center">
          <Logo />
          <NavbarDropdown />
        </nav>
      </header>
      <main className="flex-grow bg-base-100 overflow-y-auto">
        <div className="grid grid-cols-12 md:gap-10 justify-between ">
          <div className="col-span-12 lg:col-span-4 lg:h-screen lg:sticky top-44 px-10 py-4 mt-32">
            <div className="w-full mb-6 lg:mb-0 mx-auto relative text-center rounded-md  p-6 bg-neutral">
              <div className="avatar absolute left-[50%] transform -translate-x-[50%] drop-shadow-xl mx-auto -mt-[140px] z-50">
                <div className="w-60 rounded-[20px] ">
                  <img width="240" src={MyImage} />
                </div>
              </div>

              <div className="pt-[100px] pb-8 flex flex-col justify-center items-center">
                <h1 className="text-3xl font-semibold text-neutral-content mt-6">
                  Hassan Zaidi
                </h1>
                <div className="bg-base-100 py-4 px-2 w-2/4 text-base-content uppercase mt-4 text-center rounded-xl">
                  Everything
                </div>
                <div className="flex gap-3 justify-between px-6 mt-4">
                  <div className="p-4 bg-base-100 rounded-lg">
                    <AcademicCapIcon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="p-4 bg-base-100 rounded-lg">
                    <AcademicCapIcon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="p-4 bg-base-100 rounded-lg">
                    <AcademicCapIcon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="p-4 bg-base-100 rounded-lg">
                    <AcademicCapIcon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <ContactsList />
              </div>
            </div>
          </div>
          <div className="col-span-4"></div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
