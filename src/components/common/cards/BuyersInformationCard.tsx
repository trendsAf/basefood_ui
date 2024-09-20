import { IoIosArrowForward } from "react-icons/io";
import { BsPatchCheckFill } from "react-icons/bs";
import { buyersDetailsData } from "../../../utils/buyersDetailsData";
import { profile_image } from "../../../assets/images";

const BuyersInformationCard = () => {
  return (
    <div className="dark:text-white">
      <div className="relative flex items-center justify-between lg:flex-row flex-col">
        <div className="flex lg:items-center items-start gap-4 w-full lg:w-auto">
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
        <div className="flex items-center gap-2 hover:border-b border-b-black cursor-pointer absolute lg:relative lg:top-0 lg:right-0 right-20 top-14">
          <h1>View Buyer Profile</h1>
          <IoIosArrowForward />
        </div>
      </div>
      <div className="mt-6 dark:text-white">
        {buyersDetailsData.map((item, idx) => (
          <div
            key={idx}
            className="grid lg:grid-cols-[1fr_3fr] grid-cols-2 gap-y-3 dark:text-white"
          >
            <div className="flex flex-col gap-2 space-y-2 dark:text-white">
              {item.type.map((typeItem, typeIdx) => (
                <span
                  key={typeIdx}
                  className="lg:text-base md:text-lg text-sm text-black/60 dark:text-white"
                >
                  {typeItem.name}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {item.data.map((dataItem, dataIdx) => (
                <span key={dataIdx} className="lg:text-base md:text-lg text-sm">
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
