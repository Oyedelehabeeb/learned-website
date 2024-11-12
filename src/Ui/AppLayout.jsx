import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="grid h-screen md:grid-rows-[auto_1fr_auto]">
      <header className="w-full h-16 fixed top-0 z-10">
        <Header />
      </header>

      <div className="pt-16 flex">
        {/* Sidebar with responsive width */}
        <aside className="h-[calc(100vh-4rem)] fixed top-16 left-0  md:w-64 bg-gray-800">
          <SideBar />
        </aside>

        {/* Main content with responsive margin */}
        <main className="flex-1 ml-16 md:ml-64 p-6 overflow-auto bg-beige text-darkGray">
          <Outlet />
        </main>
      </div>

      <footer className="text-white p-4 bg-darkGray text-center">
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;
