import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { profileModalVariants } from "../../utils/variants";

interface ProfileModalProps {
  toggleDropdown: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ toggleDropdown }) => {
  return (
    <div className="w-full h-screen inset-0 fixed " onClick={toggleDropdown}>
      <motion.div
        className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#353535] shadow-lg rounded-lg z-50"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={profileModalVariants}
      >
        <div className="absolute right-5 top-16 mt-2 w-48 bg-white dark:bg-[#252525] rounded-lg shadow-lg z-10">
          <Link
            to="/profile"
            className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={toggleDropdown}
          >
            Profile
          </Link>
          <Link
            to="/settings"
            className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={toggleDropdown}
          >
            Settings
          </Link>
          <Link
            to="/subscriptions"
            className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={toggleDropdown}
          >
            Subscriptions
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={toggleDropdown}
          >
            Logout
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileModal;
