/* eslint-disable no-console */
import { createTheme, ThemeProvider, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { AiOutlineBell, AiOutlineShop } from "react-icons/ai";
import { FaBars, FaChevronDown, FaChevronUp, FaPlus } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { LuNewspaper } from "react-icons/lu";
import { MdOutlineLogout } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/basefood_logo.png";
import { base_food_white_logo } from "../../assets/images";
import { RootState } from "../../redux/store";
import LogoutModal from "../modals/Logout";
import ModeToggle from "./ModeToggle";
import { FaShoppingBasket } from "react-icons/fa";

const tooltipTheme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#1e293b",
          color: "#ffffff",
          fontSize: "14px",
          padding: "4px 12px",
          borderRadius: "4px",
          fontFamily: "Helvetica Neue",
        },
        arrow: {
          color: "#1e293b",
        },
      },
    },
  },
});

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
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  const toggleDashboards = () => setIsDashboardsOpen(!isDashboardsOpen);

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("body")?.classList.add("dark");
    } else {
      document.querySelector("body")?.classList.remove("dark");
    }
  }, [theme]);

  const handleLogoutClick = () => {
    setOpenLogoutModal(true);
  };

  const handleCloseModal = () => {
    setOpenLogoutModal(false);
  };

  const handleConfirmLogout = () => {
    console.log("User logged out");
    setOpenLogoutModal(false);
  };

  return (
    <>
      <div
        className={`fixed z-40 left-0 top-0 h-[100vh] ${
          isCollapsed
            ? "w-20 border-r border-bg-gray dark:border-[#404040]"
            : "w-[80%] sm:w-[40%] md:w-[30%] lg:w-[16%] md:transition-none transition-all duration-300"
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
                {/* <FiDatabase className="text-2xl text-blue-600 mr-2" />
                <span className="text-xl logo font-bold text-blue-600">
                  baseFood
                </span> */}
                <img
                  src={Logo}
                  alt="basefood"
                  className="w-[8rem] dark:hidden"
                />
                <img
                  src={base_food_white_logo}
                  alt="basefood"
                  className="w-[8rem] hidden dark:flex"
                />
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
                <ThemeProvider theme={tooltipTheme}>
                  <Tooltip
                    title={`${isCollapsed ? "Today's Market" : ""}`}
                    placement="right"
                  >
                    <li className="flex items-center px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                      <GoHome className="text-lg whitespace-nowrap text-gray-900 dark:text-white" />
                      {!isCollapsed && (
                        <span className="ml-4 text-gray-900 dark:text-white">
                          Today's Market
                        </span>
                      )}
                    </li>
                  </Tooltip>
                </ThemeProvider>
              </NavLink>
              <NavLink to="news">
                <ThemeProvider theme={tooltipTheme}>
                  <Tooltip
                    title={`${isCollapsed ? "Market News" : ""}`}
                    placement="right"
                  >
                    <li className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
                      <LuNewspaper className="text-lg text-gray-900 dark:text-white" />
                      {!isCollapsed && (
                        <span className="ml-4 text-gray-900 dark:text-white">
                          Market News
                        </span>
                      )}
                    </li>
                  </Tooltip>
                </ThemeProvider>
              </NavLink>
              <li>
                <ThemeProvider theme={tooltipTheme}>
                  <Tooltip
                    title={`${isCollapsed ? "My Dashboards" : ""}`}
                    placement="right"
                  >
                    <div
                      className="flex items-center justify-between px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded"
                      onClick={toggleDashboards}
                    >
                      <div className="flex items-center">
                        <RxDashboard className="text-md text-gray-900 dark:text-white" />
                        {!isCollapsed && (
                          <NavLink to={"/dashboard"}>
                            <span className="ml-4 text-gray-900 dark:text-white">
                              My Dashboards
                            </span>
                          </NavLink>
                        )}
                      </div>
                      {!isCollapsed && (
                        <span className="text-gray-900 dark:text-white">
                          {isDashboardsOpen ? (
                            <FaChevronUp className="text-sm" />
                          ) : (
                            <FaChevronDown className="text-sm" />
                          )}
                        </span>
                      )}
                    </div>
                  </Tooltip>
                </ThemeProvider>
                {!isCollapsed && isDashboardsOpen && (
                  <ul className="pl-10 flex flex-col space-y-2">
                    <NavLink to={"/dashboard1"}>
                      <li className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
                        <span className="text-gray-900 dark:text-white">
                          Dashboard 1
                        </span>
                      </li>
                    </NavLink>
                    {/* <li className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
                      <span className="text-gray-900 dark:text-white">
                        Dashboard 2
                      </span>
                    </li> */}
                    <NavLink to="/dashboards/new" className="flex items-center">
                      <li className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
                        <FaPlus className="text-gray-900 dark:text-white text-sm" />
                        <span className="ml-2 text-gray-900 dark:text-white">
                          New Dashboard
                        </span>
                      </li>
                    </NavLink>
                  </ul>
                )}
              </li>
              <ThemeProvider theme={tooltipTheme}>
                <Tooltip
                  title={`${isCollapsed ? "Notifications" : ""}`}
                  placement="right"
                >
                  <li className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
                    <AiOutlineBell className="text-md text-gray-900 dark:text-white" />
                    {!isCollapsed && (
                      <span className="ml-4 text-gray-900 dark:text-white">
                        Notifications
                      </span>
                    )}
                  </li>
                </Tooltip>
              </ThemeProvider>
              <a href="/buyers" target="_blank">
                <ThemeProvider theme={tooltipTheme}>
                  <Tooltip
                    title={`${isCollapsed ? "Analytics" : ""}`}
                    placement="right"
                  >
                    <li className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
                      <LiaMoneyCheckAltSolid className="text-md text-gray-900 dark:text-white" />
                      {!isCollapsed && (
                        <span className="ml-4 text-gray-900 dark:text-white">
                          Find buyers
                        </span>
                      )}
                    </li>
                  </Tooltip>
                </ThemeProvider>
              </a>
              <NavLink to="/products">
                <ThemeProvider theme={tooltipTheme}>
                  <Tooltip
                    title={`${isCollapsed ? "Analytics" : ""}`}
                    placement="right"
                  >
                    <li className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
                      <FaShoppingBasket className="text-md text-gray-900 dark:text-white" />
                      {!isCollapsed && (
                        <span className="ml-4 text-gray-900 dark:text-white">
                          Products
                        </span>
                      )}
                    </li>
                  </Tooltip>
                </ThemeProvider>
              </NavLink>
              <ThemeProvider theme={tooltipTheme}>
                <Tooltip
                  title={`${isCollapsed ? "Subscriptions" : ""}`}
                  placement="right"
                >
                  <li className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
                    <AiOutlineShop className="text-md text-gray-900 dark:text-white" />
                    {!isCollapsed && (
                      <span className="ml-4 text-gray-900 dark:text-white">
                        Subscriptions
                      </span>
                    )}
                  </li>
                </Tooltip>
              </ThemeProvider>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col space-y-2 py-4">
          <ThemeProvider theme={tooltipTheme}>
            <Tooltip title={`${isCollapsed ? "Logout" : ""}`} placement="right">
              <button
                onClick={handleLogoutClick}
                className="flex items-center py-2 px-4  text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              >
                <MdOutlineLogout className="text-md" />
                {!isCollapsed && <span className="ml-4">Logout</span>}
              </button>
            </Tooltip>
          </ThemeProvider>
          <ModeToggle
            sidebar={true}
            isCollapsed={isCollapsed}
            isDarkMode={theme === "dark"}
          />
        </div>
      </div>
      <LogoutModal
        open={openLogoutModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmLogout}
      />
    </>
  );
};

export default Sidebar;
