import BuyersCard from "../components/common/cards/BuyersCard";
import OngoingCard from "../components/common/cards/OngoingCard";
import { buyersData } from "../utils/buyersData";
import { ongoingData } from "../utils/onGoingData";

const Buyers = () => {
  return (
    <div className="dark:text-white text-black flex">
      <div className="m-5 grid grid-cols-2 gap-10 w-[60%]">
        {buyersData.map((data, idx) => (
          <BuyersCard
            companyName={data.companyName}
            countryFlag={data.countryFlag}
            countryName={data.countryName}
            profile={data.profile}
            companyImage={data.companyImage}
            description={data.description}
            name={data.name}
            key={idx}
          />
        ))}
      </div>
      <div className=" w-[40%]">
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
  );
};

export default Buyers;
