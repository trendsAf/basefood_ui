import { ChangeEvent, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BuyersCard from "../components/common/cards/BuyersCard";
import OngoingCard from "../components/common/cards/OngoingCard";
import { buyersData } from "../utils/buyersData";
import { ongoingData } from "../utils/onGoingData";
import { IoIosArrowForward } from "react-icons/io";
import { GrSearch } from "react-icons/gr";

const Buyers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  const filteredBuyers = buyersData.filter(
    (data) =>
      data.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.countryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const uniqueSuggestions = [
        ...new Set(
          buyersData.flatMap((data) =>
            [data.countryName, data.name, data.name].filter((item) =>
              item.toLowerCase().includes(value.toLowerCase()),
            ),
          ),
        ),
      ];
      setSuggestions(uniqueSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="dark:text-white text-black flex flex-col lg:flex-row lg:gap-10 max-w-[90%] mx-auto mt-10 w-full">
      <div className="lg:w-[30%] py-2 lg:py-0 lg:fixed lg:right-0 lg:top-16 lg:h-[85vh] lg:overflow-y-auto">
        <div className="flex items-center justify-between w-4/5 text-sm mt-10">
          <h1>Ongoing RFQs</h1>
          <div className="flex items-center gap-1 hover:border-b hover:text-brand-blue cursor-pointer ">
            <h1>View all RFQs </h1>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="my-2 mt-5 text-sm 2xl:text-lg text-black/50 dark:text-white">
          <h1>
            <b className="underline cursor-pointer hover:text-brand-blue mr-2">
              Create an RFQ
            </b>
            to let suppliers know what you need.
          </h1>
        </div>
        <div className="lg:hidden">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            ssr={true}
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="transform 0.5s ease"
            transitionDuration={500}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {ongoingData.map((data, idx) => (
              <OngoingCard
                companyName={data.companyName}
                companyRevenue={data.companyRevenue}
                onGoing={data.onGoing}
                productName={data.productName}
                productQuantity={data.productQuantity}
                productCategory={data.busines.productCategory}
                portOfDestination={data.busines.portOfDestination}
                sourcingCountries={data.busines.sourcingCountries}
                requestDuration={data.busines.requestDuration}
                key={idx}
              />
            ))}
          </Carousel>
        </div>
        <div className="hidden lg:block space-y-4 w-4/5 lg:w-[95%] xl:w-[90%] 2xl:w-4/5 mb-10">
          {ongoingData.map((data, idx) => (
            <OngoingCard
              companyName={data.companyName}
              companyRevenue={data.companyRevenue}
              onGoing={data.onGoing}
              productName={data.productName}
              productQuantity={data.productQuantity}
              productCategory={data.busines.productCategory}
              portOfDestination={data.busines.portOfDestination}
              sourcingCountries={data.busines.sourcingCountries}
              requestDuration={data.busines.requestDuration}
              key={idx}
            />
          ))}
        </div>
      </div>

      <div className="w-full lg:w-[70%] lg:border-r lg:pr-10 dark:border-r-[#252525]">
        <div className="lg:mt-24 mt-5 w-full">
          <h1 className="text-2xl">Buyers</h1>
          <div>
            <form className="relative">
              <input
                type="text"
                placeholder="Search buyers..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="border border-gray-300 dark:bg-[#252525] px-4 py-2 lg:w-2/5 mt-4 pl-10"
                style={{ width: "100%", maxWidth: "400px" }}
              />
              <GrSearch className="absolute top-7 left-3 text-black/20 dark:text-white/60" />
              {suggestions.length > 0 && (
                <ul className="border border-gray-300 rounded mt-2 max-h-60 overflow-y-auto">
                  {suggestions.map((suggestion, idx) => (
                    <li
                      key={idx}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 pb-10">
          {filteredBuyers.length > 0 ? (
            filteredBuyers.map((data, idx) => (
              <BuyersCard
                companyName={data.companyName}
                countryFlag={data.countryFlag}
                countryName={data.countryName}
                companyImage={data.companyImage}
                description={data.description}
                key={idx}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 dark:text-gray-400">
              No buyer found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Buyers;
