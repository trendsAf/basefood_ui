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
import { useRole } from "../../context/RoleProvider";

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
  toggleSidebar: () => void;
}

const Sidebar = ({
  isSidebarVisible,
  isCollapsed,
  setIsCollapsed,
  toggleSidebar,
}: SidebarProps) => {
  const handleItemClick = () => {
    // Toggle sidebar visibility on item click
    if (isSidebarVisible) {
      toggleSidebar();
    }
  };
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

  const { isProducer } = useRole();

  return (
    <>
      <div
        className={`fixed z-40 left-0 top-0 h-[100vh] ${
          isCollapsed
            ? "w-20 border-r border-bg-gray dark:border-[#404040]"
            : "w-[80%] sm:w-[40%] md:w-[60%] lg:w-[16%] md:transition-none transition-all duration-300"
        } border-r border-bg-gray dark:border-[#404040] bg-white px-4 lg:px-2 2xl:px-4 flex flex-col  justify-between dark:bg-black transform ${
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
            <ul className="flex flex-col space-y-2 text-sm md:text-2xl lg:text-[12px] xl:text-sm  2xl:text-lg">
              <NavLink to="/" onClick={handleItemClick}>
                <li className="flex items-center px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                  <GoHome className="lg:text-sm xl:text-lg text-gray-900 dark:text-white" />
                  {!isCollapsed && (
                    <span className="ml-2 xl:ml-4 text-gray-900 dark:text-white">
                      Today's Market
                    </span>
                  )}
                </li>
              </NavLink>
              <NavLink to="/news" onClick={handleItemClick}>
                <li className="flex items-center px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                  <LuNewspaper className="lg:text-sm xl:text-lg text-gray-900 dark:text-white" />
                  {!isCollapsed && (
                    <span className="ml-2 xl:ml-4 text-gray-900 dark:text-white">
                      Market News
                    </span>
                  )}
                </li>
              </NavLink>
              <li>
                <ThemeProvider theme={tooltipTheme}>
                  <Tooltip
                    title={`${isCollapsed ? "My Dashboards" : ""}`}
                    placement="right"
                  >
                    <div
                      className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded"
                      onClick={toggleDashboards}
                    >
                      <div className="flex items-center">
                        <RxDashboard className="lg:text-sm xl:text-lg text-gray-900 dark:text-white" />
                        {!isCollapsed && (
                          <NavLink to={"/dashboard"} onClick={handleItemClick}>
                            <span className="ml-2 xl:ml-4 text-gray-900 dark:text-white">
                              My Dashboards
                            </span>
                          </NavLink>
                        )}
                      </div>
                      {!isCollapsed && (
                        <span className="text-gray-900 dark:text-white lg:ml-2 xl:ml-2">
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
                  <ul className="xl:pl-10 lg:pl-4 pl-6 flex flex-col space-y-2">
                    <NavLink to={"/dashboard1"} onClick={handleItemClick}>
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
                    <NavLink
                      to="/dashboards/new"
                      className="flex items-center"
                      onClick={handleItemClick}
                    >
                      <li className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
                        <FaPlus className="text-gray-900 dark:text-white text-sm" />
                        <span className="xl:ml-2 lg:ml-1 ml-2 text-gray-900 dark:text-white">
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
                  <li
                    className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded"
                    onClick={handleItemClick}
                  >
                    <AiOutlineBell className="lg:text-sm xl:text-lg text-gray-900 dark:text-white" />
                    {!isCollapsed && (
                      <span className="ml-2 xl:ml-4 text-gray-900 dark:text-white">
                        Notifications
                      </span>
                    )}
                  </li>
                </Tooltip>
              </ThemeProvider>
              {isProducer("producer") ? (
                <a href="/buyers" target="_blank">
                  <ThemeProvider theme={tooltipTheme}>
                    <Tooltip
                      title={`${isCollapsed ? "Analytics" : ""}`}
                      placement="right"
                    >
                      <li
                        className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded"
                        onClick={handleItemClick}
                      >
                        <LiaMoneyCheckAltSolid className="lg:text-sm xl:text-lg text-gray-900 dark:text-white" />
                        {!isCollapsed && (
                          <span className="ml-2 xl:ml-4 text-gray-900 dark:text-white">
                            Find buyers
                          </span>
                        )}
                      </li>
                    </Tooltip>
                  </ThemeProvider>
                </a>
              ) : null}
              <NavLink to="/pricing" onClick={handleItemClick}>
                <ThemeProvider theme={tooltipTheme}>
                  <Tooltip
                    title={`${isCollapsed ? "Analytics" : ""}`}
                    placement="right"
                  >
                    <li className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
                      <FaShoppingBasket className="lg:text-sm xl:text-lg text-gray-900 dark:text-white" />
                      {!isCollapsed && (
                        <span className="ml-2 xl:ml-4 text-gray-900 dark:text-white">
                          pricing
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
                  <li
                    className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded"
                    onClick={handleItemClick}
                  >
                    <AiOutlineShop className="lg:text-sm xl:text-lg text-gray-900 dark:text-white" />
                    {!isCollapsed && (
                      <span className="ml-2 xl:ml-4 text-gray-900 dark:text-white">
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
                className="flex items-center py-2 pl-2 xl:px-4  text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              >
                <MdOutlineLogout className="lg:text-base md:text-2xl xl:text-lg" />
                {!isCollapsed && (
                  <span
                    className="ml-1 text-sm xl:ml-4 md:text-2xl"
                    onClick={handleItemClick}
                  >
                    Logout
                  </span>
                )}
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
