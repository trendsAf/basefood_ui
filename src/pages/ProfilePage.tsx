import { useState } from "react";
import { profile_image } from "../assets/images";
import { FaLocationDot } from "react-icons/fa6";
import ProfileInformation from "../components/Auth/ProfileInformation";
import CompanyInformation from "../components/Auth/CompanyInformation";

const ProfilePage = () => {
  const [activeComponent, setActiveComponent] = useState("ProfileInformation");

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/4 bg-white p-5 shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
            <img
              src={profile_image}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-semibold">Aphrodis Uwineza</h1>
          <div className="flex items-center gap-2 text-gray-600 mt-2">
            <FaLocationDot className="text-red-500" />
            <span>Kigali, Rwanda</span>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <h1
            className={`text-lg px-3 py-2 rounded-lg cursor-pointer ${
              activeComponent === "ProfileInformation"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveComponent("ProfileInformation")}
          >
            Profile Information
          </h1>
          <h1
            className={`text-lg px-3 py-2 rounded-lg cursor-pointer ${
              activeComponent === "CompanyInformation"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveComponent("CompanyInformation")}
          >
            Company Information
          </h1>
        </div>
      </div>

      <div className="pages w-3/4 p-8 bg-white shadow-lg">
        {activeComponent === "ProfileInformation" && <ProfileInformation />}
        {activeComponent === "CompanyInformation" && <CompanyInformation />}
      </div>
    </div>
  );
};

export default ProfilePage;
