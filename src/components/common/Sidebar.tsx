import { useEffect, useState } from "react";
import { FaBars, FaPlus, FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  AiOutlineBell,
  AiOutlineClockCircle,
  AiOutlineShop,
} from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { FiDatabase } from "react-icons/fi";
import { MdOutlineLogout } from "react-icons/md";
import ModeToggle from "./ModeToggle";
import { RxDashboard } from "react-icons/rx";
import { LuNewspaper } from "react-icons/lu";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDashboardsOpen, setIsDashboardsOpen] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleDashboards = () => setIsDashboardsOpen(!isDashboardsOpen);

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector("body")?.classList.add("dark");
    } else {
      document.querySelector("body")?.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`${isCollapsed ? "w-20" : "w-[20%]"} h-screen px-4 flex flex-col border-r dark:border-gray-500 justify-between bg-white dark:bg-black transition-all duration-300`}
    >
      <div>
        <div
          className={`flex items-center justify-between px-4 py-6 ${isCollapsed ? "justify-center" : ""}`}
        >
          {!isCollapsed && (
            <div className="flex items-center">
              <FiDatabase className="text-2xl text-gray-900 dark:text-white mr-2" />
              <span className="text-xl font-bold dark:text-white">
                baseFood
              </span>
            </div>
          )}
          <button onClick={toggleCollapse} className="focus:outline-none">
            <FaBars className="text-gray-900 dark:text-white" />
          </button>
        </div>

        <nav className="mt-6 flex flex-col justify-center">
          <ul className="flex flex-col space-y-4">
            <li className="flex items-center px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
              <GoHome className="text-xl text-gray-900 dark:text-white" />
              {!isCollapsed && (
                <span className="ml-4 text-gray-900 dark:text-white">
                  Today's Market
                </span>
              )}
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
              <LuNewspaper className="text-xl text-gray-900 dark:text-white" />
              {!isCollapsed && (
                <span className="ml-4 text-gray-900 dark:text-white">
                  Market News
                </span>
              )}
            </li>
            <li>
              <div
                className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded"
                onClick={toggleDashboards}
              >
                <div className="flex items-center">
                  <RxDashboard className="text-xl text-gray-900 dark:text-white" />
                  {!isCollapsed && (
                    <span className="ml-4 text-gray-900 dark:text-white">
                      My Dashboards
                    </span>
                  )}
                </div>
                {!isCollapsed && (
                  <span className="text-gray-900 dark:text-white">
                    {isDashboardsOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                )}
              </div>
              {!isCollapsed && isDashboardsOpen && (
                <ul className="pl-10 flex flex-col space-y-2">
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
                    <span className="text-gray-900 dark:text-white">
                      Dashboard 1
                    </span>
                  </li>
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
                    <span className="text-gray-900 dark:text-white">
                      Dashboard 2
                    </span>
                  </li>
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
                    <FaPlus className="text-gray-900 dark:text-white text-sm" />
                    <span className="ml-2 text-gray-900 dark:text-white">
                      New Dashboard
                    </span>
                  </li>
                </ul>
              )}
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
              <AiOutlineBell className="text-xl text-gray-900 dark:text-white" />
              {!isCollapsed && (
                <span className="ml-4 text-gray-900 dark:text-white">
                  Notifications
                </span>
              )}
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
              <AiOutlineClockCircle className="text-xl text-gray-900 dark:text-white" />
              {!isCollapsed && (
                <span className="ml-4 text-gray-900 dark:text-white">
                  Analytics
                </span>
              )}
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
              <AiOutlineShop className="text-xl text-gray-900 dark:text-white" />
              {!isCollapsed && (
                <span className="ml-4 text-gray-900 dark:text-white">
                  Subscriptions
                </span>
              )}
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col space-y-4 py-4">
        <button className="flex items-center py-2 px-4  text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
          <MdOutlineLogout className="text-xl" />
          {!isCollapsed && <span className="ml-4">Logout</span>}
        </button>
        <ModeToggle
          isCollapsed={isCollapsed}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
    </div>
  );
};

export default Sidebar;
