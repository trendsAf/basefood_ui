import { useState } from "react";
import { profile_image } from "../assets/images";
import { FaLocationDot } from "react-icons/fa6";
import ProfileInformation from "../components/Auth/ProfileInformation";
import CompanyInformation from "../components/Auth/CompanyInformation";
import { motion, AnimatePresence } from "framer-motion";
import { profileVariants } from "../utils/variants";

const ProfilePage = () => {
  const [activeComponent, setActiveComponent] = useState("ProfileInformation");

  return (
    <div className="flex min-h-[85vh] bg-gray-100 dark:bg-[#252525] p-5">
      <div className="w-1/4 bg-white dark:bg-[#151515] p-5 shadow-lg dark:shadow-none dark:border-r-4 dark:border-r-black/20">
        <div className="flex flex-col items-center mb-6">
          <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
            <img
              src={profile_image}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-semibold dark:text-white">
            Aphrodis Uwineza
          </h1>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mt-2">
            <FaLocationDot className="" />
            <span>Kigali, Rwanda</span>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <button
            className={`text-lg px-3 py-2 cursor-pointer ${
              activeComponent === "ProfileInformation"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveComponent("ProfileInformation")}
          >
            Profile Information
          </button>
          <button
            className={`text-lg px-3 py-2 cursor-pointer ${
              activeComponent === "CompanyInformation"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveComponent("CompanyInformation")}
          >
            Company Information
          </button>
        </div>
      </div>

      <div className="pages w-3/4 p-8 bg-white dark:bg-[#252525] shadow-lg dark:shadow-none">
        <AnimatePresence mode="wait">
          {activeComponent === "ProfileInformation" && (
            <motion.div
              key="ProfileInformation"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={profileVariants}
              transition={{ duration: 0.5 }}
            >
              <ProfileInformation />
            </motion.div>
          )}
          {activeComponent === "CompanyInformation" && (
            <motion.div
              key="CompanyInformation"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={profileVariants}
              transition={{ duration: 0.5 }}
            >
              <CompanyInformation />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProfilePage;
