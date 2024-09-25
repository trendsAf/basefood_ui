import { useState } from "react";
import { MdVerified } from "react-icons/md";
import BuyersModal from "./BuyersModal";

interface DashboardBuyersCardProps {
  companyName: string;
  countryFlag: string;
  countryName: string;
  // profile: string;
  companyImage: string;
  description: string;
  // name: string;
}

const DashboardBuyersCard = ({
  companyName,
  companyImage,
  countryName,
  countryFlag,
  // name,
  // profile,
  description,
}: DashboardBuyersCardProps) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <div className="flex flex-col p-4 border dark:border-[#252525] rounded shadow-sm bg-white dark:bg-[#252525]">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-xs logo text-gray-800 dark:text-gray-200">
                  {companyName}
                </h1>
                <MdVerified className="text-blue-500 text-lg md:text-sm" />
              </div>
              <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <span className="text-sm">{countryFlag}</span>
                <span className="text-sm">{countryName}</span>
              </div>
            </div>
            <img
              src={companyImage}
              alt="Company Logo"
              className="w-16 h-10 md:w-12 md:h-6 object-cover border"
            />
          </div>
          <p className="text-[8px] md:text-[12px] text-black/70 dark:text-gray-300">
            {description}
          </p>
          {/* <div className="flex items-center gap-2 mt-2">
            <img
              src={profile}
              alt="Profile"
              className="w-5 h-5 md:w-6 md:h-6 object-cover rounded-full"
            />
            <p className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200">
              {name}
            </p>
          </div> */}
          <div>
            <button
              className=" text-sm px-4 py-1 bg-[#e6e7ea] text-black hover:bg-[#d6d7da] dark:bg-[#e6e7ea]/50 dark:text-white transition"
              onClick={() => toggleModal()}
            >
              Contact Now
            </button>
          </div>
        </div>
      </div>
      {openModal && <BuyersModal toggleModal={toggleModal} />}
    </>
  );
};

export default DashboardBuyersCard;
