import { useState } from "react";
import { MdVerified } from "react-icons/md";
import BuyersModal from "./BuyersModal";

interface BuyersCardProps {
  companyName: string;
  countryFlag: string;
  countryName: string;
  // profile: string;
  companyImage: string;
  description: string;
  // name: string;
}

const BuyersCard = ({
  companyName,
  companyImage,
  countryName,
  countryFlag,
  // name,
  // profile,
  description,
}: BuyersCardProps) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div className="flex flex-col p-4 border dark:border-[#252525] rounded shadow-sm bg-white dark:bg-[#252525]">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="hidden 2xl:flex 2xl:text-sm logo text-gray-800 dark:text-gray-200">
                  {companyName}
                </h1>
                <h1 className="2xl:hidden 2xl:text-sm logo text-gray-800 dark:text-gray-200">
                  {companyName.length > 25
                    ? `${companyName.slice(0, 25)}... `
                    : companyName}
                </h1>
                <MdVerified className="text-blue-500 text-lg md:text-xl" />
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <span className="text-xl sm:text-2xl">{countryFlag}</span>
                <span className="mt-2 text-xs">{countryName}</span>
              </div>
            </div>
            <img
              src={companyImage}
              alt="Company Logo"
              className="w-16 h-10 md:w-12 md:h-6 object-cover border"
            />
          </div>
          <p className="text-[8px] sm:text-sm text-black/70 dark:text-gray-300">
            {description}
          </p>
          <div>
            <button
              className="mt-4 px-4 py-2 bg-[#e6e7ea] text-black hover:bg-[#d6d7da] dark:bg-[#e6e7ea]/50 dark:text-white transition"
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

export default BuyersCard;
