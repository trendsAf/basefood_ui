import { LuMoon } from "react-icons/lu";
import { BsSun } from "react-icons/bs";

interface ModeToggleProps {
  isCollapsed: boolean;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ModeToggle = ({
  isCollapsed,
  isDarkMode,
  toggleDarkMode,
}: ModeToggleProps) => {
  return (
    <div
      className={`flex items-center ${isCollapsed ? "justify-center" : "justify-between px-4"} w-full py-4`}
    >
      {!isCollapsed && (
        <>
          <BsSun
            className={`text-2xl ${isDarkMode ? "text-gray-400" : "text-yellow-500"}`}
          />
          <span
            className={`ml-2 font-medium ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}
          >
            {isDarkMode ? "Dark mode" : "Light mode"}
          </span>
        </>
      )}
      <div
        onClick={toggleDarkMode}
        className={`ml-2 relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors ${
          isDarkMode ? "bg-gray-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-5 w-5 rounded-full bg-white transform transition-transform ${
            isDarkMode ? "translate-x-5" : "translate-x-1"
          }`}
        >
          {isDarkMode ? (
            <LuMoon className="absolute inset-0 m-auto text-black" />
          ) : (
            <BsSun className="absolute inset-0 m-auto text-yellow-500" />
          )}
        </span>
      </div>
    </div>
  );
};

export default ModeToggle;
