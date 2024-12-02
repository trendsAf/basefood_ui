import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";

interface OngoingCardProps {
  companyName: string;
  companyRevenue: string;
  onGoing: number;
  productName: string;
  productQuantity: number;
  productCategory: string;
  portOfDestination: string;
  sourcingCountries: string;
  requestDuration: string;
}

const OngoingCard = ({
  companyName,
  companyRevenue,
  onGoing,
  productName,
  productQuantity,
  portOfDestination,
  productCategory,
  requestDuration,
  sourcingCountries,
}: OngoingCardProps) => {
  return (
    <div className="border dark:border-[#252525] p-4 md:p-5 mt-5 md:mt-0 rounded shadow-sm bg-white dark:bg-[#252525] py-10 lg:py-0 lg:h-[22rem] h-80">
      <Link to={"/buyers/sourcing"} className="cursor-pointer">
        <div className="flex flex-col gap-3 md:gap-4 lg:py-4">
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-2 border-r border-black/50 pr-1">
              <h1 className="text-xs text-gray-800 dark:text-gray-200">
                {companyName.length > 15
                  ? `${companyName.slice(0, 15)}...`
                  : companyName}
              </h1>
              <MdVerified className="text-blue-500 text-lg" />
            </div>
            <div>
              <h1 className="text-xs text-gray-600 dark:text-gray-400">
                {companyRevenue}
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <div>
              <button className="bg-black/10 py-1 px-2 sm:px-3 rounded-full bg-yellow-100 text-yellow-600 text-xs ">
                Ongoing D-{onGoing}
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm  text-gray-800 dark:text-gray-200">
              <h1>{productName}</h1>
              <h1>{productQuantity} ton</h1>
            </div>
            <div className="grid grid-cols-2 gap-x-2 md:gap-x-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <div>
                <h1>Product Category</h1>
                <h1>Port of Destination</h1>
                <h1>Sourcing Countries</h1>
                <h1>Request Duration</h1>
              </div>
              <div className="text-gray-800 dark:text-gray-200">
                <h1>{productCategory}</h1>
                <h1>{portOfDestination}</h1>
                <h1>{sourcingCountries}</h1>
                <h1>{requestDuration}</h1>
              </div>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-[#e6e7ea] text-black hover:bg-[#d6d7da] dark:bg-[#e6e7ea]/50 dark:text-white transition">
            Submit Quote
          </button>
        </div>
      </Link>
    </div>
  );
};

export default OngoingCard;
