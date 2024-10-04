import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ProfileModal from "./ProfileModal";
import { AnimatePresence, motion } from "framer-motion";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 text-gray-900 dark:text-white relative z-50"
      >
        <img
          src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3V5fGVufDB8fDB8fHww"
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span>John</span>
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
