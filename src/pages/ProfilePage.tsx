import { useState } from "react";
// import { profile_image } from "../assets/images";
import { FaLocationDot } from "react-icons/fa6";
import ProfileInformation from "../components/Auth/ProfileInformation";
import CompanyInformation from "../components/Auth/CompanyInformation";
import { motion, AnimatePresence } from "framer-motion";
import { profileVariants } from "../utils/variants";
import { CgProfile } from "react-icons/cg";
import { FaBriefcase } from "react-icons/fa";
import Cookies from "js-cookie";

const ProfilePage = () => {
  const [activeComponent, setActiveComponent] = useState("ProfileInformation");
  const userInfo = JSON.parse(Cookies.get("userInfo") as string) || undefined;

  return (
    <div className="flex min-h-[85vh] flex-col md:flex-row bg-gray-100 dark:bg-[#252525] px-2 py-5">
      <div className="w-full md:w-1/4 bg-white dark:bg-[#151515] py-5 px-2 shadow-lg dark:shadow-none dark:border-r-4 dark:border-r-black/20">
        <div className="flex flex-col items-center mb-6">
          {/* <div className="w-24 h-24 rounded-full bg-red overflow-hidden mb-4"> */}
          <CgProfile className="text-7xl z-10  dark:text-white" />
          {/* </div> */}
          <h1 className="text-xl mt-4 font-semibold dark:text-white whitespace-nowrap">
            {userInfo?.firstname + " " + userInfo.lastname}
          </h1>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mt-2">
            <FaLocationDot className="" />
            <span>Kigali, Rwanda</span>
          </div>
        </div>

        <div className="flex flex-col px-4 justify-center w-full items-center mx-auto gap-2">
          <button
            className={`text-lg px-3 flex items-center self-start gap-2 cursor-pointer ${
              activeComponent === "ProfileInformation"
                ? " text-brand-blue"
                : " text-gray-700"
            }`}
            onClick={() => setActiveComponent("ProfileInformation")}
          >
            <CgProfile /> Profile
          </button>
          <button
            className={`text-lg px-3 flex items-center self-start gap-2 cursor-pointer ${
              activeComponent === "CompanyInformation"
                ? "text-brand-blue"
                : " text-gray-700"
            }`}
            onClick={() => setActiveComponent("CompanyInformation")}
          >
            <FaBriefcase /> Company
          </button>
        </div>
      </div>

      <div className="pages w-full md:w-3/4 py-8 bg-white dark:bg-[#252525] shadow-lg dark:shadow-none">
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
