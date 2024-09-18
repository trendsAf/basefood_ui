import { IoIosArrowForward } from "react-icons/io";
import { BsPatchCheckFill } from "react-icons/bs";
import { buyersDetailsData } from "../../../utils/buyersDetailsData";
import { profile_image } from "../../../assets/images";

const BuyersInformationCard = () => {
  return (
    <div className="dark:text-white">
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-4 ">
          <div className="w-24 h-24">
            <img
              src={profile_image}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-3">
            <h1>Direct Inter Trading</h1>
            <BsPatchCheckFill />
          </div>
        </div>
        <div className="flex items-center gap-2 hover:border-b border-b-black cursor-pointer">
          <h1>View Buyer Profile</h1>
          <IoIosArrowForward />
        </div>
      </div>
      <div className="mt-6 dark:text-white">
        {buyersDetailsData.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[1fr_3fr] gap-y-3 dark:text-white"
          >
            <div className="flex flex-col gap-2 dark:text-white">
              {item.type.map((typeItem, typeIdx) => (
                <span
                  key={typeIdx}
                  className="text-base text-black/60 dark:text-white"
                >
                  {typeItem.name}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {item.data.map((dataItem, dataIdx) => (
                <span key={dataIdx} className="text-base">
                  {dataItem.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyersInformationCard;
