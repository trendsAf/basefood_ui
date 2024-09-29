import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 text-gray-900 dark:text-white"
      >
        <img
          src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5fGVufDB8fDB8fHww"
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span>John</span>
        <FaChevronDown />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#151515] rounded-lg shadow-lg z-10">
          <Link
            to="/profile"
            className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-[#252525]"
          >
            Profile
          </Link>
          <Link
            to="/settings"
            className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Settings
          </Link>
          <Link
            to="/subscriptions"
            className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Subscriptions
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
