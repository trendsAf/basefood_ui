import Sidebar from "../common/Sidebar";
import Header from "../common/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="bg-bg-gray dark:bg-secondary-black flex min-h-screen relative w-[100%]">
      <Sidebar />
      <div
        className={` overflow-x-hidden
           flex flex-col relative w-[90%] md:w-[100%] gap-2`}
      >
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
