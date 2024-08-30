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
import { Tooltip } from "@mui/material";
import ModeToggle from "./ModeToggle";
import { RxDashboard } from "react-icons/rx";
import { LuNewspaper } from "react-icons/lu";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../redux/store";

interface SidebarProps {
  isSidebarVisible: boolean;
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

const Sidebar = ({
  isSidebarVisible,
  isCollapsed,
  setIsCollapsed,
}: SidebarProps) => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const [isDashboardsOpen, setIsDashboardsOpen] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  const toggleDashboards = () => setIsDashboardsOpen(!isDashboardsOpen);

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("body")?.classList.add("dark");
    } else {
      document.querySelector("body")?.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div
        className={`fixed z-40 left-0 top-0 h-[100vh] ${
          isCollapsed
            ? "w-20 border-r border-bg-gray dark:border-[#404040]"
            : "w-[80%] sm:w-[40%] md:w-[30%] lg:w-[20%] md:transition-none transition-all duration-300"
        } border-r border-bg-gray dark:border-[#404040] bg-white px-4 flex flex-col  justify-between dark:bg-black transform ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div>
          <div
            className={`flex items-center justify-between px-4 py-6 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            {!isCollapsed && (
              <div className="flex items-center">
                <FiDatabase className="text-2xl text-gray-900 dark:text-white mr-2" />
                <span className="text-xl logo font-bold dark:text-white">
                  baseFood
                </span>
              </div>
            )}
            <button
              onClick={toggleCollapse}
              className="hidden md:block focus:outline-none"
            >
              <FaBars className="text-gray-900 dark:text-white" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col justify-center">
            <ul className="flex flex-col space-y-4">
              <NavLink
                to="/"
                //@ts-ignore
                activeclassname="active"
              >
                <Tooltip
                  title={`${isCollapsed ? "Today's Market" : ""}`}
                  placement="right"
                >
                  <li className="flex items-center px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                    <GoHome className="text-xl text-gray-900 dark:text-white" />
                    {!isCollapsed && (
                      <span className="ml-4 text-gray-900 dark:text-white">
                        Today's Market
                      </span>
                    )}
                  </li>
                </Tooltip>
              </NavLink>
              <NavLink to="news">
                <Tooltip
                  title={`${isCollapsed ? "Market News" : ""}`}
                  placement="right"
                >
                  <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
                    <LuNewspaper className="text-xl text-gray-900 dark:text-white" />
                    {!isCollapsed && (
                      <span className="ml-4 text-gray-900 dark:text-white">
                        Market News
                      </span>
                    )}
                  </li>
                </Tooltip>
              </NavLink>
              <li>
                <Tooltip
                  title={`${isCollapsed ? "My Dashboards" : ""}`}
                  placement="right"
                >
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
                </Tooltip>
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
              <Tooltip
                title={`${isCollapsed ? "Notifications" : ""}`}
                placement="right"
              >
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
                  <AiOutlineBell className="text-xl text-gray-900 dark:text-white" />
                  {!isCollapsed && (
                    <span className="ml-4 text-gray-900 dark:text-white">
                      Notifications
                    </span>
                  )}
                </li>
              </Tooltip>
              <Tooltip
                title={`${isCollapsed ? "Analytics" : ""}`}
                placement="right"
              >
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
                  <AiOutlineClockCircle className="text-xl text-gray-900 dark:text-white" />
                  {!isCollapsed && (
                    <span className="ml-4 text-gray-900 dark:text-white">
                      Analytics
                    </span>
                  )}
                </li>
              </Tooltip>
              <Tooltip
                title={`${isCollapsed ? "Subscriptions" : ""}`}
                placement="right"
              >
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
                  <AiOutlineShop className="text-xl text-gray-900 dark:text-white" />
                  {!isCollapsed && (
                    <span className="ml-4 text-gray-900 dark:text-white">
                      Subscriptions
                    </span>
                  )}
                </li>
              </Tooltip>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col space-y-4 py-4">
          <Tooltip title={`${isCollapsed ? "Logout" : ""}`} placement="right">
            <button className="flex items-center py-2 px-4  text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
              <MdOutlineLogout className="text-xl" />
              {!isCollapsed && <span className="ml-4">Logout</span>}
            </button>
          </Tooltip>
          <ModeToggle isCollapsed={isCollapsed} isDarkMode={theme === "dark"} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
