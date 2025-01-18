import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ProfileModal from "./ProfileModal";
import { AnimatePresence, motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import Cookies from "js-cookie";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userInfo = Cookies?.get("userInfo") as any;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 text-gray-900 dark:text-white relative z-50"
      >
        <CgProfile className="text-3xl" />
        <span>{userInfo?.firstname}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <FaChevronDown />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && <ProfileModal toggleDropdown={toggleDropdown} />}
      </AnimatePresence>
    </div>
  );
};

export default ProfileDropdown;
